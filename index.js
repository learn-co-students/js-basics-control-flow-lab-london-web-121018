// Write your code in this file!
function scuberGreetingForFeet(rideLength) {
  let response;

  if (rideLength <= 400) {
    response = 'This one is on me!';
  } else if (rideLength > 2000 && rideLength <= 2500) {
    response = 'I will gladly take your thirty bucks.'
  } else if (rideLength > 2500) {
    response = 'No can do.'
  };

  return response;
};

function ternaryCheckCity(city) {
  return city === 'NYC' ? 'Ok, sounds good.' : 'No go.'
};

function switchOnCharmFromTip(tip) {
  let response;

  switch(tip) {
    case 'generous':
      response = 'Thank you so much.';
      break;

    case 'not as generous':
      response = 'Thank you.';
      break;

    default:
      response = 'Bye.';
      break;
  };

  return response;
};
