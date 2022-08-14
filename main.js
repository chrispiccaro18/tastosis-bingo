import { quoteArray } from "./quotes.js";
const usedQuotes = [];

const dataRows = document.querySelectorAll('.data-row');


dataRows.forEach(row => {
  for (let i = 0; i < 5; i++) {
    const cell = document.createElement('td');

    if (row.id === 'third-row' && i === 2) {
      cell.textContent = 'GG';
    } else {
      let textContent = quoteArray[Math.floor(Math.random() * quoteArray.length - 1)];
      while (usedQuotes.includes(textContent) || !textContent) {
        textContent = quoteArray[Math.floor(Math.random() * quoteArray.length - 1)];
      }
      usedQuotes.push(textContent);
      cell.textContent = textContent;
    }

    row.appendChild(cell);
  }
})
