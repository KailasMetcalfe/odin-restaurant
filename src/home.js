import pizzaImg from "./pizza.jpg";
import "./home.css";


export default function loadPageDefault() {
    const container = document.querySelector("#content");

    const homePage = document.createElement("div");
    homePage.classList.add("home-page");

    const image = document.createElement("img");
    image.src = pizzaImg;
    image.alt = "Pizza on bench with beer"

    const div = document.createElement("div");

    const headline = document.createElement("h1");
    headline.textContent = "A Taste of Italy In Bristol";

    const tagline = document.createElement("p");
    tagline.textContent = "We welcome you to NAME, where passion meets comfort. \
    Try our range of delicious pizzas and pastas for an affordable price.";

    div.appendChild(headline);
    div.appendChild(tagline);

    homePage.appendChild(image);
    homePage.appendChild(div);

    container.append(homePage);
}
