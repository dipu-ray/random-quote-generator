// Data Source from array of objects
const quotes = [
    {
        quote: "The only way to do great work is to love what you do.",
        author: "Steve Jobs",
    },
    {
        quote: "In the middle of every difficulty lies opportunity.",
        author: "Albert Einstein",
    },
    {
        quote: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt",
    },
    {
        quote: "It always seems impossible until it's done.",
        author: "Nelson Mandela",
    },
    {
        quote: "Your time is limited, so don't waste it living someone else's life.",
        author: "Steve Jobs",
    },
];

// DOM Elements Selection
const quoteText = document.getElementById("quote-text");
const authorText = document.getElementById("author-text");
const newQuoteBtn = document.getElementById("new-quote-btn");

// Display the first quote as soon as the page loads
let initialIndex = Math.floor(Math.random() * quotes.length);
quoteText.innerText = `"${quotes[initialIndex].quote}"`;
authorText.innerText = `"${quotes[initialIndex].author}"`;

// Display a new quote directly as soon as the button is clicked
newQuoteBtn.addEventListener("click", () => {
    let randomIndex = Math.floor(Math.random() * quotes.length);
    quoteText.innerText = `"${quotes[randomIndex].quote}"`;
    authorText.innerText = `- ${quotes[randomIndex].author}`;
});