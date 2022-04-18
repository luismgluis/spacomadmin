import utils from "../libs/utils/utils";

type RouterAnalyzeStates =
	| "wait"
	| "started"
	| "finish"
	| "timeout"
	| "error"
	| "unrecognized"
	| "skip";
export type TestRouter = {
	state: RouterAnalyzeStates;
	customer: Customer;
	creator: string;
};
export type TestRouterSimple = {
	state: RouterAnalyzeStates;
	idCustomer: string;
	creator: string;
};

export interface CustomerInterface {
	id: string;
	name: string;
	lastName: string;
	ip: string;
	router: string;
	routerUser?: string;
	routerPass?: string;
	appUser?: string;
	appPass?: string;
	lastWifiUser?: string;
	lastWifiPass?: string;
	idCard: string;
	email: string;
	creationDate: number;
	isNull?: boolean;
	idDoc?: string;
	lastModifyDate?: number;
	token?: string;
}
export default class Customer implements CustomerInterface {
	id: string;
	name: string;
	lastName: string;
	ip: string;
	router: string;
	routerUser?: string;
	routerPass?: string;
	appUser?: string;
	appPass?: string;
	lastWifiUser?: string;
	lastWifiPass?: string;
	idCard: string;
	email: string;
	creationDate: number;
	isNull?: boolean;
	idDoc?: string;
	lastModifyDate?: number;
	token?: string;
	constructor(data: CustomerInterface | null, isNull?: boolean) {
		this.name = data?.name || "";
		this.id = data?.id || "";
		this.email = data?.email || "";
		this.lastName = data?.lastName || "";
		this.ip = data?.ip || "";
		this.router = data?.router || "";
		this.idCard = data?.idCard || "";
		this.routerUser = data?.routerUser || "";
		this.routerPass = data?.routerPass || "";
		this.appUser = data?.appUser || "";
		this.appPass = data?.appPass || "";
		this.lastWifiUser = data?.lastWifiUser || "";
		this.lastWifiPass = data?.lastWifiPass || "";
		this.isNull = isNull || false; // check if Customer has not initialized
		this.creationDate = data?.creationDate || 0;
		this.lastModifyDate = data?.lastModifyDate || 0;
		this.idDoc = data?.idDoc || "";
		this.token = data?.token || "";
	}
	updateFromAnother(otherCustomer: Customer) {
		utils.objects.uploadObjFromObj(this, otherCustomer);
	}
	public get isEmptyTotal(): boolean {
		return this.id === "" || this.id !== this.idDoc;
	}
	public get isEmpty(): boolean {
		return this.id === "";
	}

	exportObject() {
		const newOb = utils.objects.cloneObject(this);
		console.log(newOb);
		return newOb;
	}
}
