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

        

        books.forEach((book) => {
            const bookItem = document.createElement('div');
            bookItem.className = 'book-item';
            bookItem.innerHTML = `<img src=${book.image} alt="${book.name} cover" loading="lazy" height="300px" width="400px">
            <h2> Book title ${book.name} </h2>
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




            const displayCatalog = document.querySelector('.display-catalog');
            displayCatalog.appendChild(bookItem);
            bookItem.appendChild(button);
            button.addEventListener('click', () => {
                // Remove any existing more-details dialog in this bookItem
                const existingDetails = bookItem.querySelector('.more-details');
                if (existingDetails) {
                    existingDetails.remove();
                }

                const moreDetails = document.createElement('div');
                moreDetails.className = 'more-details';
                moreDetails.innerHTML = `<p> This book was published by ${book.publisher} on date ${book.published_date} its written in ${book.language} </p>`;

                if (book.price >= 30000) {
                    moreDetails.innerHTML += `<p class="price">This book is expensive with a No Discount price of ${book.price} naira</p>`;
                } else if (book.price >= 20000 && book.price < 30000) {
                    moreDetails.innerHTML += `<p class="price">This book is Affordable with a No Discount price of ${book.price} naira</p>`;
                } else {
                    moreDetails.innerHTML += `<p class="price">This book is Cheap with a No Discount price of ${book.price} naira</p>`;
                }

                if (book.available === true) {
                    moreDetails.innerHTML += `<p class="available">This book is available for purchase</p>`;
                } else {
                    moreDetails.innerHTML += `<p class="available">This book is currently out of stock</p>`;
                }

                if (book.pages >= 380) {
                    moreDetails.innerHTML += `<p class="pages">This book is a long read with ${book.pages} pages</p>`;
                } else {
                    moreDetails.innerHTML += `<p class="pages">This book can be easily read ${book.pages} pages</p>`;
                }

                // Add a close button to the dialog
                const closeBtn = document.createElement('button');
                closeBtn.textContent = 'Close';
                closeBtn.className = 'close-details';
                closeBtn.addEventListener('click', () => {
                    moreDetails.remove();
                });
                moreDetails.appendChild(closeBtn);

                bookItem.appendChild(moreDetails);
            });

            
        });

    } catch (error) {
        console.error('Fetch error:', error);
    }
}

getData();
