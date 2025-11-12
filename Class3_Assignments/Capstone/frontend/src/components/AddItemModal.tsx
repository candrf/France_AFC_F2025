import {Button, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import {useEffect, useState} from "react";

function AddItemModal({open, onClose}){
    const [formData, setFormData] = useState(null);

    const handleSubmit = (e) =>{
        e.preventDefault();
        onClose();
    }

    return(
        <>
            <Modal isOpen={open}>
                <ModalHeader >Add Item</ModalHeader>
                <ModalBody>
                    <form onSubmit={handleSubmit}>
                        <label> Name
                            <input
                                id={"name"}
                                placeholder={"add"}
                            />
                            <Button color="primary" type={"submit"} >
                                Save
                            </Button>{' '}
                            <Button color="secondary" onClick={()=>onClose()}>
                                Cancel
                            </Button>
                        </label>
                    </form>
                </ModalBody>
            </Modal>
        </>

    )
}
export default AddItemModal;