import { a } from './data.js';
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
// console.log(a)

// init DB
let rice0 = [];
let rice1 = [];
let limited_rice0 = [];
let limited_rice1 = [];
let side = [];
let dessert = [];

for(let elem of a){
    let ty = elem.type;
    switch(ty){
        case "Rice0": // ご飯なし
        case "Rice1": // ご飯あり
        case "LimitedTime-Rice0": // 季節限定、ご飯なし
        case "LimitedTime-Rice1": // 季節限定、ご飯あり
        case "Rice0":
        case "Rice0":
        case "Rice0":
        
    }
}
const selectMenu = () => {
    let res = [];
    let riceFlag = getRandomInt(2);
    if (riceFlag === 0){

    }else{

    }
    // return 3 or 4 menu data
    return
}


function onRouteChanged() {
    const hash = window.location.hash;
    console.log(hash)
    const routerView = document.getElementById("root");

    const removeall = () => {
        while (routerView.firstChild) {
            routerView.removeChild(routerView.firstChild);
        }
    }

    if (!(routerView instanceof HTMLElement)) {
        throw new ReferenceError("No router view element available for rendering");
    }

    switch (hash) {
        case "#home":
            removeall();
            var tmp = document.querySelector("#toppage");
            var clone = document.importNode(tmp.content, true);
            console.log(clone);
            routerView.appendChild(clone);
            break;
        case "#stage1":
            removeall();
            var tmp = document.querySelector("#stage1page");
            var clone = document.importNode(tmp.content, true);
            console.log(clone);
            routerView.appendChild(clone);
            break;
        case "#stage2":
            removeall();
            var tmp = document.querySelector("#stage2page");
            var clone = document.importNode(tmp.content, true);
            console.log(clone);
            routerView.appendChild(clone);
            break;

        default:
            removeall()
            routerView.innerHTML = "<h1>404 - Page Not Found</h1>";
            break;
    }
}


window.addEventListener("hashchange", onRouteChanged);
window.addEventListener('DOMContentLoaded', onRouteChanged);
