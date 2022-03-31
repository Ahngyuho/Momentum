const quotes = [
    {
       quote: "The way to get started is to quit taalking and begin doing",
       author: "Walt Disney",
    },
    {
        quote: "Success is walking from failure to failure with no loss of enthusiasm.",
        author: "Winston Churchill",
    },
    {
        quote: "The road to success and the road to failure are almost exactly the same.",
        author: "Colin R. Davis",
    },
    {
        quote: "It is better to fail in originality than to succeed in imitation.",
        author: "Herman Melville",
    },
    {
        quote: "All progress takes place outside the comfort zone.",
        author: "Michael John Bobak",
    },
    {
        quote: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
        author: "Albert Schweitzer",
    },
    {
        quote: "Success seems to be connected with action. Successful people keep moving.",
        author: "Conrad Hilton",
    },
    {
        quote: "In order to succeed, we must first believe that we can.",
        author: "Nikos Kazantzakis",
    },
    {
        quote: "The only place where success comes before work is in the dictionary.",
        author: " Vidal Sassoon",
    },
    {
        quote: "In the end, it's not the years in your life that count. It's the life in your years.",
        author: " Abraham Lincoln",
    }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;