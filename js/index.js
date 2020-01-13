"use strict";
function getRecomendations(Rating = 0) {
  switch (Number(Rating)) {
    case 1:
      alert("Awful");
      break;
    case 2:
      alert("Badly");
      break;
    case 3:
      alert("How they made that?");
      break;
    case 4:
      alert("Wasted time");
      break;
    case 5:
      alert("If you haven\'t other variants");
      break;
    case 6:
      alert("Not bad");
      break;
    case 7:
      alert("Good film");
      break;
    case 8:
      alert("The best film");
      break;
    case 9:
      alert("Awesome");
      break;
    case 10:
      alert("Masterpiece");
      break;
    default:
      alert("You need to specify rating");
  }
}
