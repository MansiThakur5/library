const books = [
    {
        title: "Maame",
        author: "Jessica George",
        genre: "Fiction",
        date: "Jan 31, 2023",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEQkp3145kcUCaf6Oj8VQkz8cA6filMbyhGxvvur9X4PCnulXHvibKMorUfcLRbKRdILA&usqp=CAU",
        price: 1500
    },
    {
        title: "What Happened to Ruthy Ramirez",
        author: "Claire Jiménez",
        genre: "Historical Fiction",
        date: "Feb 7, 2023",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeNpiX1rJ7b1qRsG8PxERHJLPpmX_zzNasLQ&s",
        price: 1299
    },
    {
        title: "The Bandit Queens",
        author: "Parini Shroff",
        genre: "Contemporary",
        date: "Jan 3, 2023",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxPpQzLmjvz6cEmWLKdWQ-6Sbhsi7PcqLJtA&s",
        price: 1999
    },
    {
        title: "Really Good, Actually",
        author: "Monica Heisey",
        genre: "Humor",
        date: "Jan 17, 2023",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxlQOUIlMfBuU-365APdoe5YqVmmSaAzpDZw&s",
        price: 1499
    },
    {
        title: "Age of Vice",
        author: "Deepti Kapoor",
        genre: "Thriller",
        date: "Jan 3, 2023",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY-tb3iWoDcpoHYHGSUuNuzFDTTspZ3KtWEg&s",
        price: 1599
    },
    {
        title: "The Last Tale of the Flower Bride",
        author: "Roshani Chokshi",
        genre: "Fantasy",
        date: "Feb 14, 2023",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShLttRucUYIXC6qjIVeJPDdApceL-jLuGlAQ&s",
        price: 1799
    },
    {
        title: "Dyscalculia",
        author: "Camonghne Felix",
        genre: "Memoir",
        date: "Feb 14, 2023",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2t6fEkftp2O66p0-QHKAMJ8cyOirBopNn4w&s",
        price: 1299
    },
    {
        title: "Victory City",
        author: "Salman Rushdie",
        genre: "Historical Fiction",
        date: "Feb 7, 2023",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRwSAmhB1Kh7Jtm0ERMC8VFN5NsVwnh-Wx9w&s",
        price: 199
    },
    {
        title: "Pineapple Street",
        author: "Jenny Jackson",
        genre: "Fiction",
        date: "Mar 7, 2023",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu8RsB0Sz7r-HXxIVKFJzYRhhPmIx-cUMGFJKqRavRvbNiQcSzOsXCGH7g-37beSa8vnQ&usqp=CAU",
        price: 1499
    },
    {
        title: "Hello Beautiful",
        author: "Ann Napolitano",
        genre: "Family Drama",
        date: "Mar 14, 2023",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmO4UGe04jtFHhW-SqZHunJzf9xEDjG0_G5g&s",
        price: 1499
    },
    {
        title: "Waco Rising",
        author: "Kevin Cook",
        genre: "Non-Fiction",
        date: "Mar 28, 2023",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx5OWl06w0T-rMVkwtgiJffuaE9R0QNkVgZA&s",
        price: 2499
    },
    {
        title: "Chain Gang All-Stars",
        author: "Nana Kwame Adjei-Brenyah",
        genre: "Dystopian",
        date: "May 2, 2023",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtnilLh3bSKjFAuiRc8QfzBAEsfNNW4vGNQhSxnf5GhW6dMZSUow16v0_mwfkZFhvfq7o&usqp=CAU",
        price: 1899
    },
    {
        title: "Pageboy",
        author: "Elliot Page",
        genre: "Memoir",
        date: "Jun 6, 2023",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjSr6StYKRd5SXs5QX22ZGfGGL-oXdTvV6zA&s",
        price: 1799
    },
    {
        title: "Yellowface",
        author: "R.F. Kuang",
        genre: "Satire",
        date: "May 16, 2023",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7k7OJwT_lW7OdR2nAQ3ov_nAg0Nh7OaK7Hg&s",
        price: 299
    },
    {
        title: "The Deep Sky",
        author: "Yume Kitasei",
        genre: "Science Fiction",
        date: "Jul 18, 2023",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjOb9xbDKYkPSI8EKdF9nC4lqg-yyep8jdXg&s",
        price: 1599
    },
    {
        title: "The Heaven & Earth Grocery Store",
        author: "James McBride",
        genre: "Literary Fiction",
        date: "Aug 8, 2023",
        image: " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPjF0QhufM0PyEYm8AtWk5wd9yYxUWEhyhOQ&s",
        price: 1999
    },
    {
        title: "A Haunting on the Hill",
        author: "Elizabeth Hand",
        genre: "Horror",
        date: "Sep 5, 2023",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEgyGuh8pOrjwviF6kM0figNMPa_O-blJxwtolS3mgQ1r_8mqw2ZJIUyhV_eiCfsRTa0E&usqp=CAUs",
        price: 1499
    },
    {
        title: "North Woods",
        author: "Daniel Mason",
        genre: "Historical Fiction",
        date: "Oct 3, 2023",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo-8vlAk6_exrCoXCljeaTYLti8A2nb6EscQ&s",
        price: 799
    },
    {
        title: "Let Us Descend",
        author: "Jesmyn Ward",
        genre: "Literary Fiction",
        date: "Oct 24, 2023",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk2LRoLNFpbepvDPrbpRKNnSl9lkGALs6TbA&s",
        price: 499
    },
    {
        title: "The List",
        author: "Yomi Adegoke",
        genre: "Fiction",
        date: "Nov 7, 2023",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0cOHKq1XIwnScFCpUUZVVt4Qz1-y4O1CM9A&s",
        price: 199
    }
];

