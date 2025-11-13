// @ts-nocheck
import {Button, Col, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader, Row} from "reactstrap";
import {useEffect, useState} from "react";
import {deleteWidget, updateWidget, uploadImage} from "../WidgetClient.ts";
import {COLOR_OPTIONS, LIFECYCLE_OPTIONS} from "./AddItemModal.tsx";

function EditItemModal({item, open, onClose, onSave, onDelete}){
    const [formData, setFormData] = useState(null);

    useEffect(()=>{
        if(item)
            setFormData({...item,
            color: item.color.id,
            lifecycle: item.lifecycle.id});
    }, [item])

    if(!item || !formData) return null;

    const handleSubmit = async (e) => {
        e.preventDefault();

        const colorObj = COLOR_OPTIONS.find(c => c.id === Number(formData.color));
        const lifecycleObj = LIFECYCLE_OPTIONS.find(l => l.id === Number(formData.lifecycle));

        const updatedWidget = {
            ...formData,
            color: colorObj,
            lifecycle: lifecycleObj,
            updatedAt: new Date().toISOString()
        };

        try {
            await updateWidget(item.id, updatedWidget)
            onSave();
            onClose();
        } catch (e) {
            console.error(e);
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleDelete = (id) => {
        deleteWidget(id).then(()=>{
            onDelete(id);
            onClose();
        }).catch((e)=>{
            console.error(e)
        })
    }

    return(
        <>
            <Modal isOpen={open} toggle={onClose}>
                <ModalHeader toggle={onClose}>Edit Widget</ModalHeader>
                <ModalBody>
                    <Form onSubmit={handleSubmit}>
                        <FormGroup>
                            <Label for="name">Name</Label>
                            <Input name="name" value={formData.name} onChange={handleChange} required />
                        </FormGroup>

                        <FormGroup>
                            <Label for="blurb">Blurb</Label>
                            <Input name="blurb" value={formData.blurb} onChange={handleChange} required/>
                        </FormGroup>

                        <Row>
                            <Col md={4}>
                                <FormGroup>
                                    <Label for="rating">Rating</Label>
                                    <Input
                                        type="select"
                                        name="rating"
                                        value={formData.rating}
                                        onChange={(e) =>
                                            setFormData(prev => ({ ...prev, rating: Number(e.target.value) }))
                                        }
                                        required
                                    >
                                        {[1, 2, 3, 4, 5].map((n) => (
                                            <option key={n} value={n}>{n}</option>
                                        ))}
                                    </Input>
                                </FormGroup>
                            </Col>
                            <Col md={4}>
                                <FormGroup>
                                    <Label for="quantity">Quantity</Label>
                                    <Input
                                        type="number"
                                        name="quantity"
                                        value={formData.quantity}
                                        onChange={handleChange}
                                    />
                                </FormGroup>
                            </Col>
                            <Col md={4}>
                                <FormGroup>
                                    <Label for="price">Price</Label>
                                    <Input
                                        type="number"
                                        step="0.01"
                                        name="price"
                                        value={formData.price}
                                        onChange={handleChange}
                                    />
                                </FormGroup>
                            </Col>
                        </Row>

                        <FormGroup>
                            <Label for="slug">Slug</Label>
                            <Input name="slug" value={formData.slug} onChange={handleChange} required/>
                        </FormGroup>

                        <FormGroup>
                            <Label for="image">Upload Image (optional) </Label>
                            <Input
                                type="file"
                                accept="image/*"
                                onChange={async (e) => {
                                    const file = e.target.files[0];
                                    if (!file) return;

                                    try {
                                        const imageUrl = await uploadImage(file); // client call
                                        setFormData(prev => ({
                                            ...prev,
                                            imageUrl: imageUrl
                                        }));
                                    } catch (err) {
                                        console.error("Error uploading image:", err);
                                    }
                                }}
                            />
                        </FormGroup>

                        <FormGroup>
                            <Label for="color">Color</Label>
                            <Input
                                type="select"
                                name="color"
                                value={formData.color}
                                onChange={handleChange}
                                required
                            >
                                {COLOR_OPTIONS.map((c) => (
                                    <option key={c.id} value={c.id}>
                                        {c.label}
                                    </option>
                                ))}
                            </Input>
                        </FormGroup>

                        <FormGroup>
                            <Label for="lifecycle">Lifecycle</Label>
                            <Input
                                type="select"
                                name="lifecycle"
                                value={formData.lifecycle}
                                onChange={handleChange}
                                required
                            >
                                {LIFECYCLE_OPTIONS.map((l) => (
                                    <option key={l.id} value={l.id}>
                                        {l.status}
                                    </option>
                                ))}
                            </Input>
                        </FormGroup>

                        <ModalFooter>
                            <Button color={"danger"}   onClick={() => {
                                if (window.confirm("Are you sure you want to delete this item?")) {
                                    handleDelete(item.id);
                                }}}>Delete</Button>
                            <Button className={"myButton2"} onClick={onClose}>Cancel</Button>
                            <Button className={"myButton"} type="submit">Save</Button>
                        </ModalFooter>
                    </Form>
                </ModalBody>
            </Modal>
        </>

    )
}
export default EditItemModal;