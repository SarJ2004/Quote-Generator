const apiUrl = "https://api.quotable.io/random";
const quote = document.getElementById("quote");
const author = document.getElementById("author");
const button = document.getElementById("button");
const getQuote = async (url) => {
  const response = await fetch(url);
  var data = await response.json();
  console.log(data);
  quote.innerText = data.content;
  author.innerText = data.author;
};

getQuote(apiUrl);

button.addEventListener("click", (event) => {
  getQuote(apiUrl);
});
