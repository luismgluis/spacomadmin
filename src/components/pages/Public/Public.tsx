import React from "react";
import "./Public.scss";
import CText from "../../ui/CText/CText";
import CView from "../../ui/CView/CView";
import { Colors } from "../../../themes/Colors";
import AppIconLarge from "../../../icons/AppIcon/AppIconLarge";
import PublicRedirect from "./PublicRedirect";
type PublicProps = {};
const Public: React.FC<PublicProps> = ({}) => {
	return (
		<CView className="Public" bgx="bg300">
			<PublicRedirect />
			<CView
				className="publicHeader"
				style={{ justifyContent: "space-between" }}
				variant="flex-horizontal"
				height={100}
				mb={50}
			>
				<AppIconLarge width={200} height={100} />
				<CView centerItems>
					<CText color="#3747d6" size={30} height={100}>
						App
					</CText>
				</CView>
			</CView>
			<CView className="publicBody">
				<CView className="publicCard" style={styles.publicCard}>
					<a
						href="https://wisphub.net/saldo/spa/"
						target="_blank"
						rel="noreferrer"
					>
						<img
							alt="Pays"
							width={200}
							src="https://firebasestorage.googleapis.com/v0/b/spacom-web.appspot.com/o/platform%2F20944140%20(2)%20(1).jpg?alt=media&token=95be1133-6eba-4cfe-bc48-de5d40ecfd32"
						/>
						<CView
							className="content"
							style={styles.publicCardContent}
						>
							<h5>Paga en linea</h5>
							<small>
								<CText type="p">
									Sin salir de tu casa por PSE
								</CText>
								<CText type="p">
									Baloto, efecty y muchas mas opciones
								</CText>
							</small>
						</CView>
					</a>
				</CView>
				<CView className="publicCard" style={styles.publicCard}>
					<a
						href="https://clientes.wisphub.net/"
						target="_blank"
						rel="noreferrer"
					>
						<img
							alt="user dashboard"
							width={200}
							src="https://firebasestorage.googleapis.com/v0/b/spacom-web.appspot.com/o/platform%2F3529848%20(1).jpg?alt=media&token=c6f16f78-2e4e-45d8-9719-63d4f69c13d3"
						/>
						<CView
							className="content"
							style={styles.publicCardContent}
						>
							<h5>Portal de acciones</h5>
							<CText type="p">
								Consulta tus facturas, consumos y mucho mas
							</CText>
							<br />
							<small>
								<CText type="p" blond>
									Recuerda si nunca haz ingresado tu clave es:
									spacom21
								</CText>
							</small>
						</CView>
						<div className="publicCardBottom whatsappLink">
							<a
								href="https://api.whatsapp.com/send?phone=573043123518&text=Hola%2C%20Quisiera%20solicitar%20mis%20datos%20de%20acceso%20para%20el%20portal%20de%20clientes."
								target="_blank"
								rel="noopener noreferrer"
							>
								Solicitar cambio de datos
							</a>
						</div>
					</a>
				</CView>
			</CView>
			<CView className="publicFooter">
				<CText type="p">2022 © SPACOM.</CText>
			</CView>
		</CView>
	);
};
const styles: Record<string, React.CSSProperties> = {
	publicCard: {
		backgroundColor: Colors.primary100,
		borderColor: Colors.primary200,
	},
	publicCardContent: {
		backgroundColor: Colors.primary200,
	},
};
export default Public;
