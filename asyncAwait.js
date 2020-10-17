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

/** Using prmoise with try catch */
const runAsync = async () => {
  /** Success */
  try {
    const msg = await WaitForMe(3000);
    console.log(msg);
  } catch (error) {
    console.error(error);
  }
  /** WTF Error */
  try {
    const msg = await WaitForMe("3000");
    console.log(msg);
  } catch (error) {
    console.error(error);
  }
  /** Time Error */
  try {
    const msg = await WaitForMe();
    console.log(msg);
  } catch (error) {
    console.error(error);
  }
};
runAsync();
