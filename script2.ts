
const btn = document.getElementById("myBtn") as HTMLElement;
const input = document.getElementById("myInput") as HTMLInputElement;
const answer = document.getElementById("myAnswer") as HTMLElement;
btn.addEventListener("click", function () {
    let value: string = input.value;
    let arr: string[] = value.split("");
    arr.sort();
    let mymap = new Map<string, number>();
    arr.forEach((x: string) => {
        if (mymap.has(x)) {
            mymap.set(x, mymap.get(x)! + 1);
        } else {
            mymap.set(x, 1);
        }
    })
    let str = "";
    for (let [key, value] of mymap) {
        str += `${key}${value}`;
    }
    answer.innerText = str;
})