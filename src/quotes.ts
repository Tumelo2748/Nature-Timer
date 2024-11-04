const natureQuotes = [
  "In nature, nothing is perfect and everything is perfect. - Alice Walker",
  "Look deep into nature, and then you will understand everything better. - Albert Einstein",
  "Nature does not hurry, yet everything is accomplished. - Lao Tzu",
  "The earth has music for those who listen. - George Santayana",
  "Time spent amongst trees is never wasted time. - Katrina Mayer"
];

export function setupQuotes() {
  const quoteElement = document.querySelector<HTMLDivElement>('#quote')!;
  
  function updateQuote() {
    const randomIndex = Math.floor(Math.random() * natureQuotes.length);
    quoteElement.textContent = natureQuotes[randomIndex];
  }

  updateQuote();
  setInterval(updateQuote, 300000); // Change quote every 5 minutes
}