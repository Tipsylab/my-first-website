
document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
 
    
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

   
    const content = document.querySelector('.content-box');
    content.style.opacity = '0';
    content.style.transform = 'translateY(20px)';
    content.style.transition = 'all 1s ease-out';

    setTimeout(() => {
        content.style.opacity = '1';
        content.style.transform = 'translateY(0)';
    }, 300);
    const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

toggleButton.addEventListener('click', () => {
    
    body.classList.toggle('dark-mode');

    
    if (body.classList.contains('dark-mode')) {
        toggleButton.textContent = "☀️LIGHT MODE";
    } else {
        toggleButton.textContent = "🌙DARK MODE";
    }
});


    
    const spiritualityItem = document.querySelectorAll('ol li')[1]; 
    
    const quoteBtn = document.createElement('button');
    quoteBtn.textContent = "✨ Get Inspiration";
    quoteBtn.style.marginLeft = "10px";
    quoteBtn.style.cursor = "pointer";
    quoteBtn.style.borderRadius = "10px";
    quoteBtn.style.border = "1px solid teal";

    spiritualityItem.appendChild(quoteBtn);

    const quotes = [
        "God has given us a peace that surpasseth understanding in Christ Jesus.",
        "Do not be anxious about a thing but cast your burdens on him because he cares for you.",
        "Hope in Christ for He will never disappoint."
    ];

    quoteBtn.addEventListener('click', () => {
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        alert(`Today's spiritual thought: \n"${randomQuote}"`);
    });
});
