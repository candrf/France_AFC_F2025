import AppNavbar from "../components/AppNavbar.jsx";
import MenuTable from "../components/MenuTable.jsx"

function Menu (){
    const menuItems = [
        {name: "Cheeseburger",
            description: "Classic American cheeseburger",
            price: 5,
            image: "src/assets/images/menu-burger1.avif"},

        {name: "Bacon Cheeseburger",
            description: "Classic American cheeseburger, but with bacon!",
            price: 7,
            image: "src/assets/images/menu-bacon-burger.jpg"},

        {name: "Breakfast Burger",
            description: "Hamburger with avocado and egg",
            price: 8,
            image: "src/assets/images/menu-breakfast-burger.webp"},

        {name: "Turkey Burger",
            description: "Smart choice burger with turkey patty",
            price: 6,
            image: "src/assets/images/menu-turkey-burger.jpg"},

        {name: "Jalapeno Burger",
            description: "Hamburger with grilled jalapenos and onions",
            price: 9,
            image: "src/assets/images/menu-jalapeno-burger.jpg"}
    ]

    return (
        <div>
            <AppNavbar />
            <h1>Menu page</h1>
            <MenuTable menuItems={menuItems} />
        </div>
    );
}

export default Menu;