const dice1 = document.querySelector('#dice1');
const dice2 = document.querySelector('#dice2');
const dice3 = document.querySelector('#dice3');
const rollBtn = document.querySelector('.roll');

const rollAllDice = () => {
    rollDice(dice1);
    rollDice(dice2);
    rollDice(dice3);
};

const rollDice = (dice) => {
    const random = Math.floor(Math.random() * 6) + 1;
    dice.style.animation = `rolling 1s ease`;

    setTimeout(() => {
        dice.style.animation = 'none';
        switch (random) {
            case 1:
                dice.style.transform = 'rotateX(0deg) rotateY(0deg)';
                break;
            case 6:
                dice.style.transform = 'rotateX(180deg) rotateY(0deg)';
                break;
            case 2:
                dice.style.transform = 'rotateX(-90deg) rotateY(0deg)';
                break;
            case 5:
                dice.style.transform = 'rotateX(90deg) rotateY(0deg)';
                break;
            case 3:
                dice.style.transform = 'rotateX(0deg) rotateY(90deg)';
                break;
            case 4:
                dice.style.transform = 'rotateX(0deg) rotateY(-90deg)';
                break;
            default:
                break;
        }
    }, 950);
};

rollBtn.addEventListener('click', rollAllDice);