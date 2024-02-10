const api_url = "https://api.quotable.io/random";
const quote = document.getElementById("quote");
const author = document.getElementById("author");
const newQuote = document.getElementById("new-quote");
const tweetButton = document.getElementById("tweet-button");

async function getQuote(url) {
  const response = await fetch(url);
  let data = await response.json();
  quote.innerHTML = data.content;
  author.innerHTML = data.author;
}

newQuote.addEventListener("click", () => {
  getQuote(api_url);
});

getQuote(api_url);

function tweet() {
  window.open(
    "https://twi tter.com/intent/tweet?text=" +
      quote.innerHTML +
      "----- by " +
      author.innerHTML,
    "Tweet Window",
    "width=600, height=300"
  );
}

tweetButton.addEventListener("click", tweet);
