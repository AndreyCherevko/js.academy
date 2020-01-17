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
  }

  for (let i = 1; i < duration; i++) {
    if (i > repeatPeriod && i % repeatPeriod == 1) {
      console.log(song);
    }
    console.log(i);
  }
}
