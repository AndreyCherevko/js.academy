"use strict";
function getRecomendations(Rating = 0) {
  switch (Math.round(Number(Rating))) {
    case 0: {
      return "You need to specify rating";
    }
    case 1: {
      return "Awful";
    }
    case 2: {
      return "Badly";
    }
    case 3: {
      return "How they made that?";
    }
    case 4: {
      return "Wasted time";
    }
    case 5: {
      return "If you haven't other variants";
    }
    case 6: {
      return "Not bad";
    }
    case 7: {
      return "Good film";
    }
    case 8: {
      return "The best film";
    }
    case 9: {
      return "Awesome";
    }
    case 10: {
      return "Masterpiece";
    }
    default:
      return "You need to specify rating from 1 to 10";
  }
}

function play(duration, song, repeatPeriod) {
  duration = Math.round(Number(duration));
  repeatPeriod = Math.round(Number(repeatPeriod));

  if (!duration) {
    alert("Need to specify duration");
    return;
  } else if (!repeatPeriod) {
    alert("Need to specify repeat period");
    return;
  } else if (duration < repeatPeriod) {
    alert("Duration must be more then repeat period");
    return;
  } else if (typeof song != "string" || song === "") {
    alert("Need to specify song");
    return;
  }

  for (let i = 1; i < duration; i++) {
    console.log(i);
    if (i % repeatPeriod === 0) {
      console.log(song);
    }
  }
}

function transformString(str) {
  if (typeof str !== "string" || str === "") {
    alert("Need to specify string");
    return undefined;
  }

  let currentStr = str.trim();
  let result = currentStr[0];
  let indexOfLastSpace = currentStr.lastIndexOf(" ");

  for (let i = 1; i < currentStr.length; i++) {
    let nextChart =
      indexOfLastSpace < i ? currentStr[i].toUpperCase() : currentStr[i];
    result = result + "-" + nextChart;
  }

  return result;
}

function makeCard(typeOfCard, firstName, secondName) {
  if (typeof typeOfCard !== "string" || typeOfCard === "") {
    alert("Need to specify type of card");
    return;
  } else if (typeof firstName !== "string" || firstName === "") {
    alert("Need to specify first name of card holder");
    return;
  } else if (typeof secondName !== "string" || secondName === "") {
    alert("Need to specify second name of card holder");
    return;
  }

  let arrayOfAvailableYears = [30, 29, 38, 34];

  let yearOfCurrentCard = arrayOfAvailableYears[getRandomInt(4)];
  let monthOfCurrentCard = String(getRandomInt(12)).padStart(2, "0");
  let CVVOfCurrentCard = String(getRandomInt(1000)).padStart(3, "0");

  let result = {
    type: typeOfCard,
    name: firstName + " " + secondName,
    expire: monthOfCurrentCard + "/" + yearOfCurrentCard,
    cvv: CVVOfCurrentCard
  };

  return result;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function createFamily(wife, husband) {
  if (typeof wife !== "string" || wife === "") {
    alert("Need to specify wife");
    return;
  } else if (typeof husband !== "string" || husband === "") {
    alert("Need to specify husband");
    return;
  }

  let family = {
    wife: wife,
    husband: husband,
    children: [],
    makeChild: function(childName) {
      if (typeof childName !== "string" || childName === "") {
        alert("Need to specify children name");
        return;
      }

      this.children.push(childName);
    }
  };

  return family;
}
