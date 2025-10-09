import {Table} from "reactstrap";

//                     ↓ destructuring the prop to use data
function MenuTable({menuItems}) {

    // Function to format price
    const formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    });

    return(
        // Uses reactstrap table
        <Table >
            <thead>
                <tr className="table-dark">
                    <th>Image</th>
                    <th>Item</th>
                    <th>Description</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody className="table-dark">
            {/* Create table entry for each menuItem*/}
            {menuItems.map((menuItem, index) => (
                <tr key={index}>
                    <td>
                        <img src={menuItem.image}
                             alt={menuItem.description}
                             width={100}
                             height={80}
                         />
                    </td>
                    <td>{menuItem.name}</td>
                    <td>{menuItem.description}</td>
                    <td>{formatter.format(menuItem.price)}</td>
                </tr>
            ))}
            </tbody>
        </Table>
    );
}

export default MenuTable;