const arenas = document.querySelector('.arenas');
const randomButton = document.querySelector('.button');

const player1 = {
    player: 1,
    name: "SCORPION",
    hp: 80,
    img: "http://reactmarathon-api.herokuapp.com/assets/scorpion.gif",
    weapon: [],
    attack: function () {
        console.log(name +"Fight...")
    }
};
const player2 = {
    player: 2,
    name: "SUB-ZERO",
    hp: 80,
    img: "http://reactmarathon-api.herokuapp.com/assets/subzero.gif",
    weapon: [],
    attack: function () {
        console.log(name +"Fight...")
    }
};

const createElement = (tag, className) =>{
    const $tag = document.createElement(tag);
    if(className){
        $tag.classList.add(className);
    }
    return $tag;
}

const createPlayer = (name_player) => {
    const player1 = createElement('div','player'+name_player.player);
    const progressbar = createElement('div' ,'progressbar');
    const life = createElement('div','life');
    const name = createElement('div', 'name');
    const character = createElement('div', 'character');
    const img= createElement('img');

    life.style.width = name_player.hp+'%';

    name.innerText=name_player.name;

    img.src=name_player.img;

    character.appendChild(img);
    progressbar.appendChild(life);
    progressbar.appendChild(name);
    player1.appendChild(character);
    player1.appendChild(progressbar);

    return player1;
}
const changeHP = (player) => {
    const playerLife = document.querySelector('.player' + player.player + ' .life');
    console.log(player);
    if (player.hp <= 0){
        player.hp = 0;
        if(player.player === 1){
            arenas.appendChild(playerLose(player2.name));
        }else{
            arenas.appendChild(playerLose(player1.name));
        }

        randomButton.disabled = true;
    }else {
        player.hp-=Math.random() * 19 + 1;
    }
    playerLife.style.width = player.hp +'%';
}

const playerLose = (name) => {
    const loseTitle = createElement('div', 'loseTitle');

    loseTitle.innerText = name + ' win';

    return loseTitle;
}
randomButton.addEventListener('click',() =>{
    changeHP(player1);
    changeHP(player2);
})

arenas.appendChild(createPlayer(player1));
arenas.appendChild(createPlayer( player2));


