// Write your code in this file!
function scuberGreetingForFeet(someValue) {
  if (someValue <= 400) {
    return 'This one is on me!';
  }
  else if (someValue > 2000 && someValue < 2500) {
    return 'I will gladly take your thirty bucks.';
  } else if (someValue > 2500){
    return 'No can do.';
  }
};

function ternaryCheckCity(city) {
  if (city === "NYC") {
    return 'Ok, sounds good.';
  } else {
    return 'No go.';
  }
};

function switchOnCharmFromTip(tip) {
if (tip === 'generous') {
  return "Thank you so much.";
} else if (tip === 'not as generous') {
  return 'Thank you.'
} else {
  return 'Bye.'
}
};
