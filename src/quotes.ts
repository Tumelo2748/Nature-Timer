const natureQuotes = [
  "In nature, nothing is perfect and everything is perfect. - Alice Walker",
  "Look deep into nature, and then you will understand everything better. - Albert Einstein",
  "Nature does not hurry, yet everything is accomplished. - Lao Tzu",
  "The earth has music for those who listen. - George Santayana",
  "Time spent amongst trees is never wasted time. - Katrina Mayer",
  "Adopt the pace of nature: her secret is patience. - Ralph Waldo Emerson",
  "The clearest way into the Universe is through a forest wilderness. - John Muir",
  "To sit in the shade on a fine day and look upon verdure is the most perfect refreshment. - Jane Austen",
  "Look deep into nature, and you will find the spirit of the earth. - Native American Proverb",
  "The mountains are calling and I must go. - John Muir",
  "Heaven is under our feet as well as over our heads. - Henry David Thoreau",
  "Every flower is a soul blossoming in nature. - Gerard De Nerval",
  "There are always flowers for those who want to see them. - Henri Matisse",
  "The poetry of the earth is never dead. - John Keats",
  "Wilderness is not a luxury but a necessity of the human spirit. - Edward Abbey"
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