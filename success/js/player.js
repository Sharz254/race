let player;

function Player(classType, health, mana, strength, agility, speed) {
  this.classType = classType;
  this.health = health;
  this.mana = mana;
  this.strength = strength;
  this.agility = agility;
  this.speed = speed;
}

let PlayerMoves = {
  calcAttack : function () {
    //who attacks first
    let getPlayerSpeed = player.speed;
    let getEnemySpeed = enemy.speed;
    let playerAttack = function( ){
      let calcBaseDamage;
      if (player.mana > 0) {
        calcBaseDamage = player.strength * player.mana / 1000;
      } else {
        calcBaseDamage = player.strength * player.agility /1000;
      }
  
      let offSetDamage = Math.floor (Math.random () * Math.floor(10));
      let calcOutputDamage = calcBaseDamage + offSetDamage;
  
      //Number of hits
  
      let numberOfHits = Math.floor(Math.random() * Math.floor(player.agility / 10) / 2) + 1;
      let attackValues = [calcOutputDamange, numberOfHits];
      return attackValues;
    }
    //enemy attacks
    
    let enemyAttack = function( ){
      let calcBaseDamage;
      if (enemy.mana > 0) {
        calcBaseDamage = enemy.strength * enemy.mana / 1000;
      } else {
        calcBaseDamage = enemy.strength * enemy.agility /1000;
      }
  
      let offSetDamage = Math.floor (Math.random () * Math.floor(10));
      let calcOutputDamage = calcBaseDamage + offSetDamage;
  
      //Number of hits
  
      let numberOfHits = Math.floor(Math.random() * Math.floor(enemy.agility / 10) / 2) + 1;
      let attackValues = [calcOutputDamange, numberOfHits];
      return attackValues;
    }
  
    let getPlayerHealth = document.querySelector(".health-player");
    let getEnemyerHealth = document.querySelector(".health-enemy");
  
    //initiate attacks
    if(getPlayerSpeed >= getEnemySpeed) {
      let playerAttackValues = playerAttack();
      let totalDamage = playerAttackValues[0] * playerAttackValues[1];
      enemy.health = enemy.health - totalDamage;
      alert("You hit" + playerAttackValues[0] + "times.");
      if (enemy.health <= 0){
        alert("You won. Refresh to play again.");
        getPlayerHealth.innerHTML = 'Health :' + player.health;
        getEnemyHealth.innerHTML = 'Health: 0'
  
      } else  {
        getEnemyerHealth.innerHTML= 'Health: ' + enemy.health;
        //enemy attacks
        let enemyAttackValues = enemyAttack;
        let totalDamage = enemyAttackValues[0] * enemyAttackValues[1];
      player.health = player.health - totalDamage;
      alert("Enemy hit" + enemyAttackValues[0] + "times.");
      if (player.health <= 0){
        alert("You lost. Refresh to play again.");
        
        getPlayerHealth.innerHTML = 'Health: 0'
        getEnemyHealth.innerHTML = 'Health :' + enemy.health;
  
      }else {
        getPlayerHealth.innerHTML = 'Health: ' +player.health;
      }
      } 
    }
  }
}