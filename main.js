// promise =   An object that manages asynchronous operations.
//             wrap a promise Object around {asynchronous code}
//             "I promise to return a value"
//             PENDING -> RESOLVED OR REJECTED
//             new Promise((resolve, reject) => {asynchronous code}) 

//DO THESE CHORES IN ORDER

//1. WALK THE DOG
//2. CLEAN THE KITCHEN
//3. TAKE OUT THE TRASH

const dogWalk = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
            resolve("Dog is walking"); // resolve the promise when the dog is done walking
    } else {
        reject ("Dog hasn't walked yet");
    }
});

const cleanKitchen = new Promise((resolve, reject) => {
    let kitchen = true;
    if (kitchen) {
        setTimeout(() => {
            resolve("Kitchen is cleaned"); // resolve the promise when the kitchen is done cleaning
          }, 1000);
    } else {
        reject("Kitchen has not been cleared yet")
    }

});

const trashOut = new Promise((resolve, reject) => {
    let trash = false;
    if (trash) {
        setTimeout(() => {
            resolve('Trash is out');
          }, 500);
    } else {
        reject('Trash has not been taken out yet');
    }
});

dogWalk
 .then(result => {
    console.log(result);
  })
 .catch(error => {
    console.log(error);
 })

setTimeout(() => {
    Promise.all ([dogWalk, trashOut])
 .then(result => {
    console.log('Both promises fufiled:', result);
  })
 .catch(error => {
    console.log('one of the promises failed:', error);
 })

}, 5000)

 cleanKitchen
 .then(result => {
    console.log(result);
    return result + "thoroughly";
  }) .then (function (result) {
    setTimeout (() => {
        console.log(result)
    }, 6000)

  })
 .catch(error => {
    console.log(error);
 })

trashOut
 .then(result => {
    console.log(result);
  })
 .catch(error => {
    console.log(error);
 })


console.log("This is a test")

//TRY, CATCH and FINALLY
function test(num1, num2) {
    try {
        if (typeof num1 === 'number') {
            if (typeof num2 === 'number') {
                console.log(num1 + num2);
            } else {
                {throw new Error("Second argument is not a number")};
            }
        } else {
            {throw new Error ("First argument is not a number")};
        }
    }
    catch (error) {
        console.log(`Error, ${error.message}`);
    }
    finally {
        setTimeout(() => {
            console.log("This is a finally run test;")
        }, 3000)
    }
}

test(7 , -7)


//PRACTICE QUESTIONS
//Create a Promise called myPromise that resolves with the message "Promise Resolved!" after 2 seconds. Log the result to the console using .then().
let myPromise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        setTimeout(() => {
            resolve("Promise Resolved!");
        }, 2000);
    }
})

myPromise.then((result) => {
    console.log(result);
})

//Create a Promise called myPromise that rejects with the message "Promise Rejected!" after 3 seconds. Log the error message to the console using.catch().

let myPromise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Promise Rejected!");
    }, 3000);
})

myPromise2.catch((error) => {
    console.log(error);
})

//Create a Promise called myPromise that resolves with the sum of two numbers after 1 second. The numbers should be passed as arguments to the Promise constructor. Log the result to the console using.then().

const num = (x1, x2) => {
    const totalNum = new Promise((resolve, reject) => {
        try {
            if (typeof x1 === 'number'){
                if (typeof x2 === 'number') {
                    resolve(x1 + x2);
                }
                else {
                    reject('second argument is not a number')
                }

            } else {
                {throw new Error('first argument is not a number')}
            }
        }
        catch (error) {
            reject(error.message);
        }
    })
    totalNum.then((result) => {
        console.log(`The final answer is ${result}`)
    })
    totalNum.catch((error) => {
        console.log('Error: ', error)
    })
}

num(16, 8)

//Create a Promise called myPromise that resolves with an array containing the numbers 1 through 5 after 1 second. Log the array to the console using.then().

let myPromise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([1, 2, 3, 4, 5]);
    }, 1000);
})

myPromise3.then((result) => {
    console.log(result);
})

let data = fetch("https://jsonplaceholder.typicode.com/users")
let newdata = data.then((response) => {
    let datalog = response.json()
    return datalog
})
newdata.then((datalog) => {
    console.log(datalog);
})

