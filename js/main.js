const player1 ={
    name: "SCORPION",
    hp: "50",
    img: "http://reactmarathon-api.herokuapp.com/assets/scorpion.gif",
    weapon: "",
    attack: function () {
        console.log(name +"Fight...")
    }
};
const player2 ={
    name: "SUB-ZERO",
    hp: "80",
    img: "http://reactmarathon-api.herokuapp.com/assets/subzero.gif",
    weapon: "",
    attack: function () {
        console.log(name +"Fight...")
    }
};
const createPlayer = (player, name_player) => {
    const arenas=document.querySelector('.arenas');
    const player1 = document.createElement('div');
    const progressbar = document.createElement('div');
    const life = document.createElement('div');
    const name = document.createElement('div');
    const character = document.createElement('div');
    const img= document.createElement('img');

    player1.classList.add('player1');
    progressbar.classList.add('progressbar');
    name.classList.add('name');
    name.classList.add('character');

    life.classList.add('life');
    life.style.width = name_player.hp+'%';

    name.innerText=name_player.name;

    img.src=name_player.img;

    character.appendChild(img);
    progressbar.appendChild(life);
    progressbar.appendChild(name);
    player1.appendChild(character);
    player1.appendChild(progressbar);
    arenas.appendChild(player1);
}

createPlayer('player1', player1);
createPlayer('player2', player2);


