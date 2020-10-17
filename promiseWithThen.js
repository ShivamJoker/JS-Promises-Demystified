/** Creating a promise */

const WaitForMe = (time) => {
  /** Return a new promise */
  return new Promise((resolve, reject) => {
    /** Check if time exists and its a number */
    if (time && Number.isInteger(time)) {
      /** setTimeout is a async function */
      setTimeout(() => {
        resolve(`I waited ${time / 1000} seconds`);
      }, time);
    } else if (time) {
      reject("WTf!! What's wrong with you ?");
    } else {
      reject("Oh no! You didn't specify the time");
    }
  });
};

/** Using prmoise with then */
/** Sucess */
WaitForMe(3000)
  .then((e) => console.log(e))
  .catch((err) => console.error(err));

/** Reject */
WaitForMe("3000")
  .then((e) => console.log(e))
  .catch((err) => console.error(err));

/** Reject */
WaitForMe()
  .then((e) => console.log(e))
  .catch((err) => console.error(err));
