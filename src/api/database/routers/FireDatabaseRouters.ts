import Business from "../../../classes/Business";
import Customer, {
	TestRouter,
	TestRouterSimple,
} from "../../../classes/Customer";
import RouterDevice, { RouterBankLogin } from "../../../classes/RouterDevice";
import User from "../../../classes/User";
import utils from "../../../libs/utils/utils";
import { FireDoc, FireRef } from "../../Api";

import App from "../../App";

class FireDatabaseRouters {
	private app: App;
	private allUsers: any;
	constructor(app: App) {
		this.app = app;
		this.allUsers = {};
	}
	saveRouter(router: RouterDevice): Promise<RouterDevice> {
		const that = this;
		return new Promise<RouterDevice>((resolve, reject) => {
			try {
				router.creationDate = utils.dates.dateNowUnix();
				that.app
					.database()
					.collection("routers")
					.add(router.exportObject())
					.then((res) => {
						router.id = res.id;
						resolve(router);
					})
					.catch((err) => {
						reject(err);
					});
			} catch (error) {
				reject(null);
			}
		});
	}
	modifyRouter(router: RouterDevice): Promise<RouterDevice> {
		const that = this;
		return new Promise<RouterDevice>((resolve, reject) => {
			try {
				router.creationDate = utils.dates.dateNowUnix();
				that.app
					.database()
					.collection("routers")
					.doc(router.id)
					.set(router.exportObject())
					.then((res) => {
						resolve(router);
					})
					.catch((err) => {
						reject(err);
					});
			} catch (error) {
				reject(null);
			}
		});
	}

	deleteRouter(router: RouterDevice): Promise<boolean> {
		const that = this;
		return new Promise<boolean>((resolve, reject) => {
			try {
				router.creationDate = utils.dates.dateNowUnix();
				that.app
					.database()
					.collection("routers")
					.doc(router.id)
					.delete()
					.then((res) => {
						resolve(true);
					})
					.catch((err) => {
						reject(err);
					});
			} catch (error) {
				reject(null);
			}
		});
	}

