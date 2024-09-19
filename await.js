


async function time() {
    const large = 999999999;
    let someVal = 0;
    for (let i = 0; i < large; i++) {
        someVal += i*i
    }
    return someVal;
}


async function main() {
    let theVal = await time();
    console.log("async awaited: ", theVal)
}

main()
console.log("Hello, World!")
const mod = (n,m) => (n % m + m) % m

let c = -1
console.log("mod  : ", mod(c,3))
console.log("trans: ", (-c - 1) * 100)
console.log("-c -1: ", -c - 1)



// 0,1,2,3,4,5
//