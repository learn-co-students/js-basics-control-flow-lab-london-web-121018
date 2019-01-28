function scuberGreetingForFeet(distance){
  let price;
  if (distance <= 400){
    price = "This one is on me!"
  } else if (distance <= 2500 && distance > 2000){
    price = 'I will gladly take your thirty bucks.'
  } else if (distance > 2500){
    price = 'No can do.'
  }
  return price;
}

function ternaryCheckCity(destination){
  let response
  destination === 'NYC' ?  response = "Ok, sounds good." : response = "No go.";
  return response
}

function switchOnCharmFromTip(tip){
  let response
  switch (tip){
    case 'generous':
      response = 'Thank you so much.'
      break;
    case 'not as generous':
      response = 'Thank you.'
      break;
    default:
      response = 'Bye.'
  }
  return response
}
