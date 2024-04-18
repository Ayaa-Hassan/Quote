




function showQuote() { 
    var textQuote = ["“In three words I can sum up everything I've learned about life: it goes on.”",
        "“So many books, so little time.”",
        "“You only live once, but if you do it right, once is enough.”",
    ]
    var authQuote = ["― Robert Frost", "― Frank Zappa", "― Mae West"]
    var text = Math.floor(Math.random() * textQuote.length);
    document.getElementById("quote").innerHTML = textQuote[text];
    document.getElementById("author").innerHTML = authQuote[text];

  
    
}

