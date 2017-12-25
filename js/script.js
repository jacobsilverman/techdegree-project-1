// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", doThis, false);
// console.log(document.styleSheets[0]);
// console.log(document.styleSheets[0].media.mediaText);
/*
 * Project Instruction (PI) 1of11: Create an array of JavaScript objects to
 * hold the data for your quotes. Name the array quotes. The quotes array
 * should be accessible in the global scope.
*/
var quotes = [
  // 2of11 A quote property which contains a string:
  // the text of the quote that will be displayed on the page.
  {quote: "Talk is cheap. Show me the code.",
  // 3of11 A source property which contains a string identifying the creator
  // of the quote. For example: "Mark Twain" or "Traditional Irish proverb.”
   source: "Linus Torvalds"},
  {quote: "Programs must be written for people to read, and only " +
          "incidentally for machines to execute.",
   source: "Harold Abelson",
   // Extra Credit (EC) 1of3 Add more properties to the quote object.
   // For example, a tags property could include a list of "tags"
   // like "humor", "business", or "politics" to categorize each quote.
   tags: "business"},
  {quote: "Give a man a program, frustrate him for a day. " +
          "Teach a man to program, frustrate him for a lifetime.",
   source: "Waseem Latif"},
  {quote: "Truth can only be found in one place: the code.",
   source: "Robert C. Martin",
   // 4of11 An optional citation property which contains a string identifying
   // where the quote comes from, like a speech or publication. For example,
   // "Famous Anonymous Jokes." If there is no known publication,
   // do not include this property on the object.
   citation: "Clean Code: A Handbook of Agile Software Craftsmanship",
   // 5of11: An optional year property which contains a number identifying the
   // date of the quote. For example, 1997. If there is no known date, then
   // do not include this property on the object.
   year: "2008"},
  {quote: "That's the thing about people who think they hate computers. "+
          "What they really hate is lousy programmers.",
   source: "Larry Niven",
   tags: "humour"}];

// Extra Credit 2of3 When the quote changes, randomly change the
// background color of the page.
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// EC 2of3 helper function
function setRandomColor() {
  var newColor = getRandomColor();
  document.getElementsByTagName("BODY")[0].style.backgroundColor = newColor;
  document.getElementById('loadQuote').style.backgroundColor = newColor;
  return 0
}

// 6of11 Create a function named getRandomQuote which:
function getRandomQuote(){
  // 7of11 selects a random quote object from the quotes array
  var randomFloat = Math.random();
  var randomInteger = parseInt(randomFloat*quotes.length);
  var randomQuote = quotes[randomInteger];
  // 8of11 returns the randomly selected quote object
  return randomQuote
}

// 7of11 Create a function named printQuote which follows these rules:
function printQuote(){
  // 8of11 printQuote calls the getRandomQuote function and
  // stores the returned quote object in a variable
  var returnedQuote = getRandomQuote();
  // 9of11 printQuote constructs a string containing the different
  // properties of the quote object using the HTML template (given)
  constructedString = '<p class="quote">' + returnedQuote.quote + '</p>';
  constructedString += '<p class="source">' + returnedQuote.source;
  // 10of11 printQuote doesn't add citation for a missing citation
  // or year if the year property is missing
  if (returnedQuote.citation !== undefined) {
    constructedString += '<span class="citation">' + returnedQuote.citation +
    '</span>';
  }
  if (returnedQuote.year !== undefined) {
    constructedString += '<span class="year">' + returnedQuote.year +
    '</span>';
  }
  if (returnedQuote.tags !== undefined) {
    constructedString += '<p span class="tags">' + returnedQuote.tags +
    '</span> </p>';
  }
  constructedString += '</p>';
  // 11of11 printQuote displays the final HTML string to the page.
  // You can use this JS snippet to accomplish that:
  // document.getElementById('quote-box').innerHTML
  document.getElementById('quote-box').innerHTML = constructedString;
  return 0;
}

function addCSS(){
  var sheet = document.styleSheets[2];
  var newRule1 = '.tags { font-size: 1.25rem; letter-spacing: 0.05em;' +
                 ' line-height: 1.1; text-align: right;' +
                 ' margin-right: 4em; }';
  var newRule2 = '.tags:before { content: "tag: "; }';
  sheet.insertRule(newRule1);
  sheet.insertRule(newRule2);
  console.log(sheet.cssRules);
}

function doThis(){
  addCSS();
  printQuote();
  setRandomColor();
}

/*
 * Extra Credit 3of3 Refresh the quote after a set amount of time.
 * For example, every 30 seconds, make a new quote appear. (You can use
 * the setInterval() or setTimeout() method to do this -- see the links
 * in the “Additional Resources” section).
*/
//setInterval(doThis, 5000);
