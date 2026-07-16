import "./about.css";


export default function loadPageDefault() {
    const container = document.querySelector("#content");

    const aboutPage = document.createElement("div");
    aboutPage.classList.add("about-page");

    const div1 = document.createElement("div");
    const header1 = document.createElement("h2");
    header1.textContent = "Who we are";
    const paragraph1 = document.createElement("p");
    paragraph1.textContent = "In 2015, we went on a 2 month trip around" +
                    "Italy, ending in the heart of Naples. After" +
                    "experiencing the wonders and joy of Italian cuisine" + 
                    "we decided to open our very own restaurant in the " +
                    "heart of Bristol Centre."

    div1.append(header1);
    div1.append(paragraph1);
    aboutPage.appendChild(div1);

    const div2 = document.createElement("div");
    const header2 = document.createElement("h2");
    header2.textContent = "What we do";
    const paragraph2 = document.createElement("p");
    paragraph2.textContent = "We offer comforting, delicious meals made" + 
                    "with local, sustainably sourced ingredients to" +
                    "bring the heart of Italy straight to you."

    div2.append(header2);
    div2.append(paragraph2);
    aboutPage.appendChild(div2);

    const div3 = document.createElement("div");
    const header3 = document.createElement("h2");
    header3.textContent = "Where we are based";
    const paragraph3 = document.createElement("p");
    paragraph3.textContent = "We are based in Bristol City Center, Park Street:"
    const location = document.createElement("p");
    location.id = "location";

    const br1 = document.createElement("br");
    const br2 = document.createElement("br")
    location.append("78 Park Street", br1, "Bristol", br2, "BS1 5LA");

    div3.append(header3);
    div3.append(paragraph3);
    div3.append(location)
    aboutPage.appendChild(div3);

    container.append(aboutPage);
}


