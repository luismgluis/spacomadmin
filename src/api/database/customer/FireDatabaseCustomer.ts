import Business from "../../../classes/Business";
import Customer from "../../../classes/Customer";
import utils from "../../../libs/utils/utils";
import App from "../../App";

const TAG = "FIRE DATABASE USER";
class FireDatabaseCustomer {
	private app: App;
	private allCustomer: any;
	constructor(app: App) {
		this.app = app;
		this.allCustomer = {};
	}

	getCustomersListener(
		business: Business,
		callback: (res: Customer[]) => void
	) {
		const that = this;
		const db = that.app.database();
		const unsubs = db
			.collection("business")
			.doc(business.id)
			.collection("customers")
			.onSnapshot(
				(result) => {
					if (!result.empty) {
						const arr: Customer[] = [];
						result.forEach((doc) => {
							const data: any = doc.data();
							data.id = doc.id;
							data.idDoc = doc.id;
							const newCustomer = new Customer(data);
							that.allCustomer[doc.id] = newCustomer;
							arr.push(newCustomer);
						});
						callback(arr);
						return;
					}
					console.log(business);
					callback([]);
				},
				(err) => {
					console.log(err);
					callback([]);
				}
			);
		return unsubs;
	}
	getCustomerByIdCard(cBusiness: Business, idCard: string) {
		const that = this;
		const db = this.app.database();
		return new Promise<Customer>((resolve, reject) => {
			try {
				db.collection("business")
					.doc(cBusiness.id)
					.collection("customers")
					.where("idCard", "==", idCard)
					.get()
					.then((result) => {
						const arr: Customer[] = [];
						if (!result.empty) {
							result.forEach((doc) =>
								arr.push(new Customer(<any>doc.data()))
							);
						}
						if (arr.length > 0) {
							resolve(arr[0]);
							return;
						}
						reject(null);
						reject("Not user");
					})
					.catch((err) => {
						console.log("catch", err);
						reject(err);
					});
			} catch (error) {
				reject(error);
			}
		});
	}
	getCustomer(cBusiness: Business, idCustomer: string) {
		const that = this;
		const db = this.app.database();
		return new Promise<Customer>((resolve, reject) => {
			try {
				if (typeof that.allCustomer[idCustomer] !== "undefined") {
					if (that.allCustomer[idCustomer] !== null) {
						resolve(that.allCustomer[idCustomer]);
						return;
					}
				}
				db.collection("business")
					.doc(cBusiness.id)
					.collection("customers")
					.doc(idCustomer)
					.get()
					.then((result) => {
						if (result.exists) {
							const data: any = result.data();
							data.id = result.id;
							const customer = new Customer(data);
							that.allCustomer[idCustomer] = customer;
							resolve(customer);
							return;
						}
						reject("Not user");
					})
					.catch((err) => {
						console.log("catch", err);
						reject(err);
					});
			} catch (error) {
				reject(error);
			}
		});
	}
	searchCustomerByIp(business: Business, ip: string, onlyLocal = false) {
		const that = this;
		const db = this.app.database();
		return new Promise<Customer>((resolve, reject) => {
			try {
				const allIds = Object.keys(that.allCustomer);
				for (const id of allIds) {
					const customer: Customer = that.allCustomer[id];
					if (customer.ip === ip) {
						resolve(customer);
						return;
					}
				}
				if (onlyLocal) {
					reject("Not user (only local used)");
					return;
				}

				db.collection("business")
					.doc(business.id)
					.collection("customers")
					.where("ip", "==", ip)
					.limit(1)
					.get()
					.then((result) => {
						if (!result.empty) {
							const data: Customer[] = [];
							result.forEach((item) => {
								const data: any = item.data();
								data.id = item.id;
								data.push(new Customer(data));
							});
							resolve(data[0]);
							return;
						}
						reject("Not user");
					})
					.catch((err) => {
						console.log("catch", err);
						reject(err);
					});
			} catch (error) {
				reject(error);
			}
		});
	}
	saveCustomer(business: Business, customer: Customer) {
		const that = this;

		const saveOnMe = async () => {
			customer.creationDate = utils.dates.dateNowUnix();
			const res = await that.app
				.database()
				.collection("business")
				.doc(business.id)
				.collection("customers")
				.add(customer.exportObject())
				.then((doc) => doc)
				.catch(() => null);
			if (res) {
				customer.id = res.id;
				that.allCustomer[res.id] = customer;
			}

			return res;
		};
		return new Promise<Customer>(async (resolve, reject) => {
			try {
				const resSaveOnMe = await saveOnMe();
				if (resSaveOnMe) {
					customer.id = resSaveOnMe.id;
					resolve(customer);
					return;
				}
				reject("Fail on add Customer");
			} catch (error) {
				reject(null);
			}
		});
	}
	modifyCustomer(business: Business, customer: Customer) {
		const that = this;
		customer.lastModifyDate = utils.dates.dateNowUnix();

		const save = async () => {
			const res = await that.app
				.database()
				.collection("business")
				.doc(business.id)
				.collection("customers")
				.doc(customer.id)
				.set(customer.exportObject())
				.then(() => true)
				.catch(() => null);
			if (res) {
				that.allCustomer[customer.id] = customer;
				return true;
			}
			return null;
		};

		return new Promise<boolean>(async (resolve, reject) => {
			try {
				const resSave = await save();
				if (resSave) {
					resolve(true);
					return;
				}
				reject("Fail on add to me Customer");
			} catch (error) {
				reject(null);
			}
		});
	}
	removeCustomer(business: Business, customer: Customer) {
		const that = this;
		const remove = async () => {
			const res = await that.app
				.database()
				.collection("business")
				.doc(business.id)
				.collection("customers")
				.doc(customer.id)
				.delete()
				.then(() => true)
				.catch(() => null);
			return res;
		};

		return new Promise<boolean>(async (resolve, reject) => {
			try {
				const resAction = await remove();

				if (resAction) {
					resolve(true);
					return;
				}
				reject("Fail on remove this Customer");
			} catch (error) {
				reject(null);
			}
		});
	}
}

export default FireDatabaseCustomer;
