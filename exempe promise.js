let d = Math.random();
console.log(d);
let iFirst = [];

const p3 = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            console.log(2222222222222);
            res(iFirst.push("p3"));
        }, 3000);
    })
}

const p1 = () => {
    return new Promise((res, rej) => {
        console.log(d);
        const a = 100;
        const b = 70;
        const c = a + b + d;
        res(c)
    })
        .then((c) => {
            console.log(c)
            console.log(d)
            return iFirst.push("p1")
        })
}

const p2 = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            console.log(2222222222222);
            res(iFirst.push("p2"));
        }, 5000);
    })
}

// Promise.race([p1(), p2()]).then(result => {
//     console.log(result);
//     console.log(iFirst);
// });

Promise.all([ p2(), p3(), p1()]).then(result => {
    console.log(result)
    console.log(iFirst);
});
