// @ts-nocheck
import {Button, Col, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader, Row} from "reactstrap";
import {useState} from "react";
import {addWidget, uploadImage} from "../WidgetClient";


export const COLOR_OPTIONS = [
    { id: 1, label: "Red", code: "C001", hex: "#ff0000" },
    { id: 2, label: "Green", code: "C002", hex: "#00ff00" },
    { id: 3, label: "Blue", code: "C003", hex: "#0000ff" },
    { id: 4, label: "Black", code: "C004", hex: "#000000" },
    { id: 5, label: "White", code: "C005", hex: "#ffffff" }
];

export const LIFECYCLE_OPTIONS = [
    { id: 1, status: "active" },
    { id: 2, status: "inactive" }
];


function AddItemModal({open, onClose, onAdd}){
    const [formData, setFormData] = useState({
        name: "",
        blurb: "",
        rating: 0,
        quantity: 0,
        price: 0.0,
        slug: "",
        createdAt: "",
        updatedAt: "",
        imageUrl:"",
        color: {
            id: 0,
            colorCode: "",
            colorLabel: "",
            colorHex: ""
        },
        lifecycle:{
            id: 0,
            lifecycleStatus: ""
        }
    });

    const handleSubmit = (e) =>{
        e.preventDefault();

        const colorObj = COLOR_OPTIONS.find((c) => c.id === Number(formData.color));
        const lifecycleObj = LIFECYCLE_OPTIONS.find((l) => l.id === Number(formData.lifecycle));

        // Build final object
        const widgetToSend = {
            name: formData.name,
            blurb: formData.blurb,
            rating: Number(formData.rating),
            quantity: Number(formData.quantity),
            price: Number(formData.price),
            slug: formData.slug,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            imageUrl: formData.imageUrl,
            color: colorObj,
            lifecycle: lifecycleObj
        };

        addWidget(widgetToSend)
            .then(()=>{
                setFormData({
                    name: "",
                    blurb: "",
                    rating: 0,
                    quantity: 0,
                    price: 0.0,
                    slug: "",
                    createdAt: "",
                    updatedAt: "",
                    imageUrl:"",
                    color: {
                        id: 0,
                        colorCode: "",
                        colorLabel: "",
                        colorHex: ""
                    },
                    lifecycle:{
                        id: 0,
                        lifecycleStatus: ""
                    }
                });
            })
            .then(()=>{
                onAdd(widgetToSend);
                onClose();
            })
            .catch( (error) =>{
            console.error(error)
        })}

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return(
        <>
            <Modal isOpen={open} toggle={onClose}>
                <ModalHeader toggle={onClose}>Add Widget</ModalHeader>
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
                            <Label for="image">Upload Image</Label>
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
                                required
                            />
                        </FormGroup>


                        <FormGroup>
                            <Label for="color">Color</Label>
                            <Input
                                type="select"
                                name="color"
                                value={formData.color || ""}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select color</option>
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
                                value={formData.lifecycle || ""}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select lifecycle</option>
                                {LIFECYCLE_OPTIONS.map((l) => (
                                    <option key={l.id} value={l.id}>
                                        {l.status}
                                    </option>
                                ))}
                            </Input>
                        </FormGroup>


                        <ModalFooter>
                            <Button className={"myButton"} type="submit">Save</Button>
                            <Button className={"myButton2"} onClick={onClose}>Cancel</Button>
                        </ModalFooter>
                    </Form>
                </ModalBody>
            </Modal>
        </>

    )
}
export default AddItemModal;