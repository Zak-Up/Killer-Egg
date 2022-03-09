
function iShoot(enemy) {
    
    enemy.classList.add("dead");

    if(!livingEnemies().length); {
        alert("Boom!");
        window.location.reload();
    }
}

function enemyAttacksMe (enemy) {
    enemy.classList.add("showing");
    setTimeout(() => {
        enemyShootsMe(enemy);
    }, 400 );
    
    
    setTimeout(() => {
        enemy.classList.remove("showing")
    }, 500);
}


function enemyShootsMe(enemy) {


    enemyGunSound.play();

    if(!enemy.classList.contains("dead")) {
        enemy.classList.add("shooting");
        setTimeout(() => {
            enemy.classList.remove("shooting");
        }, 300);
    }
    
    updateHealthPoints(healthPoints - 10);
    
    setTimeout(() => {
        enemy.classList.remove("shooting")
    },200);
}

function livingEnemies () {
    return document.querySelectorAll(".enemy:not(.dead)")
}

function randomEnemyAttacks() {
    var randomEnemyNo = Math.random() * livingEnemies ().length;
    randomEnemyNo = Math.floor(randomEnemyNo);
    var enemy = livingEnemies()[randomEnemyNo];

    var randomDelay = Math.random() * 2000 + 1000;
    
    
    setTimeout(() => {
        enemyAttacksMe(enemy);
        randomEnemyAttacks();
    }, randomDelay);
}

var healthPoints = 100;

function updateHealthPoints(points) {
    
    
    healthPoints = points;
    var healthBar = document.querySelector("#healthBar");

    healthBar.style.width = points + "%";

    if(healthPoints < 1) {
        alert("Game over!");
        window.location.reload();
    }
}

function newGame () {

    randomEnemyAttacks();
    document.querySelector("button").style.display = "none";
    music.play();
}

var myGunSound = new Audio ("bang.mp3");

var enemyGunSound = new Audio ("/assets/bang.mp3");
enemyGunSound.volume = 0.4;

var music = new Audio ("music.mp3");
music.loop = true;

