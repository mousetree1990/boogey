
 let storyKey = 0;
 let potion = 10;
 let storePotion = 5;
 let confirmPotion = 0;
 let inventoryPotion = 0;
 let key = 30;
 let storeKey = 1;
 let confirmKey = 0;
 let inventoryKey = 0;
 let rope = 20;
 let storeRope = 1;
 let confirmRope = 0;
 let inventoryRope = 0;
 let gold = 50;
 let confirmTotalGold = 0;
 let shopGold = 0;
 let attack = 10;
 let defense = 10;
 let hp = 5;

 let gate1 = 0;
 let gate2 = 0;
 let gate3 = 0;

 let shopDisplay = document.getElementById('#store');


 





 function start(){
    document.querySelector('#innerStoryText').innerHTML = 'Hello there traveler! I heard you are going into that old haunted house to banish a Boogey demon. I have a few things for sale that might come in handy if you are interested. Step Inside!';
    document.querySelector('#storeItem1').innerHTML = `Potion (${potion} GP) Available (${storePotion})`;
    document.querySelector('#storeItem2').innerHTML = `Key (${key} GP) Available (${storeKey})`;
    document.querySelector('#storeItem3').innerHTML = `Rope (${rope} GP) Available (${storeRope})`;
    document.querySelector('#buyButton1').innerHTML = "Buy";
    document.querySelector('#buyButton2').innerHTML = "Buy";
    document.querySelector('#buyButton3').innerHTML = "Buy";
    document.querySelector('#buyConfirmButton').innerHTML = "Confirm";
    document.querySelector('#totalCost').innerHTML = `Total Cost (${confirmTotalGold}GP)`;
    document.querySelector('#inventoryTitle').innerHTML = `Inventory`;
    document.querySelector('#gold').innerHTML = `Gold: (${gold})`;
    document.querySelector('#attack').innerHTML = `Atk: (${attack})`;
    document.querySelector('#defense').innerHTML = `Def: (${defense})`;
    document.querySelector('#hp').innerHTML = `HP: (${hp})`;
    document.querySelector('#exit').innerHTML = 'Exit';



    



    
 }
 
 function buyPotion(){

   if(gold < 10){
      gate1 = 1;
    }
   
      if(gate1 == 0){
         storePotion = storePotion -1;
         confirmPotion = confirmPotion + 1;
         confirmTotalGold = confirmTotalGold + 10;
         gold = gold - 10;  
         document.querySelector('#totalCost').innerHTML = `Total Cost (${confirmTotalGold}GP)`;
         document.querySelector('#storeItem1').innerHTML = `Potion (${potion} GP) Available (${storePotion})`;
         document.querySelector('#confirmItem1').innerHTML = `Potion (${confirmPotion})`;

         
     
     
            if (storePotion <= 0 ){
            storePotion = 0;
            document.querySelector('#storeItem1').innerHTML = `Potion (${potion} GP) Available (${storePotion})`;
            document.querySelector('#confirmItem1').innerHTML = `Potion (${confirmPotion})`;
  
               if (confirmPotion >= 5){
               confirmPotion = 5;
               document.querySelector('#confirmItem1').innerHTML = `Potion (${confirmPotion})`;
               }
    
               if(storePotion <= 0){
               inventoryPotion = inventoryPotion;
               gate1 = 1;
               document.querySelector('#confirmItem1').innerHTML = `Potion (${confirmPotion})`;
               }
         
            }
         } 
    
    
    }
    

 

 function buyKey(){
    
   if(gold < 30){
      gate2 = 1;
    }

    if(gate2 == 0){
      storeKey = storeKey - 1;
      confirmKey = confirmKey + 1;
      confirmTotalGold = confirmTotalGold + 30;
      gold = gold - 30;
       
       
      document.querySelector('#totalCost').innerHTML = `Total Cost (${confirmTotalGold}GP)`;
    document.querySelector('#storeItem2').innerHTML = `Key (${key} GP) Available (${storeKey})`;
    document.querySelector('#confirmItem2').innerHTML = `Key (${confirmKey})`;

       if (storeKey <= 0){
       storeKey = 0;
       inventoryKey = inventoryKey;
       gate2 = 1;
       document.querySelector('#storeItem2').innerHTML = `Key (${key} GP) Available (${storeKey})`;
        
       } 

       if (confirmKey >= 1){
          confirmKey = 1;
          document.querySelector('#confirmItem2').innerHTML = `Key (${confirmKey})`;
         }
    }
    

    
 }

 function buyRope(){
   if(gold < 20){
      gate3 = 1;
    }
    if(gate3 == 0){
    storeRope = storeRope - 1;
    confirmRope = confirmRope + 1;
    confirmTotalGold = confirmTotalGold + 20;
    gold = gold - 20;
    document.querySelector('#storeItem3').innerHTML = `Rope (${rope} GP) Available (${storeRope})`;
    document.querySelector('#confirmItem3').innerHTML = `Rope (${confirmRope})`;
    document.querySelector('#totalCost').innerHTML = `Total Cost (${confirmTotalGold}GP)`;
    
    if (storeRope <= 0){
      gate3 = 1;
      storeRope = 0;
      document.querySelector('#storeItem3').innerHTML = `Rope (${rope} GP) Available (${storeRope})`;
    }

    if (confirmRope >= 1){
      gate3 = 1;
      confirmRope = 1;
      document.querySelector('#confirmItem3').innerHTML = `Rope (${confirmRope})`;
    }
    }
 }

 function confirmButton(){
     
       if(confirmPotion >= 1 & confirmPotion < 2){
          inventoryPotion = inventoryPotion + 1;
          document.querySelector('#inventoryItem1').innerHTML = `Potion (${inventoryPotion})`;
          confirmPotion = 0;
          document.querySelector('#confirmItem1').innerHTML = ``;
       }

       if(confirmPotion >= 2 & confirmPotion < 3){
          inventoryPotion = inventoryPotion + 2;
          document.querySelector('#inventoryItem1').innerHTML = `Potion (${inventoryPotion})`;
          confirmPotion = 0;
          document.querySelector('#confirmItem1').innerHTML = ``;
       }

       if(confirmPotion >= 3 & confirmPotion < 4){
          inventoryPotion = inventoryPotion + 3;
          document.querySelector('#inventoryItem1').innerHTML = `Potion (${inventoryPotion})`;
          confirmPotion = 0;
          document.querySelector('#confirmItem1').innerHTML = ``;
       }

       if(confirmPotion >= 4 & confirmPotion < 5){
          inventoryPotion = inventoryPotion + 4;
          document.querySelector('#inventoryItem1').innerHTML = `Potion (${inventoryPotion})`;
          confirmPotion = 0;
          document.querySelector('#confirmItem1').innerHTML = ``;
       }

       if(confirmPotion >= 5 & confirmPotion < 6){
          inventoryPotion = inventoryPotion + 5;
          document.querySelector('#inventoryItem1').innerHTML = `Potion (${inventoryPotion})`;
          confirmPotion = 0;
          document.querySelector('#confirmItem1').innerHTML = ``;
       }

       if(storePotion <= 0){
          inventoryPotion = inventoryPotion;
          confirmPotion = 0;
          document.querySelector('#inventoryItem1').innerHTML = `Potion (${inventoryPotion})`;
       }

       if(confirmKey >= 1 & confirmKey < 2){
          inventoryKey = inventoryKey + 1;
          document.querySelector('#inventoryItem2').innerHTML = `Key (${inventoryKey})`;
          confirmKey = 0;
          document.querySelector('#confirmItem2').innerHTML = ``;
       }

       if(confirmRope >= 1 & confirmRope < 2){
         inventoryRope = inventoryRope + 1;
         document.querySelector('#inventoryItem3').innerHTML = `Rope (${inventoryRope})`;
         confirmRope = 0;
         document.querySelector('#confirmItem3').innerHTML = ``;
      }

      document.querySelector('#gold').innerHTML = `Gold: (${gold})`;

      
 }


 function toggle() {
    let toggle = document.getElementById("store");
    let toggleEnter = document.getElementById("enterButton");
    if (toggle.style.display === "flex") {
     toggle.style.display = "none";
    } else {
     toggle.style.display = "flex";
    }

    if(toggleEnter.style.display === "none"){
      toggle.style.display = "flex";
    } else {
      toggleEnter.style.display = "none";
    }

    document.querySelector('#innerStoryText').innerHTML = "I don't have a huge selection right now but what do you expect?! This is just a demo!"
 }

 



 