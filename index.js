function scuberGreetingForFeet(ride){
  // Write your code here!
  if(ride <=400){
    const msg = 'This one is on me!';
    return msg;
  }
  else if(ride>=400 && ride <=2000){
    const msg = 'That will be twenty bucks.'
    return msg;
  }
  else if(ride>2000 && ride <2500){
    const msg = 'I will gladly take your thirty bucks.';
    return msg;
  }
  else {
    const msg = 'No can do.';
    return msg;
  }
}

function ternaryCheckCity(city){
  // Write your code here!
   return (city ==="NYC") ? "Ok, sounds good." : 'No go.' ;
}


function switchOnCharmFromTip(tip){
  // Write your code here!
  switch(tip){
    case "generous" : 
    return "Thank you so much.";
    case "not as generous" :
      return "Thank you.";
    default :
    return "Bye.";
  }
}

console.log(switchOnCharmFromTip("not as generous"));