/** Creating a callback function */

const WaitForMe = (time, fnToCall) => {
  /** Check if time exists and its a number */
  if (time && Number.isInteger(time)) {
    /** setTimeout is a async function */
    setTimeout(() => {
      fnToCall(null, `I waited ${time / 1000} seconds`);
    }, time);
  } else if (time) {
    fnToCall(new Error("WTf!! What's wrong with you ?"));
  } else {
    fnToCall(new Error("Oh no! You didn't specify the time"));
  }
};

const printMsg = (error, msg) => {
  if (error) {
    console.error(error);
  } else {
    console.log(msg);
  }
};
/** Success */
WaitForMe(2500, printMsg);
/** Error */
WaitForMe("3000", printMsg);
/** Error */
WaitForMe(null, printMsg);
