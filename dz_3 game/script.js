class Player {
  constructor(playerInfo) {
      this.name = playerInfo.name;
      this.attack = playerInfo.attack;
      this.hitpoints = playerInfo.hitpoints;
      this.totalHitpoints = playerInfo.hitpoints;
      
  }

  getHitpoints() {
    return console.log(this.name+' health: '+ this.hitpoints);
  }

  setHitpoints(val) {
      this.hitpoints = val;
  }

  getTotalHitpoints() {
    return this.totalHitpoints;
}

setTotalHitpoints(val) {
    this.totalHitpoints = val;
}
  getAttack() {
    return this.attack;
}

setAttack(val) {
    this.attack = val;
}
  fight(opponent) {
    if(this === opponent) {console.log(" You can't fight with yourself");
  return;}
  if(!opponent.alive()){
    console.log(this.name+' killed '+opponent.name);
    clearInterval(timer);
}
    else if(opponent.alive()){
      if(opponent instanceof Champion) {
        opponent.hitpoints = opponent.hitpoints - this.attack;
      console.log('FIGHT '+this.name+' attacks '+opponent.name);
      hercules.getHitpoints();
console.log('');
      if(!opponent.alive()){
        this.setAttack(this.attack+1);
      }
        
      } else if(opponent instanceof Monster) {
        console.log('FIGHT '+this.name+' attacks '+opponent.name); 
        if(!opponent.isDefence)
        {
          
          if(this.enrageCount > 0){
          opponent.hitpoints = opponent.hitpoints - (this.attack*2);
          this.enrageCount -= 1;  
          monster.getHitpoints();
console.log('');
        }
          else
          opponent.hitpoints = opponent.hitpoints - this.attack;
          monster.getHitpoints();
console.log('');
        }else{ console.log('Monster missed');
        opponent.isDefence=false;}
      }
    }
  } 

  alive(){
    return this.hitpoints>0; 
  }


}

class Champion extends Player{
  constructor(playerInfo) {
      super(playerInfo);
      this.isDefence=false;
  }

  heal() {
      if(this.hitpoints + 5 <= this.totalHitpoints) {this.hitpoints += 5;
      console.log(this.name+' healed by 5');}
      else console.error("Can't be bigger than total");
  }
  defence(){
    this.isDefence=true;
    this.totalHitpoints++;
    console.log('  '+this.name+' used defence');
  } 
}

class Monster extends Player {
  
  constructor(playerInfo) {
      super(playerInfo);
      this.enrageCount = 0;
  }
  enrage(){
    this.enrageCount=2;
    console.log('  DANGER next two attacks deal double damage for Monster');
  }

  fury(){
    if(this.hitpoints-5>0){
      this.totalHitpoints-=5;
      this.hitpoints-=5;
      this.attack+=2;

    }
    else console.error("Not enough health for that");
  } 
}

let hercules = new Champion({name: 'Hercules', attack: 10, hitpoints: 70});
let monster = new Monster({name: 'Monster', attack: 8, hitpoints: 100});



let timer=setInterval(()=>{
  let randomNum=Math.random()>0.5?0:1;
//0-monster 1-champion

let healChanse=Math.random()>0.5?true:false;
let defenceChanse=Math.random()>0.5?true:false;

let enrageChanse=Math.random()>0.5?true:false;
let furyChanse=Math.random()>0.5?true:false;

let attacker, opponent;
    if(randomNum === 0) {
        attacker = monster;
        opponent = hercules;
    } else {
        attacker = hercules;
        opponent = monster;
    }

    if(attacker instanceof Champion) {
        if(defenceChanse) attacker.isDefence = true;
    }

    if(attacker instanceof Monster) {
        if(enrageChanse) attacker.enrage();
        if(furyChanse) attacker.fury();
    }

    attacker.fight(opponent);

},2000);
