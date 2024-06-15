"use strict";
/*                       Question # 1

Write a simple asynchronous TypeScript function fetchGreeting that returns a
greeting message after a 2-second delay using setTimeout.*/
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function fetchGreeting() {
    setTimeout(() => {
        console.log("Hey Aleeze👋");
    }, 2000);
}
fetchGreeting();
/*                          Question # 2
Write a function simulateTask that simulates a task by logging "Task started",
waits for 1 second, and then logs "Task completed". Use setTimeout for the delay.*/
function simulateTask() {
    console.log("Task started!");
    setTimeout(() => {
        console.log("Task completed!");
    }, 1000);
}
simulateTask();
/*                          Question # 3
Write a function fetchData that returns a Promise which resolves with the string
"Data fetched successfully!" after a delay of 1 second.*/
function fetchData1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data fetched successfully!");
        }, 1000);
    });
}
fetchData1().then((message) => {
    console.log(message);
});
/*                           Question # 4
Write a function fetchWithError that returns a Promise. It should randomly either
resolve with "Data fetched successfully!" or reject with "Data fetch failed!" after a
delay of 1 second. Handle the rejection using .catch */
function fetchWithError() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.5) {
                resolve("Data fetched successfully!");
            }
            else {
                reject("Data fetch failed!");
            }
        }, 1000);
    });
}
fetchWithError().then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});
/*                            Question # 5
Write a function execute Sequentially that executes two functions fetchData and
processData sequentially using Promises, and logs the results in the order they are
called */
let fetchData = new Promise((resolve, reject) => {
    resolve("Data Fetched successfully!");
});
let processData = new Promise((resolve, reject) => {
    resolve("Data processed successfully!");
});
function executeSequentially() {
    return __awaiter(this, void 0, void 0, function* () {
        let fetch = yield fetchData;
        console.log(fetch);
        let process = yield processData;
        console.log(process);
    });
}
executeSequentially();
