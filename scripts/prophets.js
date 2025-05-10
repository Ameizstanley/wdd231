const url = "https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json"

const cards = document.querySelector(".cards");

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    // console.table(data.response);
    displayProphets(data.prophets)

}
getProphetData();

const displayProphets = (prophets) =>{
    prophets.forEach((prophet) => {
        let card = document.createElement("section");
        let fullName = document.createElement("h2");
        let img = document.createElement("img");

        fullName.textContent = `${prophet.name} ${prophet.lastname}`;

        img.setAttribute("src", prophet.imageurl);
        img.setAttribute("alt", `the image of ${prophet.name}`);
        img.setAttribute("loading", "lazy");
        img.setAttribute("width", "340px");
        img.setAttribute("height", "440px");

        card.appendChild(fullName);
        card.appendChild(img);

        cards.appendChild(card);
    });
}