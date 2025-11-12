import {Button, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import {useEffect, useState} from "react";

function EditItemModal({item, open, onClose, onSave}){
    const [formData, setFormData] = useState(null);

    useEffect(()=>{
        if(item)
            setFormData({...item});
    }, [item])

    if(!item || !formData) return null;

    const handleSubmit = (e) =>{
        e.preventDefault();
        onSave(formData);
        onClose();
    }

    return(
        <>
            <Modal isOpen={open}>
                <ModalHeader >Edit Item</ModalHeader>
                <ModalBody>
                    <form onSubmit={handleSubmit}>
                        <label> Name
                            <input
                                id={"name"}
                                placeholder={formData.name}
                                value={formData.name}
                                onChange={(e) =>
                                    setFormData({ ...formData, name: e.target.value })
                                }
                            />
                            <Button color="primary" onClick={handleSubmit} >
                                Save
                            </Button>{' '}
                            <Button color="secondary" type={"submit"}>
                                Cancel
                            </Button>
                        </label>
                    </form>
                    {formData.category}
                </ModalBody>
            </Modal>
        </>

    )
}
export default EditItemModal;