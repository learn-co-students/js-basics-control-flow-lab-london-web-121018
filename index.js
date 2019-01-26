// Write your code in this file!
function scuberGreetingForFeet(number) {
  let tripFare
  if (number < 400) {
    tripFare = 'This one is on me!';
  } else if (number > 2000 && number < 2499) {
    tripFare = 'I will gladly take your thirty bucks.';
  } else if (number > 2499) {
    tripFare = 'No can do.';
  }
  return tripFare
}

function ternaryCheckCity(cityName) {
  let response
  cityName !== 'NYC' ? (response = 'No go.') : (response = 'Ok, sounds good.')
  return response
}

function switchOnCharmFromTip(generosity) {
  let response

  switch (generosity) {
      case 'generous':
        response = 'Thank you so much.'
           break;
      case 'not as generous':
        response = 'Thank you.'
           break;
      default:
        response = 'Bye.'
           break;
    }
    return response
}
