const buttons = document.querySelectorAll('.b');
let previousHeading = null;
let rez = null;
buttons.forEach( button => {
    button.addEventListener('click', (event) => {
        const buttonValue = event.target.textContent;


        if (previousHeading) { // if null -> false, if something -> true
            document.body.removeChild(previousHeading);
        }

        if(rez){
            document.body.removeChild(rez);
        }

        const ispis = document.createElement('h1');
        ispis.classList.add("ispis");

        const pcChoice = ['Rock', 'Paper', 'Scissors'][Math.floor(Math.random() * 3)];

        ispis.textContent = `User clicked on: ${buttonValue} | Computer choice: ${pcChoice}`;
        document.body.appendChild(ispis);

        const result = document.createElement('h3');
        result.classList.add("result");

        if(pcChoice === buttonValue)
            result.textContent = "Equal";
        else if((buttonValue === 'Rock' && pcChoice === 'Scissors') || (buttonValue === 'Scissors' && pcChoice === 'Paper') || (buttonValue === 'Paper' && pcChoice === 'Rock'))
            result.textContent = "You Win!";
        else
            result.textContent = "You Lose!";
        document.body.appendChild(result);

        previousHeading = ispis;
        rez = result;
    })
});