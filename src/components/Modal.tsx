import { useState } from 'react';
import { Button, Card, Modal as FBModal } from 'flowbite-react';

export const Modal = () => {

    const [openModal, setOpenModal] = useState();

    return (
        <>
            <Button onClick={() => setOpenModal('default')}>Toggle modal</Button>
         
            <FBModal show={openModal === 'default'} onClose={() => setOpenModal(undefined)}>
                <FBModal.Header>title</FBModal.Header>
                <FBModal.Body>
                body
                </FBModal.Body>
                <FBModal.Footer className="flex justify-end">
                    <Button color='red'  onClick={() => setOpenModal(undefined)}>Cerrar</Button>
                </FBModal.Footer>
            </FBModal>
        </>
    )
}


