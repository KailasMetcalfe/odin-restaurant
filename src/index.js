import "./styles.css";
import loadHome from "./home.js";
import loadMenu from "./menu.js";
import loadAbout from "./about.js";

function clearContent() {
    const content = document.querySelector("#content");
    while (content.firstChild) {
        content.removeChild(content.lastChild);
    }
}


function setupButtons() {
    const btns = document.querySelectorAll("nav > button");
    for (const btn of btns) {
        btn.addEventListener("click", () => {
            clearContent();

            switch (btn.textContent) {
                case "Home": loadHome(); break;
                case "Menu": loadMenu(); break;
                case "About": loadAbout(); break;
                default: loadHome();
            }
        })
    }
}



setupButtons();
loadHome();
