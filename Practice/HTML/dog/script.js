let btn = document.getElementsByTagName("button")[0];
const imgElement  = document.getElementById("dog");
const BASE_URL = "https://dog.ceo/api";

btn.addEventListener("click", ()=>{
    let route = "/breeds/image/random";
    let endpoint = `${BASE_URL}${route}`
    fetch(endpoint)
        .then(response => {
            if(response.ok){
            console.log("Response", response);
            let result = response.json();
            return result
            }
        })
        .then(parsedData => {
            let imgUrl = parsedData.message;
            imgElement.setAttribute("src", imgUrl);
        })
        .catch(errors => {
            console.log(errors);
        })
})
