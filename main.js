class Game {
    constructor(cols) {
        this.cols = cols;
        this.highlighted = [];

    }

    createDOM() {
        var dom = document.getElementById("app");
        for (let i = 0; i < this.cols; i++) {
            let col = document.createElement("span");
            col.setAttribute("index", i);
            dom.appendChild(col);
        }
    }

    highlightDOM() {
        var dom = document.getElementById("app");
        this.highlighted = [];
        for (let i = 0; i < (this.cols) - 2; i++) {
            let random = Math.floor((Math.random() * this.cols) + 1);
            this.highlighted.push(random-1);
            dom.children[random - 1].setAttribute("class", "highlight");
        }
        var highlighted = this.highlighted;
        setTimeout(() => {
            for (let i = 0; i < highlighted.length; i++) {
                dom.children[highlighted[i]].removeAttribute("class", "highlight");
            }
        }, 500)
    }

    play(index) {
        var dom = document.getElementById("app");
        index = Number(index)
        if (this.highlighted.indexOf(index) != -1) {
            this.highlighted.splice(index, 1)
            dom.children[index].removeAttribute("class", "highlight");
        } else {
            alert("You Failed");
            for (let i = 0; i < this.highlighted.length; i++) {
                dom.children[this.highlighted[i] - 1].removeAttribute("class", "highlight");
            }
        }
    }

}


var game = new Game(10
);
game.createDOM();


// Start Button Action
document.getElementById("start").addEventListener("click", function(ev) {
    game.highlightDOM();
});


// Click cols action
document.getElementById("app").addEventListener("click", function(ev) {
    var index = ev.target.getAttribute("index");
    game.play(index);
});