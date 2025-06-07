async function fetchItems() {
    try {
        const response = await fetch('data/discovers.json');
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const items = await response.json();
        console.log(items);
        const itemsContainer = document.querySelector('.item-section');
        
        if (!itemsContainer) {
            console.error('The element with class "items-section" was not found in the DOM.');
            return items;
        }
        
        itemsContainer.innerHTML = "";
        
        items.forEach((item) => {
            const itemCard = document.createElement('div');
            itemCard.classList.add("item-card");
            itemCard.innerHTML = `
            <h2> Title ${item.name}</h2>
            <figure class="item-image"> <img src=${item.imageUrl} alt=${item.alt} loading="lazy"> </figure>
            
            <address class="item-address"> Location: ${item.address} </address>
            <p class="item-description">  ${item.description}</p>
            
            <button class="item-button"> Learn More </button>
            `;



            itemsContainer.appendChild(itemCard);
        });

       

    } catch (error) {
        console.error('Failed to fetch items:', error);
    }
}
fetchItems();

