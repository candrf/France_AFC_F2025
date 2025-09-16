const menuItems = [
    {name: "Cheeseburger",
    description: "Classic American cheeseburger",
    price: 5,
    image: "images/menu-burger1.avif"},

    {name: "Bacon Cheeseburger",
    description: "Classic American cheeseburger, but with bacon!",
    price: 7},

    {name: "Breakfast Burger",
        description: "Hamburger with avocado and egg",
        price: 8},

    {name: "Turkey Burger",
        description: "Smart choice burger with turkey patty",
        price: 6},

    {name: "Jalapeno Burger",
        description: "Hamburger with grilled jalapenos and onions",
        price: 9}
]

const menuImage = document.getElementById("menuImage");
const menuName = document.getElementById("menuName");
const menuDescription = document.getElementById("menuDescription");
const menuPrice = document.getElementById("menuPrice");

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
});

function showItem(index) {
    const item = menuItems[index];
    menuImage.src = item.image;
    menuImage.alt = item.name;
    menuName.textContent = item.name;
    menuDescription.textContent = item.description;
    menuPrice.textContent = formatter.format(item.price);
}

prevBtn.addEventListener("click", prevImage);
nextBtn.addEventListener("click", nextImage);

let currentIndex = 0;
// Show first item
showItem(currentIndex);

function prevImage() {
    currentIndex = (currentIndex - 1 + menuItems.length) % menuItems.length;
    showItem(currentIndex);
}

function nextImage() {
    currentIndex = (currentIndex + 1) % menuItems.length;
    showItem(currentIndex);
}


