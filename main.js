let btn = document.getElementById('btn');
let output = document.getElementById('outputtext');
let againButton = document.getElementById('againButton');
let ra9m = document.getElementById('ra9');
let gameover = document.getElementById('over');
let ganerr = document.getElementById('ganer');

let count = 9;
let number = [Math.floor(Math.random() * 100 )];
ra9m.textContent =10;
ra9m.style.color="#1e0429";


btn.addEventListener('click',function(){
    
   
    let input = document.getElementById('userInput').value;

    
    
    
    if (count==9 || count >= 0 )
  {

     ra9m.textContent = `${count--}`
  }
  if(count <0){
    gameover.innerHTML = "Game over";
    btn.style.display = "none";


  }

  console.log(count)

     if (input == number && !(count <7)){
        output.innerHTML = "You are ginie 😃";
        btn.style.display = "none";
        ganerr.textContent = `Congratulations, you won after  ${count+1} attempts`;
        
    }
     if (input == number && count <7){
        output.innerHTML = "You guessed right";
        btn.style.display = "none";
        ganerr.textContent = `Congratulations, you won after  ${count+1} attempts`;
        
    }else if(input < number){
        output.innerHTML = "You guessec too low!"
    };
    if(input > number){
        output.innerHTML = "You guessed too high!"
    }
    
})
againButton.addEventListener('click', function(){
    location.reload();
})