	getRoutersListener(callBack: (res: RouterDevice[]) => void) {
		const that = this;
		const db = this.app.database();
		let allData: any = [];

		const unsubs = db
			.collection("routers")
			.orderBy("creationDate", "asc")
			.onSnapshot(
				async (result) => {
					if (!result.empty) {
						const arr: RouterDevice[] = [];
						result.forEach((item) => {
							const data: any = item.data();
							data.id = item.id;
							arr.push(new RouterDevice(data));
						});
						allData = arr;
						callBack(arr);
						return;
					}
					callBack([]);
				},
				(err) => {
					callBack(allData);
				}
			);

		return unsubs;
	}
	private listenRouterChange(
		business: Business,
		router: TestRouter,
		doc: FireRef
	) {
		const that = this;
		const db = that.app.database();

		return new Promise<TestRouter>((resolve, reject) => {
			try {
				let unsubs: () => void = () => null;
				const time = setTimeout(() => {
					unsubs();
					reject("TIMEOUT");
				}, 1000 * 80);
				if (doc) {
					unsubs = doc.onSnapshot(
						(snap) => {
							const meObj: TestRouterSimple = <any>snap.data();
							if (meObj) {
								if (meObj.state !== router.state) {
									router.state = meObj.state;
									clearTimeout(time);
									unsubs();
									resolve(router);
								}
							}
						},
						(err) => reject(err)
					);
				}
				if (!doc) {
					const reference = db
						.collection("business")
						.doc(business.id)
						.collection("analyzeRouters")
						.where("idCustomer", "==", router.customer.id);

					unsubs = reference.onSnapshot(
						(snap) => {
							const arr: TestRouterSimple[] = [];
							if (!snap.empty) {
								snap.docs.forEach((item) =>
									arr.push(<any>item.data())
								);
								const meObj = arr.find(
									(item) =>
										item.idCustomer === router.customer.id
								);
								if (meObj) {
									if (meObj.state !== router.state) {
										router.state = meObj.state;
										clearTimeout(time);
										unsubs();
										resolve(router);
									}
								}
							}
						},
						(err) => reject(err)
					);
				}
			} catch (error) {
				reject(error);
			}
		});
	}
	analyzeRouters(
		me: User,
		business: Business,
		data: TestRouter[],
		callBack: (newData: TestRouter[]) => void
	) {
		const that = this;
		const db = that.app.database();
		let tests = [...data];
		let stop = false;
		// callBack = (newData: TestRouter[]) => {
		//   if(utils.objects.hasDiferences(tests))
		// };
		const changeTest = async (test: TestRouter) => {
			const objInTests = tests.find(
				(item) => item.customer.id === test.customer.id
			);
			if (!objInTests) return false;
			const dataUpload: TestRouterSimple = {
				idCustomer: test.customer.id,
				state: "started",
				creator: test.creator,
			};
			callBack([...tests]);
			if (test.state === "wait") {
				if (!test.customer.idDoc) {
					const res =
						await that.app.databaseFns.customer.saveCustomer(
							business,
							test.customer
						);
					if (res) test.customer = res;
				} else {
					//customer exist
					const hasLogin =
						test.customer.routerPass !== "" ||
						test.customer.routerUser !== "";
					if (
						test.customer.router !== "" &&
						hasLogin &&
						data.length > 10
					) {
						objInTests.state = "skip";
						callBack([...tests]);
						return false;
					}
				}

				const doc = await db
					.collection("business")
					.doc(business.id)
					.collection("analyzeRouters")
					.add(dataUpload)
					.then((res) => res)
					.catch((err) => null);
				if (doc) {
					//

					objInTests.state = "started";
					callBack([...tests]);

					try {
						const routerResult = await that.listenRouterChange(
							business,
							test,
							doc
						);
						if (routerResult) objInTests.state = routerResult.state;
					} catch (error) {
						if (error === "TIMEOUT") {
							objInTests.state = "timeout";
							return;
						}
						objInTests.state = "error";
					} finally {
						await doc.delete();
						db.collection("business")
							.doc(business.id)
							.collection("analyzeRouters")
							.where("idCustomer", "==", test.customer.id)
							.get()
							.then((result) =>
								result.forEach((docu) => docu.ref.delete())
							);

						callBack([...tests]);
					}
				}
			}
			return false;
		};
		const analyze = async () => {
			for (const key in tests) {
				if (stop) break;
				const test = tests[key];
				await changeTest(test);
			}
		};
		analyze().then((res) => null);

		return () => {
			stop = true;
		};
	}
	bankLoginsListener(
		business: Business,
		callBack: (res: RouterBankLogin[]) => void
	) {
		const that = this;
		const db = that.app.database();
		let allData: any = [];

		const unsubs = db
			.collection("business")
			.doc(business.id)
			.collection("bankLogin")
			.orderBy("creationDate", "asc")
			.onSnapshot(
				async (result) => {
					if (!result.empty) {
						const arr: RouterBankLogin[] = [];
						result.forEach((item) => {
							const data: any = item.data();
							data.id = item.id;
							arr.push(new RouterBankLogin(data));
						});
						allData = arr;
						callBack(arr);
						return;
					}
					callBack([]);
				},
				(err) => {
					callBack(allData);
				}
			);

		return unsubs;
	}
	saveBankLogin(business: Business, bankLogin: RouterBankLogin) {
		const that = this;
		return new Promise<RouterBankLogin>((resolve, reject) => {
			try {
				bankLogin.creationDate = utils.dates.dateNowUnix();
				that.app
					.database()
					.collection("business")
					.doc(business.id)
					.collection("bankLogin")
					.add(bankLogin.exportObject())
					.then((res) => {
						bankLogin.id = res.id;
						resolve(bankLogin);
					})
					.catch((err) => {
						reject(err);
					});
			} catch (error) {
				reject(null);
			}
		});
	}
	deleteBankLogin(business: Business, bankLogin: RouterBankLogin) {
		const that = this;
		return new Promise<boolean>((resolve, reject) => {
			try {
				bankLogin.creationDate = utils.dates.dateNowUnix();
				that.app
					.database()
					.collection("business")
					.doc(business.id)
					.collection("bankLogin")
					.doc(bankLogin.id)
					.delete()
					.then((res) => {
						resolve(true);
					})
					.catch((err) => {
						resolve(false);
					});
			} catch (error) {
				reject(null);
			}
		});
	}
}

export default FireDatabaseRouters;