let cart = [];
const deliveryCharge = 70;
const freeDeliveryThreshold = 1000;

const bookList = document.getElementById('bookList');
const cartCount = document.getElementById('cartCount');
const cartModal = document.getElementById('cartModal');
const cartItems = document.getElementById('cartItems');
const totalPriceEl = document.getElementById('totalPrice');
const deliveryChargeEl = document.getElementById('deliveryCharge');
const deliveryTimingEl = document.getElementById('deliveryTiming');
const codButton = document.getElementById('codButton');
const buyNowButton = document.getElementById('buyNowButton');
const deliveryAddressInput = document.getElementById('deliveryAddress');

displayBooks('genre');

document.getElementById('genreLink').addEventListener('click', () => {
    displayBooks('genre');
});

document.getElementById('authorLink').addEventListener('click', () => {
    displayBooks('author');
});

document.getElementById('dateLink').addEventListener('click', () => {
    displayBooks('date');
});

function displayBooks(sortBy) {
    bookList.innerHTML = '';
    let sortedBooks = [...books];
    sortedBooks.sort((a, b) => a[sortBy].localeCompare(b[sortBy]));

    sortedBooks.forEach(book => {
        const bookItem = document.createElement('div');
        bookItem.classList.add('book');
        bookItem.innerHTML = `
            <img src="${book.image}" alt="${book.title}">
            <h3>${book.title}</h3>
            <p><strong>Author:</strong> ${book.author}</p>
            <p><strong>Genre:</strong> ${book.genre}</p>
            <p><strong>Publication Date:</strong> ${book.date}</p>
            <p><strong>Price:</strong> $${book.price}</p>
            <div class="buy-now">
                <button onclick="addToCart('${book.title}', ${book.price})">Add to Cart</button>
            </div>
        `;
        bookList.appendChild(bookItem);
    });
}

function addToCart(title, price) {
    cart.push({ title, price });
    updateCartCount();
}

function updateCartCount() {
    cartCount.textContent = cart.length;
}

document.getElementById('cartIcon').addEventListener('click', () => {
    showCart();
    cartModal.style.display = 'block';
});

document.querySelector('.close').addEventListener('click', () => {
    cartModal.style.display = 'none';
});

function showCart() {
    cartItems.innerHTML = '';
    let total = 0;
    cart.forEach((item, index) => {
        total += item.price;
        cartItems.innerHTML += `
            <p>${item.title} - $${item.price}</p>
            <button onclick="removeFromCart(${index})">Remove</button>
        `;
    });

    let deliveryFee = total < freeDeliveryThreshold ? deliveryCharge : 0;
    let finalTotal = total + deliveryFee;

    totalPriceEl.textContent = finalTotal.toFixed(2);
    deliveryChargeEl.textContent = `Delivery Charge: $${deliveryFee.toFixed(2)}`;

    // Update delivery timing
    const estimatedDeliveryTime = getEstimatedDeliveryTime();
    deliveryTimingEl.textContent = `Estimated Delivery Time: ${estimatedDeliveryTime}`;
}

function getEstimatedDeliveryTime() {
    const address = deliveryAddressInput.value.trim();
    if (!address) {
        return 'Please enter your address to get an estimated delivery time.';
    }
    // Simplified delivery time logic
    return '3-5 business days'; // You can adjust this based on the address or other criteria
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartCount();
    showCart();
}

codButton.addEventListener('click', () => {
    const address = deliveryAddressInput.value.trim();
    if (address) {
        alert(`Cash on Delivery option selected. Address: ${address}. Thank you for your purchase!`);
        cart = [];
        updateCartCount();
        cartModal.style.display = 'none';
    } else {
        alert('Please enter a delivery address.');
    }
});

buyNowButton.addEventListener('click', () => {
    const address = deliveryAddressInput.value.trim();
    if (address) {
        alert(`Purchase confirmed. Address: ${address}. Thank you for your order!`);
        cart = [];
        updateCartCount();
        cartModal.style.display = 'none';
    } else {
        alert('Please enter a delivery address.');
    }
    alert(`Welcome To MT Book Store`)
});
