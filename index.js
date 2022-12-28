var randomNumber1 = randomInt(1, 6);
var randomNumber2 = randomInt(1, 6);

const leftImg = document.querySelector(".img1");
const rightImg = document.querySelector(".img2");
const title = document.querySelector("h1");

function randomInt(min, max)
{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function changeImgnTitle()
{
    let leftImgLocation = `images/dice${randomNumber1}.png`;
    let rightImgLocation = `images/dice${randomNumber2}.png`;

    leftImg.src = leftImgLocation;
    rightImg.src = rightImgLocation;

    if (randomNumber1 > randomNumber2)
    {
        title.textContent = "Player 1 Wins 🏆";
    }

    else if (randomNumber1 < randomNumber2)
    {
        title.textContent = "Player 2 Wins 🏆";
    }

    else
    {
        title.textContent = "Tie 😕";
    }
}

changeImgnTitle();