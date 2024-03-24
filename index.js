fetch("http://localhost:3000/countries")
    .then(response => response.json())
    .then(countries => {
        const btnContainer = document.querySelector("#countries-button");
        countries.forEach(country => {
            const button = document.createElement("button");
            button.textContent = country.name;
            button.classList.add("btn");
            button.addEventListener("click", () => {
                displayCountriesDetails(country);
                document.getElementById("countryName").textContent = country.name;
            });
            btnContainer.appendChild(button);
        });
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });

// add a class to the html and add that to the fetch.
//htne when us the class to edit something on css.

function displayCountriesDetails(country){
    document.querySelector("#countries-capital").textContent = country.capital;
    document.querySelector("#countries-language").textContent = country.language;
    document.querySelector("#countries-tipping").textContent = country.tipping;
    document.querySelector("#countries-hello").textContent = country.hello;
    document.querySelector("#countries-thankYou").textContent = country.thankYou;
    document.querySelector("#countries-passportVisa").textContent = country.passportVisa;
    document.querySelector("#countries-food").textContent = country.food;
}

let form = document.querySelector("form")
form.addEventListener('submit', event => {
    event.preventDefault()
    buildToDo(event.target.new_todo.value)
    form.reset()
})

function buildToDo(todo){
    let p = document.createElement('p')
    let btn = document.createElement('button')
    btn.addEventListener('click', handleDelete)
    btn.textContent = "x"
    p.textContent = `${todo} `
    p.appendChild(btn)
    document.querySelector('#todo_container').appendChild(p)
}

function handleDelete(event) {
    event.target.parentNode.remove()
}

document.addEventListener('mouseenter', event => {
    document.getElementById("instructions").style.color = "blue";
});
document.addEventListener('mouseleave', event => {
    document.getElementById("instructions").style.color = "black";
});