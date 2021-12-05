let nameUser = prompt('What is your name?');
while(nameUser == null) {
    nameUser = prompt('What is your name?');
}
let block = document.querySelector('.block');
let block2 = document.querySelector('.block2');
let generate = document.querySelector('.generate');
let numberOfWinsUser = 0;
let numberOfWinsComputer = 0;

block.querySelector('.numberOfWinsUser').innerHTML = numberOfWinsUser;
block2.querySelector('.numberOfWinsComputer').innerHTML = numberOfWinsComputer;

block.querySelector('.user').innerHTML = nameUser;

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}
function reset() {
    numberOfWinsUser = 0;
    numberOfWinsComputer = 0;
    block.querySelector('.numberOfWinsUser').innerHTML = numberOfWinsUser;
    block2.querySelector('.numberOfWinsComputer').innerHTML = numberOfWinsComputer;
}

generate.onclick = function(){
    let numberUser, numberComputer;
    do {
        numberUser = getRandomInt(1, 10);
        numberComputer = getRandomInt(1, 10);   
    } while (numberUser == numberComputer);
    if (numberUser > numberComputer) {
        numberOfWinsUser++;
        block.querySelector('.numberOfWinsUser').innerHTML = numberOfWinsUser;
    } else {
        numberOfWinsComputer++;
        block2.querySelector('.numberOfWinsComputer').innerHTML = numberOfWinsComputer;
    }
    block.querySelector('.scoreUser').innerHTML = numberUser;
    block2.querySelector('.scoreComputer').innerHTML = numberComputer;
    if (numberOfWinsUser == 3) {
        alert('Win ' + nameUser);
        reset();
    } else if (numberOfWinsComputer == 3) {
        alert('Win ' + 'Computer');
        reset();
    }
};
