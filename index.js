function distanceFromHqInBlocks(someValue) {
    
    return (Math.abs(someValue - 42));
  }

function distanceFromHqInFeet(someValue) {
    distanceFromHqInBlocks(someValue);
    return (distanceFromHqInBlocks(someValue)* 264);
}

function distanceTravelledInFeet(start, destination) {
    return (Math.abs(start-destination)*264);
}

function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start, destination);
    let result;
    
    if (distance <= 400) {
        result = 0;
    } else if (distance >400 && distance <=2000) {
        result = 2.56;
    } else if (distance >2000 && distance <=2500) {
        result = 25;
    } else if (distance >2500) {
        return 'cannot travel that far';
    }

    return result;
}
