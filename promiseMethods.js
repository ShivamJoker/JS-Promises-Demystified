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
  /** Returns all fulfilled promises but rejects immediately */
  //   try {
  //     const promises = await Promise.all([
  //       WaitForMe(1500),
  //       WaitForMe(2000),
  //       //   WaitForMe("22"),
  //     ]);
  //     console.log(promises);
  //   } catch (error) {
  //     console.error(error);
  //   }

  //   /** Will wait till all promises are fulfilled or rejected*/
  //   const promises = await Promise.allSettled([
  //     WaitForMe(1500),
  //     WaitForMe(),
  //     WaitForMe("22"),
  //   ]);
  //   console.log(promises);

  /** Returns whenever any of the promises is fullfilled or rejected */
  try {
    const promises = await Promise.race([
      WaitForMe(1500),
      WaitForMe(2000),
      //   WaitForMe("22"),
    ]);
    console.log(promises);
  } catch (error) {
    console.error(error);
  } finally {
    console.log("I don't care if you fail or pass, I will be executed");
  }
};
runAsync();
