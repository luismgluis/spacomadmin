import firebase from "firebase/app";
import "firebase/messaging";

import App from "./App";
const TOKEN =
	"BJWtsIqb_Ep_PiyFNgUsAnitQSSc8T59clgE715zf4YhS-NeZCSNM-Et7f1_KWwPmMiNCySyzZDRrLCdY4lKd3g";

export default class Messaging {
	app: App;
	constructor(app: App) {
		this.app = app;
	}
	async getToken() {
		if (!firebase.messaging.isSupported()) {
			console.log("not supported");
			return false;
		}

		const register = await navigator.serviceWorker
			.register("./firebase-messaging-sw.js")
			.then((r) => {
				console.log(r);
				return true;
			})
			.catch((err) => {
				console.log(err);
				return false;
			});
		if (!register) return false;
		const messaging = await firebase.messaging(this.app.fire!);
		let resultToken: string | null = "";
		const resultPermission = await Notification.requestPermission()
			.then((res) => {
				return res === "granted";
			})
			.catch((err) => null);
		if (resultPermission) {
			resultToken = await messaging
				.getToken({
					vapidKey: TOKEN,
				})
				.then((res) => {
					return res;
				})
				.catch((err) => {
					console.log(err);
					return null;
				});
		}
		return resultToken;
	}
	messagesListener(
		callBack: (res: firebase.messaging.MessagePayload) => void
	) {
		const messaging = firebase.messaging(this.app.fire!);

		const unsubs = messaging.onMessage(
			(msj) => {
				console.log(msj);
				callBack(msj);
			},
			(err) => {
				console.log(err);
			},
			() => {
				console.log("messages listener complete");
			}
		);
		return unsubs;
	}
}
