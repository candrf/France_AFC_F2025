import {Button, Card, CardBody, CardText, CardTitle} from "reactstrap";

function InventoryCard({item, onViewItem, onEditItem}){


    return(
        <>
            <div>
                <Card className={"myCard"}
                      style={{
                          width: '18rem'
                      }}
                >
                    <CardBody>
                        <CardTitle tag="h5">
                            {item.name}
                        </CardTitle>

                        <img className={"cardImg mt-2"}
                             alt="Sample"
                             src={item.imageUrl}
                        />
                        <CardText className={"mt-2"}>
                            Price: {item.price}
                        </CardText>
                        <CardText >
                            Stock: {item.quantity}
                        </CardText>
                        <div className={"container"}>
                            <div className={"d-flex gap-2 mt-3"}>
                                <Button className={"flex-grow-1 myButton"}
                                onClick={() => onEditItem(item)}>
                                    ✎  Edit
                                </Button>
                                <Button className={"flex-grow-1 myButton2"}
                                onClick={() => onViewItem(item)}>
                                    ⓘ More Info
                                </Button>
                            </div>
                        </div>

                    </CardBody>
                </Card>
            </div>
        </>
    )}

export default InventoryCard;