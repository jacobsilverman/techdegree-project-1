// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

//Create an array of at least 5 quote objects
//Quote objects must have at least 2 properties
//Quote text of the Quote
//Source where did the quote come from the person who said it
//Optional properties date and citation

var arrayOfQuotes = [
  {quote: "Talk is cheap. Show me the code.",
   source: "Linus Torvalds"},
  {quote: "Programs must be written for people to read, and only incidentally for machines to execute.",
   source: "Harold Abelson"},
  {quote: "Give a man a program, frustrate him for a day. Teach a man to program, frustrate him for a lifetime.",
   source: "Waseem Latif"},
  {quote: "Truth can only be found in one place: the code.",
   source: "Robert C. Martin",
   citation: "Clean Code: A Handbook of Agile Software Craftsmanship",
   year: "2008"},
  {quote: "That's the thing about people who think they hate computers. What they really hate is lousy programmers.",
   source: "Larry Niven"}];

function getRandomQuote(){
  //randomly select a quote from the quotes arrayOfQuotes
  var randomFloat = Math.random();
  var randomInteger = parseInt(randomFloat*arrayOfQuotes.length);
  var randomQuote = arrayOfQuotes[randomInteger];
  //return it
  return randomQuote
}

function printQuote(){
  //call the getRandomQuote function
  var returnedQuote = getRandomQuote();
  //use the template provided in the project instructions
  constructedString = '<p class="quote">' + returnedQuote.quote + '</p>';
  constructedString += '<p class="source">' + returnedQuote.source;
  if (returnedQuote.citation !== undefined) {
    constructedString += '<span class="citation">' + returnedQuote.citation + '</span>';
  }
  if (returnedQuote.year !== undefined) {
    constructedString += '<span class="year">' + returnedQuote.year + '</span>';
  }
  constructedString += '</p>';
  //print the quote to the page
  document.getElementById('quote-box').innerHTML = constructedString;
  return 0;
}
