import InventoryCard from "../components/InventoryCard.jsx";
import EditItemModal from "../components/EditItemModal.jsx";
import {useEffect, useState} from "react";
import ViewItemModal from "../components/ViewItemModal.jsx";
import {Button, Input} from "reactstrap";
import AddItemModal from "../components/AddItemModal.tsx";
import {getWidgets} from "../WidgetClient.ts";

function Inventory(){
    const [inventory, setInventory] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);
    const [viewModalOpen, setViewModalOpen] = useState(false);
    const [editModalOpen, setEditModalOpen] = useState(false);
    const [addModalOpen, setAddModalOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(()=>{
        (async ()=>{
            setInventory(await getWidgets())
        })();
    }, [])

    const handleViewItem = (item) => {
        setSelectedItem(item);
        setViewModalOpen(true);
    }

    const handleEditItem = (item) => {
        setSelectedItem(item);
        setEditModalOpen(true);
    }

    const handleAddItem = () => {
        setAddModalOpen(true);
    }

    const handleSave = async () => {
        try {
            const widgets = await getWidgets();
            setInventory(widgets);
        } catch (e) {
            console.error("Failed to refresh inventory:", e);
        }
    }

    const handleDelete = (deletedItemId) => {
        setInventory((prev) => prev.filter((item) => item.id !== deletedItemId));
    }

    const filteredInventory = inventory.filter((item) => {
        const query = searchQuery.toLowerCase();
        return (
            item.name.toLowerCase().includes(query)
        );
    });



    return(
        <>
            <div className={"mx-2"}>
                <h3>Inventory</h3>
                <div className={"d-flex align-items-center mb-3"}>
                <Input
                    type={"search"}
                    placeholder={"Search by name or description. . ."}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className={"form-control w-50"}
                />
                <Button className={"myButton ms-2"} onClick={handleAddItem}>Add Widget</Button>
                </div>

            {/* map inventory cards from array of items*/}
                <div className="row">
                    {filteredInventory.length > 0 ? (
                        filteredInventory.map((item, index) => (
                            <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                                <InventoryCard
                                    item={item}
                                    onViewItem={handleViewItem}
                                    onEditItem={handleEditItem}
                                />
                            </div>
                        ))
                    ) : (
                        <div>
                            <p>No items found matching your search.</p>
                        </div>
                    )}
                </div>

                <AddItemModal
                    open={addModalOpen}
                    onClose={()=>setAddModalOpen(false)}
                    onAdd={handleSave}
                />

                <ViewItemModal
                    item={selectedItem}
                    open={viewModalOpen}
                    onClose={() => setViewModalOpen(false)}
                />

                <EditItemModal
                    item={selectedItem}
                    open={editModalOpen}
                    onClose={()=>setEditModalOpen(false)}
                    onSave={handleSave}
                    onDelete={handleDelete}
                />
            </div>
        </>
    )
}

export default Inventory;