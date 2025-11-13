import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";

function ViewItemModal({item, open, onClose}){
    if(!item) return null

    return(
        <>
            <Modal isOpen={open}>
                <ModalHeader >{"More Info: " + item.name}</ModalHeader>
                <ModalBody>
                    {item.imageUrl && (
                        <div className="text-center mb-3">
                            <img
                                src={item.imageUrl}
                                alt={item.name}
                                className={"cardImg"}
                            />
                        </div>
                    )}
                    <dl className="row mb-0">
                        <dt className="col-sm-4">Blurb:</dt>
                        <dd className="col-sm-8">{item.blurb || "—"}</dd>

                        <dt className="col-sm-4">Rating:</dt>
                        <dd className="col-sm-8">{item.rating ?? "—"}</dd>

                        <dt className="col-sm-4">Quantity:</dt>
                        <dd className="col-sm-8">{item.quantity ?? "—"}</dd>

                        <dt className="col-sm-4">Price:</dt>
                        <dd className="col-sm-8">${item.price?.toFixed(2) ?? "—"}</dd>

                        <dt className="col-sm-4">Slug:</dt>
                        <dd className="col-sm-8">{item.slug || "—"}</dd>

                        <dt className="col-sm-4">Color:</dt>
                        <dd className="col-sm-8">
                            {`${item.color.colorLabel}: ${item.color.colorHex} (${item.color.colorCode})`}
                        </dd>

                        <dt className="col-sm-4">Lifecycle:</dt>
                        <dd className="col-sm-8">
                            {item.lifecycle?.lifecycleStatus || "—"}
                        </dd>

                        <dt className="col-sm-4">Created:</dt>
                        <dd className="col-sm-8">
                            {new Date(item.createdAt).toLocaleString() || "—"}
                        </dd>

                        <dt className="col-sm-4">Updated:</dt>
                        <dd className="col-sm-8">
                            {new Date(item.updatedAt).toLocaleString() || "—"}
                        </dd>
                    </dl>
                </ModalBody>
                <ModalFooter>
                    <Button className={"myButton"} onClick={onClose} >
                        Return
                    </Button>
                </ModalFooter>
            </Modal>
        </>

    )
}
export default ViewItemModal;