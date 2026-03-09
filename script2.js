const btn = document.getElementById("myBtn");
const input = document.getElementById("myInput");
const answer = document.getElementById("myAnswer");
btn.addEventListener("click", function () {
    let value = input.value;
    let arr = value.split("");
    arr.sort();
    let mymap = new Map();
    arr.forEach((x) => {
        if (mymap.has(x)) {
            mymap.set(x, mymap.get(x) + 1);
        }
        else {
            mymap.set(x, 1);
        }
    });
    let str = "";
    for (let [key, value] of mymap) {
        str += `${key}${value}`;
    }
    answer.innerText = str;
});
