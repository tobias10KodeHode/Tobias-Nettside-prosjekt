function isEven(number) {
    return number % 2 === 0;
}

let s = "";
let a = [5, 8, 9, 0, 66, 18];

for (let i = 1; i < a.length; i++) {
    if (isEven(a[i]) && a[i - 1] % 3 === 0) {
        s += a[i] / 2;
    } else {
        s += a[i] * 2;
    }
}

let url = "https://nixus.no/" + s;
console.log(url);