function scuberGreetingForFeet(feet){
  if (feet <= 400) 
  return "This one is on me!";
  else if (feet < 2500 && 2000) 
  return "I will gladly take your thirty bucks.";
  else if (feet > 2500) return "No can do.";
}

function ternaryCheckCity(city) {
  // const city = 'NYC' 
  const approval = (city === 'NYC') ? "Ok, sounds good.": "No go.";
  return(approval);
  

  
}
 



function switchOnCharmFromTip(amountTipped) {

  let reaction;

 switch(amountTipped) {

    case 'generous':
        reaction = "Thank you so much.";
        break;
    case 'not as generous': 
        reaction = "Thank you."
        break;
    default:
        return "Bye."
  
}
return(reaction);
 }
