// Write your code in this file!
function scuberGreetingForFeet(distance){
  let price
  if (distance <= 400){
    price = "This one is on me!"
  } else if (distance < 2500 && distance > 2000){
    price = 'I will gladly take your thirty bucks.'
  }else if (distance > 2500){
    price = 'No can do.'
  }return price
}

function ternaryCheckCity(x){
  let reply;
  x == 'NYC' ? (reply = 'Ok, sounds good.') : (reply = "No go.")
  return reply
}


function switchOnCharmFromTip(tip){
  let reply
  switch (tip){
    case 'generous' :
      reply = 'Thank you so much.';
      break;
    case 'not as generous':
      reply = 'Thank you.'
      break;
    default:
      reply = 'Bye.'
  }
  return reply
}
