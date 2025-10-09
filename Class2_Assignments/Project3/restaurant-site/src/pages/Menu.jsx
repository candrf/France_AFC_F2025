import MenuTable from "../components/MenuTable.jsx"
import cheeseburger from "../assets/images/menu-burger1.avif"
import baconCheeseburger from "../assets/images/menu-bacon-burger.jpg"
import breakfastBurger from "../assets/images/menu-breakfast-burger.webp"
import turkeyBurger from "../assets/images/menu-turkey-burger.jpg"
import jalapenoBurger from "../assets/images/menu-jalapeno-burger.jpg"

function Menu (){
    const menuItems = [
        {name: "Cheeseburger",
            description: "Classic American cheeseburger",
            price: 5,
            image: cheeseburger},

        {name: "Bacon Cheeseburger",
            description: "Classic American cheeseburger, but with bacon!",
            price: 7,
            image: baconCheeseburger},

        {name: "Breakfast Burger",
            description: "Hamburger with avocado and egg",
            price: 8,
            image: breakfastBurger},

        {name: "Turkey Burger",
            description: "Smart choice burger with turkey patty",
            price: 6,
            image: turkeyBurger},

        {name: "Jalapeno Burger",
            description: "Hamburger with grilled jalapenos and onions",
            price: 9,
            image: jalapenoBurger}
        ]

    return (
        <>
            <div className="text-center bg-dark mt-5 border-bottom border-light">
                <h1 className="text-light mt-4 mb-0 p-2">Menu</h1>
            </div>

            {/*            ↓  this is a prop, passing in menuItems array of objects*/}
            <MenuTable menuItems={menuItems} />
        </>
    );
}

export default Menu;