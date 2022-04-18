import "./CModal.scss";
import React, { useEffect } from "react";
import Modal from "react-modal";

const TAG = "CUSTOM MODAL";

const customStyles = {
	content: {
		top: "50%",
		left: "50%",
		right: "auto",
		bottom: "auto",
		marginRight: "-50%",
		transform: "translate(-50%, -50%)",
	},
};
Modal.setAppElement("#root");

interface CModalProps extends React.HTMLAttributes<HTMLDivElement> {
	modalShow: boolean;
	onClose?: () => void;
}
const CModal: React.FC<CModalProps> = (props) => {
	console.log(TAG, "render");
	const [modalIsOpen, setIsOpen] = React.useState(false);

	// function openModal() {
	//   setIsOpen(true);
	// }

	function afterOpenModal() {
		// references are now sync'd and can be accessed.
	}

	function closeModal() {
		setIsOpen(false);
		if (props.onClose) props.onClose();
	}
	useEffect(() => {
		setIsOpen(props.modalShow);
	}, [props.modalShow]);

	return (
		<Modal
			isOpen={modalIsOpen}
			onAfterOpen={afterOpenModal}
			onRequestClose={closeModal}
			style={customStyles}
			contentLabel="Example Modal"
			// className="Modal"
			overlayClassName="Overlay"
		>
			<div></div>
			{props.children}
		</Modal>
	);
};
export default CModal;
