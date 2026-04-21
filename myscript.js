// 1. Personalized Welcome Greeting
document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    
    // Ask for the visitor's name only once per session
    if (!sessionStorage.getItem('visitorName')) {
        const name = prompt("Welcome! What is your name?");
        if (name) {
            sessionStorage.setItem('visitorName', name);
            header.innerText += ` (Hello, ${name}!)`;
        }
    } else {
        const storedName = sessionStorage.getItem('visitorName');
        header.innerText += ` (Welcome back, ${storedName}!)`;
    }

    // 2. Smooth Reveal Animation
    // Makes the content fade in and slide up when the page loads
    const content = document.querySelector('.content-box');
    content.style.opacity = '0';
    content.style.transform = 'translateY(20px)';
    content.style.transition = 'all 1s ease-out';

    setTimeout(() => {
        content.style.opacity = '1';
        content.style.transform = 'translateY(0)';
    }, 300);

    // 3. Interactive spirituality "Thought of the Day"
    // Adds a button dynamically to your list
    const spiritualityItem = document.querySelectorAll('ol li')[1]; // The "Spirituality" list item
    
    const quoteBtn = document.createElement('button');
    quoteBtn.textContent = "✨ Get Inspiration";
    quoteBtn.style.marginLeft = "10px";
    quoteBtn.style.cursor = "pointer";
    quoteBtn.style.borderRadius = "10px";
    quoteBtn.style.border = "1px solid teal";

    spiritualityItem.appendChild(quoteBtn);

    const quotes = [
        "The soul always knows what to do to heal itself.",
        "Peace comes from within. Do not seek it without.",
        "Quiet the mind, and the soul will speak."
    ];

    quoteBtn.addEventListener('click', () => {
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        alert(`Today's spiritual thought: \n"${randomQuote}"`);
    });
});
