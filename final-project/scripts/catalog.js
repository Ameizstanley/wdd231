const displayCatalog = document.querySelector('.catalog-container');
const dialog = document.querySelector('#dialog-content')

async function getData() {
    try {
        const response = await fetch("data/books_data.json");
        const answer = await fetch("data/stationeries_data.json");
        if (!response.ok || !answer.ok) {
            throw new Error(`HTTP error! status: ${response.status}, ${answer.status}`);
        }
        const books = await response.json();
        const stationeries = await answer.json();
        console.log(books);
        console.log(stationeries);
        displayStationeries(stationeries);
        const booksContainer = document.createElement('div');
        booksContainer.className = 'books';

        

        books.forEach((book) => {
            const bookItem = document.createElement('div');
            bookItem.className = 'book-item';
            bookItem.innerHTML = `<img src=${book.image} alt="${book.name} cover" loading="lazy" height="200px" width="200px">
            <h3> Book title ${book.name} </h3>
            <p>${book.description} </p>
            <p>Genre:${book.genre} </p>`

            if (book.rating >= 4) {
                if (book.rating > 4.8) {
                    bookItem.innerHTML += `<p class="rating">this Book is a Must read with ${book.rating} 🏆</p>`;
                } else if (book.rating >= 4) {
                    bookItem.innerHTML += `<p class="rating">this Book is a Bestseller with ${book.rating} 🌟</p>`;
                } else {
                    bookItem.innerHTML += `<p class="rating">${book.rating} ⭐</p>`;
                }

            }

            else if (book.rating > 4.8){
                bookItem.innerHTML += `<p class="rating">this Book is a Must read with ${book.rating} ⭐</p>`;
            }
            else {
                bookItem.innerHTML += `<p class="rating">${book.rating} ⭐</p>`;
            }

            const button = document.createElement('button');
            button.className = 'learn-more';
            button.textContent = 'Learn More';




            // const displayCatalog = document.querySelector('.catalog-container');
            // displayCatalog.appendChild(bookItem);
            bookItem.appendChild(button);
            button.addEventListener('click', () => {
                dialog.innerHTML = ""; // Clear previous
                const moreItem = document.createElement('div');
                moreItem.className = 'more-items';
                moreItem.innerHTML = `<p> This book was published by ${book.publisher} on date ${book.published_date} its written in ${book.language} </p>`;

                if (book.price >= 30000) {
                    moreItem.innerHTML += `<p class="price">This book is expensive with a No Discount price of ${book.price} naira</p>`;
                } else if (book.price >= 20000 && book.price < 30000) {
                    moreItem.innerHTML += `<p class="price">This book is Affordable with a No Discount price of ${book.price} naira</p>`;
                } else {
                    moreItem.innerHTML += `<p class="price">This book is Cheap with a No Discount price of ${book.price} naira</p>`;
                }

                if (book.available === true) {
                    moreItem.innerHTML += `<p class="available">This book is available for purchase</p>`;
                } else {
                    moreItem.innerHTML += `<p class="available">This book is currently out of stock</p>`;
                }

                if (book.pages >= 380) {
                    moreItem.innerHTML += `<p class="pages">This book is a long read with ${book.pages} pages</p>`;
                } else {
                    moreItem.innerHTML += `<p class="pages">This book can be easily read ${book.pages} pages</p>`;
                }

                // Add a close button to the dialog
                const closeBtn = document.createElement('button');
                closeBtn.textContent = 'Close';
                closeBtn.className = 'close-details';
                closeBtn.addEventListener('click', () => {
                    dialog.innerHTML = "";
                    dialog.parentElement.style.display = "none";
                });
                moreItem.appendChild(closeBtn);
                dialog.appendChild(moreItem);
                dialog.parentElement.style.display = "flex"; // Show modal
            });
            booksContainer.appendChild(bookItem);
        });

        displayCatalog.appendChild(booksContainer); // <-- append once after the loop
         function displayStationeries(stationeries) {
            // const displayCatalog = document.querySelector('.catalog-container');
            const stationeriesContainer = document.createElement('div');
            stationeriesContainer.className = 'stationeries';

            stationeries.forEach((item) => {
                const stationeryItem = document.createElement('div');
                stationeryItem.className = 'stationery-item';
                stationeryItem.innerHTML = `
                    <img src="${item.image}" alt="${item.name}" loading="lazy" height="200px" width="200px">
                    <h3>${item.name}</h3>
                    <p>${item.description}</p>

                `;
                stationeriesContainer.appendChild(stationeryItem);

                const button = document.createElement('button');
                button.className = 'learn-more';
                button.textContent = 'Learn More';
                button.addEventListener('click', () => {
                    dialog.innerHTML = ""; // Clear previous
                    const moreItem = document.createElement('div');
                    moreItem.className = 'more-items';
                    moreItem.innerHTML = `
                        <p>this item is a ${item.type} and it is brand of ${item.brand} with a color of ${item.color}
                        with a size of ${item.size}</p>
                        <p>Type: ${item.type}</p>
                        <p>Price: ${item.price} naira</p>
                    `;

                    if (item.available === false){
                        moreItem.innerHTML += `<p class="available">This item is currently out of stock</p>`;
                    }

                    if (item.quantity_in_stock > 200){
                        moreItem.innerHTML += `<p class="quantity">it  is in high stock with ${item.quantity_in_stock} items available</p>`;
                    }

                    // Add a close button to the dialog
                    const closeBtn = document.createElement('button');
                    closeBtn.textContent = 'Close';
                    closeBtn.className = 'close-details';
                    closeBtn.addEventListener('click', () => {
                        dialog.innerHTML = "";
                        dialog.parentElement.style.display = "none";
                    });
                    moreItem.appendChild(closeBtn);
                    dialog.appendChild(moreItem);
                    dialog.parentElement.style.display = "flex"; // Show modal
                })

                stationeryItem.appendChild(button);
            });

            displayCatalog.appendChild(stationeriesContainer);
         }


    } catch (error) {
        console.error('Fetch error:', error);
    }
}

getData();


