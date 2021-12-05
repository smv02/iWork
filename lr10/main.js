let nameUser = prompt('What is your name?');
while(nameUser == null) {
    nameUser = prompt('What is your name?');
}
let titleBox = document.querySelector('.title-box');
let block = document.querySelector('.block');
let generate = document.querySelector('.generate');
let attempt = 0;

titleBox.querySelector('.attempt').innerHTML = attempt;
titleBox.querySelector('.user').innerHTML = nameUser;

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}
function reset() {
    attempt = 0;
    titleBox.querySelector('.attempt').innerHTML = attempt;
}

generate.onclick = function(){
    tempA = [];
    for(let i = 0; i < 9; i++) {
        let temp = getRandomInt(1,5);
        tempA.push(temp);
        block.querySelectorAll('img')[i].setAttribute('src',`img/Lr_10/${temp}.jpg`);
    }

    attempt++;
    titleBox.querySelector('.attempt').innerHTML = attempt;

    for(let i = 0, z = 1, c = 2; c < 9;i += 3, z += 3, c += 3) {
        if(tempA[i] == (tempA[z]) && tempA[z] == (tempA[c])) {
            alert(`Win ${nameUser}!!!`);
            reset();
        }
    }

    if (attempt == 3) {
        reset();
    }
};
