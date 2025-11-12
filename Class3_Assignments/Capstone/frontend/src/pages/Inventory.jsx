import InventoryCard from "../components/InventoryCard.jsx";
import EditItemModal from "../components/EditItemModal.jsx";
import {useState} from "react";
import ViewItemModal from "../components/ViewItemModal.jsx";
import {Button, Input} from "reactstrap";

// item
const initialInventory = [
    {
        id: 1,
        name: "Doohicky",
        category: "Power Tools",
        price: 2499,
        stock: 15,
        description:
            "Heavy-duty drill press with variable speed control and precision depth adjustment. Perfect for industrial applications.",
        specifications: [
            "Rating:",
            "About: ",
            "Color: ",
            "Etc: ",
        ],
    },
    {
        id: 2,
        name: "Thingamajig",
        category: "Welding Equipment",
        price: 1899,
        stock: 8,
        description:
            "Complete welding kit with TIG/MIG capabilities. Includes torch, cables, and safety equipment.",
        specifications: [
            "Input voltage: 220V",
            "Output: 200A",
            "Duty cycle: 60%",
            "Includes: Helmet, gloves, rods",
        ],
    },
    {
        id: 3,
        name: "Wobbletop",
        category: "Heavy Machinery",
        price: 8999,
        stock: 5,
        description:
            "50-ton capacity hydraulic press for forming, straightening, and assembling metal parts.",
        specifications: [
            "Capacity: 50 tons",
            "Working height: 48 inches",
            "Pressure gauge included",
            "Manual and electric operation",
        ],
    },
    {
        id: 4,
        name: "Precision Lathe",
        category: "Machine Tools",
        price: 5499,
        stock: 12,
        description:
            "High-precision lathe for turning operations. Features digital readout and variable speed control.",
        specifications: [
            "Swing: 12 inches",
            "Distance between centers: 36 inches",
            "Spindle speed: 100-2000 RPM",
            "Digital readout system",
        ],
    },
    {
        id: 5,
        name: "Air Compressor 80 Gal",
        category: "Air Systems",
        price: 1299,
        stock: 20,
        description:
            "Industrial air compressor with 80-gallon tank. Ideal for continuous operation in workshops.",
        specifications: [
            "Tank size: 80 gallons",
            "CFM: 14.0 at 90 PSI",
            "Motor: 5 HP",
            "Vertical design",
        ],
    },
    {
        id: 6,
        name: "Angle Grinder Set",
        category: "Power Tools",
        price: 249,
        stock: 35,
        description:
            "Professional-grade angle grinder with multiple grinding and cutting discs included.",
        specifications: [
            "Disc size: 7 inches",
            "Power: 15 amp",
            "Speed: 8,500 RPM",
            "Includes 10 cutting discs",
        ],
    },
    {
        id: 7,
        name: "CNC Router Table",
        category: "Machine Tools",
        price: 12999,
        stock: 3,
        description:
            "Computer-controlled router table for precision cutting and engraving of various materials.",
        specifications: [
            "Work area: 48x96 inches",
            "Z-axis travel: 8 inches",
            "Spindle: 3.5 kW water-cooled",
            "Control system: DSP",
        ],
    },
    {
        id: 8,
        name: "Industrial Band Saw",
        category: "Cutting Tools",
        price: 3299,
        stock: 7,
        description:
            "Heavy-duty band saw for cutting metal, wood, and composite materials with precision.",
        specifications: [
            "Blade length: 131 inches",
            "Throat depth: 18 inches",
            "Motor: 2 HP",
            "Variable speed: 50-3000 FPM",
        ],
    },
];

function Inventory(){
    const [inventory, setInventory] = useState(initialInventory);
    const [selectedItem, setSelectedItem] = useState(null);
    const [viewModalOpen, setViewModalOpen] = useState(false);
    const [editModalOpen, setEditModalOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    const handleViewItem = (item) => {
        setSelectedItem(item);
        setViewModalOpen(true);
    }

    const handleEditItem = (item) => {
        setSelectedItem(item);
        setEditModalOpen(true);
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
            <div>
                <h3>Inventory</h3>
            </div>

            <div>
                <Input
                    type={"search"}
                    placeholder={"Search by name or description. . ."}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Button className={"myButton"}>Add Widget</Button>
            </div>

            {/* map inventory cards from array of items*/}
            <div>
                {filteredInventory.map((item) => (
                    <div key={item.id}>
                        <InventoryCard
                            item={item}
                            onViewItem={handleViewItem}
                            onEditItem={handleEditItem}/>
                    </div>

                ))}

            </div>


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
        </>
    )
}

export default Inventory;