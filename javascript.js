// Array of motivational quotes
const quotes = [
  "Believe you can and you're halfway there.",
  "The harder you work for something, the greater you’ll feel when you achieve it.",
  "Don’t watch the clock; do what it does. Keep going.",
  "Success is not for the lazy.",
  "Push yourself, because no one else is going to do it for you.",
  "Every day is a new opportunity to grow and improve yourself."
];

function updateTime() {
  const now = new Date();
  const time = now.toLocaleTimeString();
  const date = now.toDateString();
  document.getElementById('time').textContent = time;
  document.getElementById('date').textContent = date;
  
  // Change greeting
  const hours = now.getHours();
  let greeting = "Good Evening!";
  if (hours < 12) greeting = "Good Morning!";
  else if (hours < 18) greeting = "Good Afternoon!";
  document.getElementById('greeting').textContent = greeting;
}

// Show random quote
function showQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  document.getElementById('quote').textContent = quotes[randomIndex];
}

document.getElementById('new-quote').addEventListener('click', showQuote);

// Initial calls
updateTime();
showQuote();
setInterval(updateTime, 1000);
