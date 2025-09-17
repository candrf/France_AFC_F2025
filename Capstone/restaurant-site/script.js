/* -------------------------------------------------------------*/
/* --------------------- Menu carousel part --------------------*/
/* -------------------------------------------------------------*/

const menu = document.getElementById("menu");

// Only run if on menu page
if(menu){
    const menuItems = [
        {name: "Cheeseburger",
            description: "Classic American cheeseburger",
            price: 5,
            image: "images/menu-burger1.avif"},

        {name: "Bacon Cheeseburger",
            description: "Classic American cheeseburger, but with bacon!",
            price: 7,
            image: "images/menu-bacon-burger.jpg"},

        {name: "Breakfast Burger",
            description: "Hamburger with avocado and egg",
            price: 8,
            image: "images/menu-breakfast-burger.webp"},

        {name: "Turkey Burger",
            description: "Smart choice burger with turkey patty",
            price: 6,
            image: "images/menu-turkey-burger.jpg"},

        {name: "Jalapeno Burger",
            description: "Hamburger with grilled jalapenos and onions",
            price: 9,
            image: "images/menu-jalapeno-burger.jpg"}
    ]

    // Save DOM elements to variables
    const menuImage = document.getElementById("menuImage");
    const menuName = document.getElementById("menuName");
    const menuDescription = document.getElementById("menuDescription");
    const menuPrice = document.getElementById("menuPrice");

    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    // Format currency
    const formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    });

    // Function assigns HTML Elements for image src/atl and text content
    // Uses the index as argument to decide which object in array is shown
    function showItem(index) {
        const item = menuItems[index];
        menuImage.src = item.image;
        menuImage.alt = item.name;
        menuName.textContent = item.name;
        menuDescription.textContent = item.description;
        menuPrice.textContent = formatter.format(item.price);
    }

    // Keep track of array index
    let currentIndex = 0;

    // Show first object by default
    showItem(currentIndex);

    // Shows prev/next image. Uses % menuItems.length to wrap around array
    function prevImage() {
        currentIndex = (currentIndex - 1 + menuItems.length) % menuItems.length;
        showItem(currentIndex);
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % menuItems.length;
        showItem(currentIndex);
    }

    // Event listeners for buttons
    prevBtn.addEventListener("click", prevImage);
    nextBtn.addEventListener("click", nextImage);
}


/* -------------------------------------------------------------*/
/* ----------------Form validation part-------------------------*/
/* -------------------------------------------------------------*/

const form = document.getElementById("form");

// Only run on form page
if(form){

    // Age validation - check is number and within range
    const ageInput = document.getElementById("age");
    const ageError = document.getElementById("ageError");

    function validateAge(){
        const ageValue = parseInt(ageInput.value, 10);
        if (isNaN(ageValue) || ageValue < 21 || ageValue > 99) {
            ageError.textContent = "Age must be a number 21–99";
            return false;
        } else {
            ageError.textContent = "";
            return true;
        }
    }

    // Use input listener to have dynamic feedback
    ageInput.addEventListener("input", validateAge);

    // Phone validation - must follow regex pattern of digits
    const phoneInput = document.getElementById("phone");
    const phoneError = document.getElementById("phoneError");
    const phonePattern = /^\d{3}-\d{3}-\d{4}$/;

    function validatePhone(){
        const phoneVal = phoneInput.value.trim();
        if (!phoneVal || !phonePattern.test(phoneVal)){
            phoneError.textContent = "Format must be xxx-xxx-xxxx";
            return false
        }else{
            phoneError.textContent = "";
            return true;
        }
    }

    // Use input listener for dynamic feedback
    phoneInput.addEventListener("input", validatePhone);

    // More info character limiter
    const moreInfo = document.getElementById("moreInfo");
    const charCount = document.getElementById("charCount");
    const maxChar = 30;

    // Use input listener to show remining chars, cut off at 30
    moreInfo.addEventListener("input", () =>{
        let remaining = maxChar - moreInfo.value.length;
        if(remaining < 0){
            moreInfo.value = moreInfo.value.substring(0, maxChar);
        }
        charCount.textContent = "Characters remaining: " + remaining;
    });

    // Form submission
    form.addEventListener("submit", (event) => {
        const ageValid = validateAge();
        const phoneValid = validatePhone();

        // Prevent submission if age/phone invalid
        if(!phoneValid){
            event.preventDefault();
            alert("Phone is wrong format")
        } else if (!ageValid){
            event.preventDefault();
            alert("Age is wrong format")
        } else {
            // Console log form data after validation
            event.preventDefault();
            logResults();
        }
    });

    // Use FormData to show name/value for all fields in form
    function logResults(){
        const formData = new FormData(form);
        for (const[name, value] of formData.entries()){
            console.log(`${name}: ${value}`);
        }
    }
}