var Directories = [
    "who-1>lackinganame","who-3>1962700","who-4>that's a great question","who-6>echoplex",

    "who-2>pepper grinder",
    "pepper grinder-1>salt shaker","pepper grinder-2>salt shaker","pepper grinder-3>salt shaker","pepper grinder-4>salt shaker","pepper grinder-5>salt shaker","pepper grinder-6>salt shaker","pepper grinder-7>salt shaker",
    
    "who-5>fuck you",
    "fuck you-1>a******","fuck you-2>john riccitiello","fuck you-3>consciousness","fuck you-4>infrastructure","fuck you-5>v*****","fuck you-6>education system","fuck you-7>have fun scraping my brains of the wall",

    "echoplex-1>bottomless pit",
    "bottomless pit-1>giving bad people good ideas","bottomless pit-2>spikes","bottomless pit-3>bubbles buried in this jungle","bottomless pit-4>houdini","bottomless pit-5>bb poison","bottomless pit-6>three bedrooms in a good neighborhood","bottomless pit-7>(self-titled track)",

    "echoplex-2>blood stasis",
    "blood stasis-1>i can feel my insides","blood stasis-2>laser-guided // plasma bomb radius","blood stasis-3>atom buster","blood stasis-4>brain mill","blood stasis-5>muppet meat","blood stasis-6>adhesive repellent","blood stasis-7>summon x3",

    "echoplex-3>chaser",
    "chaser-1>act right","chaser-2>p3t","chaser-3>push ur t3mprr","chaser-4>katamari","chaser-5>murder every 1 u know!","chaser-6>girl hell 1999","chaser-7>i might b3 sick (shoulda been on dere)",

    "echoplex-4>white pony",
    "white pony-1>digital bath","white pony-2>elite","white pony-3>rx queen","white pony-4>korea","white pony-5>passenger","white pony-6>change","white pony-7>pink maggit",

    "echoplex-5>veteran",
    "veteran-1>1539 n. calvert","veteran-2>thug tears","veteran-3>baby i'm bleeding","veteran-4>germs","veteran-5>whole foods","veteran-6>rainbow six","veteran-7>curb stomp",

    "echoplex-6>yeezus",
    "yeezus-1>on sight","yeezus-2>black skinhead","yeezus-3>new slaves","yeezus-4>hold my liquor","yeezus-5>blood on the leaves","yeezus-6>guilt trip","yeezus-7>bound 2",

    "echoplex-7>midcity",
    "midcity-1>intro","midcity-2>bout.that","midcity-3>get.it","midcity-4>bullshit","midcity-5>guns.up","midcity-6>killer","midcity-7>story",

    "who-7>it's clipping bitch",
    "it's clipping bitch-1>1776992430","it's clipping bitch-2>1776992430","it's clipping bitch-3>1776992430","it's clipping bitch-4>1776992430","it's clipping bitch-5>1776992430","it's clipping bitch-6>1776992430","it's clipping bitch-7>1776992430",
]

var PG = false
var BadWordBox = "fuck,bitch,shit,hell,damn"

var Directory = "who\\"
var CurrentWord = "who"
function WordClicked(Clicked) {
    for (var I = 0; I < Directories.length; I++) {
        if (Directories[I] == CurrentWord + "-" + Clicked + ">" + Directories[I].split(">")[1]) {
            CurrentWord = Directories[I].split(">")[1]
            Directory = Directory + CurrentWord + "\\"

            var PGCurrentWord = CurrentWord
            if (PG) {
                for (var B = 0; B < BadWordBox.split(",").length; B++) {
                    if (PGCurrentWord.toLowerCase().includes(BadWordBox.split(",")[B])) {
                        PGCurrentWord = PGCurrentWord.replace(BadWordBox.split(",")[B],"*".repeat(BadWordBox.split(",")[B].length))
                    }
                }
            }

            for (var W = 0; W < document.getElementsByClassName("word").length; W++) {
                if (PG) {document.getElementsByClassName("word")[W].innerHTML = PGCurrentWord}
                else {document.getElementsByClassName("word")[W].innerHTML = CurrentWord}
            }
            break
        }
    }
    
    var PGDirectory = Directory
    if (PG) {
        for (var B = 0; B < BadWordBox.split(",").length; B++) {
            if (PGDirectory.toLowerCase().includes(BadWordBox.split(",")[B])) {
                PGDirectory = PGDirectory.replace(BadWordBox.split(",")[B],"*".repeat(BadWordBox.split(",")[B].length))
            }
        }
        document.getElementById("directory").innerHTML = PGDirectory
    } else {document.getElementById("directory").innerHTML = Directory}
}

function PreviousClicked() {
    if (Directory == "who\\") {return}
    Directory = Directory.split(Directory.split("\\")[Directory.split("\\").length - 2] + "\\").join("")
    CurrentWord = Directory.split("\\")[Directory.split("\\").length - 2]

    var PGCurrentWord = CurrentWord
    if (PG) {
        for (var B = 0; B < BadWordBox.split(",").length; B++) {
            if (PGCurrentWord.toLowerCase().includes(BadWordBox.split(",")[B])) {
                PGCurrentWord = PGCurrentWord.replace(BadWordBox.split(",")[B],"*".repeat(BadWordBox.split(",")[B].length))
            }
        }
    }

    for (var W = 0; W < document.getElementsByClassName("word").length; W++) {
        if (PG) {document.getElementsByClassName("word")[W].innerHTML = PGCurrentWord}
        else {document.getElementsByClassName("word")[W].innerHTML = CurrentWord}
    }

    var PGDirectory = Directory
    if (PG) {
        for (var B = 0; B < BadWordBox.split(",").length; B++) {
            if (PGDirectory.toLowerCase().includes(BadWordBox.split(",")[B])) {
                PGDirectory = PGDirectory.replace(BadWordBox.split(",")[B],"*".repeat(BadWordBox.split(",")[B].length))
            }
        }
        document.getElementById("directory").innerHTML = PGDirectory
    } else {document.getElementById("directory").innerHTML = Directory}
}

function PGToggle() {
    PG = !PG

    if (PG) {document.getElementById("pg").style.background = "#0f0"}
    else {document.getElementById("pg").style.background = "#f00"}
}

document.addEventListener("DOMContentLoaded", () => {
    function Update() {
        document.body.style.setProperty("--offset", (Math.random() * (50 - (-50)) + (-50)) + "px")
    }

    setInterval(Update,50)
})