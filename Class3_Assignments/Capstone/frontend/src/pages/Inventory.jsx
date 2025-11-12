import InventoryCard from "../components/InventoryCard.jsx";
import EditItemModal from "../components/EditItemModal.jsx";
import {useState} from "react";
import ViewItemModal from "../components/ViewItemModal.jsx";
import {Button, Input} from "reactstrap";
import AddItemModal from "../components/AddItemModal.tsx";

// item
const initialInventory = [
    {
        id: 1,
        name: "Doohicky",
        blurb: "Power Tools",
        price: 2499,
        stock: 15,
    }
];

function Inventory(){
    const [inventory, setInventory] = useState(initialInventory);
    const [selectedItem, setSelectedItem] = useState(null);
    const [viewModalOpen, setViewModalOpen] = useState(false);
    const [editModalOpen, setEditModalOpen] = useState(false);
    const [addModalOpen, setAddModalOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

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

    const handleSave = (updatedItem) => {
        setInventory((prev) =>
        prev.map((item) => (item.id === updatedItem.id ? updatedItem : item)));
    }

    const filteredInventory = inventory.filter((item) => {
        const query = searchQuery.toLowerCase();
        return (
            item.name.toLowerCase().includes(query) ||
            item.category.toLowerCase().includes(query) ||
            item.description.toLowerCase().includes(query)
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
                        filteredInventory.map((item) => (
                            <div key={item.id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
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
                onClose={()=>setAddModalOpen(false)}/>

            <ViewItemModal
                item={selectedItem}
                open={viewModalOpen}
                onClose={() => setViewModalOpen(false)}
            />

            <EditItemModal
                item={selectedItem}
                open={editModalOpen}
                onClose={()=>setEditModalOpen(false)}
                onSave={handleSave}/>
            </div>
        </>
    )
}

export default Inventory;