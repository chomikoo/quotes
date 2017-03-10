// scripts.js
// AJAX ----  "https://market.mashape.com/andruxnet/random-famous-quotes
var tweetLink = "https://twitter.com/intent/tweet?text=",   // Tweetowanie
    quoteUrl = "https://andruxnet-random-famous-quotes.p.mashape.com/cat=famous?callback?"
    

        
function getQuote() {
    $.ajax({
        url: quoteUrl,
        type: "GET",
        datatype: "json",
        success: function(data) {
            createTweet(JSON.parse(data)); //  
        },
        beforeSend: function(xhr) {
            xhr.setRequestHeader("X-Mashape-Key", "V5Y77yN2LAmshysLITa3BPAF5yXCp1dBdLDjsnhFjK0xjYPwuY");
        }
    });
}

function createTweet(input) {
    if (!input.author.length) {
        input.author = "";
        }
    
    var tweetText = "Qutoe for today - " + input.quote + " Author: " + input.author;
    
    if (tweetText.length > 140) {
            getQuote();
    } else {
        var tweet = tweetLink + encodeURIComponent(tweetText);
            $('.quote').text(input.quote);
            $('.author').text("Autor: " + input.author);
            $('.tweet').attr("href", tweet);
        }
}
            
$(document).ready(function () {
        getQuote();
        $(".trigger").click(function () {
            getQuote();
        })
});

