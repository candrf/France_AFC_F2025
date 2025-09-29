import {Table} from "reactstrap";


//                     ↓ destructuring the prop to use data
function MenuTable({menuItems}) {
    return(
        // Uses reactstrap table
        <Table >
            <thead>
                <tr>
                    <th>Image</th>
                    <th>Item</th>
                    <th>Description</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
            {/**/}
            {menuItems.map((menuItem, index) => (
                <tr key={index}>
                    <td>
                        <img src={menuItem.image}
                             alt={menuItem.name}
                             style={{width:"100px", height:"80px"}}
                         />
                    </td>
                    <td>{menuItem.name}</td>
                    <td>{menuItem.description}</td>
                    <td>{menuItem.price}</td>
                </tr>
            ))}
            </tbody>
        </Table>
    );
}

export default MenuTable;