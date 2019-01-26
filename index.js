// Write your code in this file!

function scuberGreetingForFeet(someValue) {
    let valTrip = 0;
    
    if (someValue < 400) {
        valTrip = 'This one is on me!';
    } else if (someValue > 2000 && someValue < 2500) {
        valTrip = 'I will gladly take your thirty bucks.';
    } else {
        valTrip = 'No can do.'
    };

    return valTrip
};

function ternaryCheckCity(city) {
    let aknowledge = "none";

    (city === "NYC") ? (aknowledge = "Ok, sounds good.") : (aknowledge = "No go.") ;

    return aknowledge;
};

function switchOnCharmFromTip(tip) {
    let charm = "none";

    switch (tip) {
        case "generous":
            charm = "Thank you so much." 
            break;
        case 'not as generous':
            charm = "Thank you."
            break
        default:
            charm = "Bye."
            break;
    };
    return charm
};
