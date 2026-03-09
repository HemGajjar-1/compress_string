const btn = document.getElementById("myBtn");
btn.addEventListener("click", function () {
    let myvalue = document.getElementById("myInput").value;
    let arr = myvalue.split("");
    arr.sort()
    let mymap = new Map();
    arr.forEach((x) => {
        if (mymap.has(x)) {
            mymap.set(x, mymap.get(x) + 1);
        } else {
            mymap.set(x, 1);
        }
    })
    let ans = "";
    for (let [key, value] of mymap) {
        ans += `${key}${value}`;
    }
    document.getElementById("myAnswer").innerText = ans;
})