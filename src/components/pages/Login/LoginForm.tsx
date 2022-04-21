import "./Login.scss";
import React, { useCallback, useState } from "react";
import AppIcon from "../../../icons/AppIcon/AppIcon";
import CButton from "../../ui/CButton/CButton";
import CInput from "../../ui/CInput/CInput";
import CText from "../../ui/CText/CText";
import { useCustomAlert } from "../../hooks/customAlert";
import Api from "../../../api/Api";

import { useCurrentUser, useSetCurrentUser } from "../../hooks/currentUser";
import CView from "../../ui/CView/CView";
import { useNavigate } from "react-router-dom";
import { Colors } from "../../../themes/Colors";
import AppIconLarge from "../../../icons/AppIcon/AppIconLarge";

const TAG = "LOGIN FORM";
type LoginFormProps = {
	onGoToNext?: () => void;
};
const LoginForm: React.FC<LoginFormProps> = ({ onGoToNext = () => null }) => {
	const navigate = useNavigate();
	const alert = useCustomAlert();

	const [form, setForm] = useState({
		user: "",
		pass: "",
	});
	const [formCreate, setFormCreate] = useState({
		name: "",
		user: "",
		pass: "",
	});
	const [loadingEnabled] = useState(false);
	const [createEnabled, setCreateEnabled] = useState(false);
	const setMe = useSetCurrentUser();
	const login = useCallback(
		(email: string, pass: string) => {
			console.log(TAG, "loginclick");
			if (email === "" || pass === "") return;
			const fail = () => {
				alert.error("Login Fallido");
			};
			Api.app
				.loginWithEmail(email, pass)
				.then((data) => {
					const uid = Api.app.me()?.uid;
					if (uid) {
						Api.database.user
							.getUser(uid)
							.then((user) => {
								if (!user.isEmpty) {
									setMe(user);
									alert.info("Login Correcto");
									navigate("/home");
								}
							})
							.catch((err) => {
								fail();
							});
					} else {
						fail();
					}
				})
				.catch((err) => {
					fail();
				});
		},
		[alert, navigate, setMe]
	);

	const loginAction = useCallback(
		(e: React.FormEvent<HTMLFormElement>) => {
			e.preventDefault();
			if (form.user) {
				console.log(TAG, form);
			}
			login(form.user, form.pass);
		},
		[form, login]
	);

	const create = useCallback(
		(e: React.FormEvent<HTMLFormElement>) => {
			e.preventDefault();
			alert.error("Creacion restringida a la app movil", "Rechazado");
			//history.push("/home");
		},
		[alert]
	);

	return (
		<CView className="LoginForm">
			<CView>
				<CView py={20} centerItems>
					<div className="appIcon">
						<AppIconLarge width={220} height={60} />
					</div>
				</CView>
				{!loadingEnabled && !createEnabled && (
					<>
						<form onSubmit={(e) => loginAction(e)}>
							<CView>
								<CInput
									label="Usuario"
									placeHolder="usuario@email.com"
									marginX={20}
									marginY={10}
									value={form.user}
									onUpdate={(val) =>
										setForm({ ...form, user: val })
									}
								/>
								<CInput
									label="Contraseña"
									name="current-password"
									autoComplete="on"
									marginX={20}
									marginY={10}
									placeHolder="********"
									type="password"
									value={form.pass}
									onUpdate={(val) =>
										setForm({ ...form, pass: val })
									}
								/>
								<CView centerItems>
									<CButton actionx="submit">LOGIN</CButton>
								</CView>
							</CView>
						</form>
						<CView centerItems pt={20}>
							<CButton
								onPress={() => onGoToNext()}
								ghost
								mx="20%"
							>
								Registrarse
							</CButton>
						</CView>
					</>
				)}
				{!loadingEnabled && createEnabled && (
					<>
						<form onSubmit={(e) => create(e)}>
							<CView>
								<CInput
									label="Nombre completo"
									placeHolder="Chavelo ..."
									marginX={20}
									marginY={10}
									value={formCreate.name}
									onUpdate={(val) =>
										setFormCreate({
											...formCreate,
											name: val,
										})
									}
								/>
								<CInput
									label="Usuario"
									placeHolder="usuario@email.com"
									marginX={20}
									marginY={10}
									value={formCreate.user}
									onUpdate={(val) =>
										setFormCreate({
											...formCreate,
											user: val,
										})
									}
								/>
								<CInput
									label="Contraseña"
									marginX={20}
									marginY={10}
									name="current-password"
									autoComplete="on"
									placeHolder="********"
									type="password"
									value={formCreate.pass}
									onUpdate={(val) =>
										setFormCreate({
											...formCreate,
											pass: val,
										})
									}
								/>
								<CButton mx="10px">CREAR CUENTA</CButton>
							</CView>
						</form>
						<CButton
							onPress={() => setCreateEnabled(false)}
							ghost
							mx="20%"
						>
							Cancelar
						</CButton>
					</>
				)}
			</CView>
		</CView>
	);
};
export default LoginForm;
