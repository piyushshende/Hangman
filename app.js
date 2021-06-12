var alph = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var cnt = 10;
const data = {
    sholay: {
        "question": "What is the name of Sholay's iconic villain?",
        "Hint": "His sirname is singh.",
        "Answer": 'Gabbar Singh'
    },
    dch: {
        "question": "Who directed Dil Chahta Hai?",
        "Hint": "His fathers name is Javed akhtar.",
        "Answer": 'Farhan Akhtar'
    },
    queen: {
        "question": "Which city does Rani visit when she goes on her 'solo' honeymoon in Queen?",
        "Hint": "City of eiffel tower.",
        "Answer": 'Paris'
    },
    ddlj: {
        "question": "What is the name of the lead female character in Dilwale Dulhania Le Jayenge?",
        "Hint": "jaa simran jaa.",
        "Answer": 'Simran'
    },
    maa: {
        "question": 'Finish the quote from Deewar: "Mere paas _____."',
        "Hint": "Famous quote used for advertisement and meme.",
        "Answer": 'maa hai'
    },
    rahul: {
        "question": "First thing’s first. Who scored the most international runs for India in 2020?",
        "Hint": "He scored 847 run.",
        "Answer": "KL Rahul"
    },
    bumrah: {
        "question": "Who was the highest wicket-taker for India in the year? (27 wickets)?",
        "Hint": "He took 27 wickets.",
        "Answer": "Jasprit Bumrah"
    },
    fifty: {
        "question": "Who hit the most fours for India in 2020? (68)",
        "Hint": "His 68 fours in 2020.",
        "Answer": "Virat Kohli"
    },

};
var choose;

var buttons = function() {
    myButtons = document.getElementById('buttons');

    for (var i = 0; i < alph.length; i++) {
        var x = document.createElement("button");
        x.innerHTML = alph[i];
        myButtons.appendChild(x);
    }
    return myButtons;

}

function showBtns() {
    btns = document.querySelectorAll('button');
    for (var btn of btns) {
        btn.addEventListener('click', function(e) {
            if (e.target.innerText == "Hint") {
                const content = document.getElementById("clue");
                content.innerHTML = data[choose]["Hint"];
            } else if (e.target.innerText == "Play again") {
                window.location.reload();
            } else { replace(e.target.innerText); }

        });
    }
}


function getRandomNumber() {
    return Math.floor(Math.random() * 8);
}

function ShowBlanks() {
    const index = getRandomNumber();
    choose = Object.keys(data)[index];
    genre = document.getElementById("description");
    genre.innerHTML = data[choose]["question"];
    screen = document.getElementById('blanks');
    for (var i = 0; i < data[choose]["Answer"].length; i++) {
        if (data[choose]["Answer"][i] == " ") {
            screen.innerHTML += '-';
        } else {
            screen.innerHTML += '_';
        }
    }
}

function showLives(cnt) {
    live = document.getElementById("lives");
    live.innerHTML = `You have ${cnt} lives`;
}

function showResult(len, cnt) {
    show = document.getElementById("lives");
    if (len == 0 && cnt > 0) {
        show.innerHTML = "You Win!";
    } else if (len > 0 && cnt == 0) {
        show.innerHTML = "Game Over!";
    }

}

function graphic(cnt) {
    var canvas = document.getElementById("stickman");
    var ctx = canvas.getContext("2d");
    switch (cnt) {
        case 9:
            ctx.moveTo(270, 140);
            ctx.lineTo(30, 140);
            break;
        case 8:
            ctx.moveTo(30, 140);
            ctx.lineTo(30, 20);
            break;
        case 7:
            ctx.moveTo(30, 20);
            ctx.lineTo(130, 20);
            break;
        case 6:
            ctx.moveTo(130, 20);
            ctx.lineTo(130, 30);
            break;
            //ctx.stroke();
        case 5:
            ctx.beginPath();
            ctx.arc(130, 40, 10, 0, 2 * Math.PI);
            break;
            //ctx.stroke();
        case 4:
            ctx.moveTo(130, 50);
            ctx.lineTo(130, 95);
            break;
        case 3:
            ctx.moveTo(130, 55);
            ctx.lineTo(100, 70);
            break;
        case 2:
            ctx.moveTo(130, 55);
            ctx.lineTo(160, 70);
            break;
        case 1:
            ctx.moveTo(130, 95);
            ctx.lineTo(100, 120);
            break;
        case 0:
            ctx.moveTo(130, 95);
            ctx.lineTo(160, 120);
            break;
    }
    ctx.strokeStyle = "#FFFFFF";
    ctx.stroke();

}

function replace(x) {
    if (cnt != 0) {
        screen = document.getElementById('blanks');
        word = screen.innerText;
        ans = data[choose]["Answer"];
        newStr = "";
        cond = false;
        len = 0;
        for (var i = 0; i < ans.length; i++) {
            if (ans[i].toLowerCase() == x.toLowerCase()) {
                newStr += ans[i];
                cond = true;
            } else {
                newStr += word[i];
                if (word[i] == "_") len++;
            }
        }
        if (cond === false) {
            cnt--;
            graphic(cnt);
        }
        screen.innerHTML = newStr;
        showLives(cnt);
        showResult(len, cnt);
    }
}
buttons();
showBtns();
showLives(cnt);
ShowBlanks();
graphic(cnt);
