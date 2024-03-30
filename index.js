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
//then use the class to edit something on css.

function displayCountriesDetails(country){
    document.querySelector("#countries-capital").textContent = country.capital;
    document.querySelector("#countries-language").textContent = country.language;
    document.querySelector("#countries-tipping").textContent = country.tipping;
    document.querySelector("#countries-hello").textContent = country.hello;
    document.querySelector("#countries-thankYou").textContent = country.thankYou;
    document.querySelector("#countries-passportVisa").textContent = country.passportVisa;
    document.querySelector("#countries-food").textContent = country.food;
}

const form = document.querySelector("form")
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
    document.getElementById("instructions").style.color = "aliceblue";
});
document.addEventListener('mouseleave', event => {
    document.getElementById("instructions").style.color = "#b5d09b";
});

//
const icon = document.getElementById('icon');
icon.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        icon.src = "./image/transparent-empty-moon.png";
        document.body.style.backgroundImage = 'none';
    }else{
        con.src = "./image/transparent-moon.png";
        document.body.style.backgroundImage = 'url("./image/DR\ Beach.jpg")'; // Add back the background image
    }
}

//
icon.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        icon.src = "./image/transparent-empty-moon.png";
        document.body.style.backgroundImage = 'none';
    } else {
        icon.src = "./image/transparent-moon.png";
        document.body.style.backgroundImage = 'url("https://lh3.googleusercontent.com/pw/AP1GczPOz00wvKGvXy6fDrmyq5Qko_QbW7bStZZ9hH0M5KT-4_dyWEnVfrOjipbOjguqDAoldYCYuP5viZb_TEMtyYwRXn_mDLWfVfDSVNTlAznsvso1QB99=w2400")'; // Add back the background image
    }
}
