const quoteText = document.querySelector(".quote");
const quoteBtn = document.querySelector("button");
const authorName = document.querySelector(".name")
const soundBtn = document.querySelector(".sound")
const copyBtn = document.querySelector(".copy")
const twitterBtn = document.querySelector(".twitter")

function randomNumber(min,max) {
    return Math.floor(Math.random() * (max-min) + min)
}

function randomQuote() {
    quoteBtn.classList.add("loading");
    quoteBtn.innerText = "Loading Quote..."
    //fetching random quotes from the APT and parsing it into JavaScript object
    fetch("https://api.whatdoestrumpthink.com/api/v1/quotes").then(res => res.json()).then(result =>{
        randomNum = randomNumber(0,48)
        quoteText.innerText = result.messages.non_personalized[randomNum]
        quoteBtn.innerText = "New Quote"
        quoteBtn.classList.remove("loading");
    })
    
}

quoteBtn.addEventListener("click", randomQuote);

soundBtn.addEventListener("click", () => {
    let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${authorName.innerText}`);
    speechSynthesis.speak(utterance)
})
copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(`"${quoteText.innerText}"-${authorName.innerText}`)
})
twitterBtn.addEventListener("click", () =>{
    let tweetUrl = `https://twitter.com/intent/tweet?url=${quoteText.innerText}`
    window.open(tweetUrl, "_blank");
}
)
