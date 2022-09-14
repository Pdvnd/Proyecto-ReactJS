import React from "react";
import { Button, Modal } from "react-bootstrap";
import { FormConfimDataUser } from "../Cart/FormConfirmDataUser";
import "./ModalDataUser.css";

function MyVerticallyCenteredModal(props) {

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Confirma tus datos para el envio
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <FormConfimDataUser />
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export const ModalDataUser = () => {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <>
            <Button
                variant="light"
                className='btnComprar comprarBtn'
                onClick={() => setModalShow(true)}
            >
                Comprar
            </Button>
            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    );
}