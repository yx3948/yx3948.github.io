    let colorList = ["lightpink", "gold", "aquamarine", "tomato", "plum", "#40E0D0", "orange"];
    
    let eggElement = document.getElementById("egg");

    let wINdo = ["vomiting leaf", "wandering trill","good dull filler","really thick curve", "winnowy gullet", "random health","full belly","orange","loud keyboard","calculaitng turn","burgeoning chest","zinger"]
       
    
    document.getElementById("lorem").onclick = function(){
        document.getElementById("small").innerHTML = wINdo[Math.floor(Math.random() * wINdo.length)];
    }
        
    eggElement.onclick = function(){
        let randomIndex = Math.floor(Math.random() * colorList.length);
        let chosenColor = colorList[randomIndex];
        document.body.style.backgroundColor = chosenColor;
    }
        let fontSizes = ["15px", "30px", "60px"];
    let tomatoBtn = document.getElementById("tomato");
    let loremBox = document.getElementById("lorem");

    tomatoBtn.onclick = function() {
        let randomSizeIndex = Math.floor(Math.random() * fontSizes.length);
        let chosenSize = fontSizes[randomSizeIndex];
        loremBox.style.fontSize = chosenSize;
    };