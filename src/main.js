import { a } from './data.js';
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
// console.log(a)

// init DB
let rice = [];
let rice0 = [];
let rice1 = [];
let limited_rice0 = [];
let limited_rice1 = [];
let side = [];
let dessert = [];

for (let elem of a) {
    let ty = elem.type;
    switch (ty) {
        case "Rice": // ごはん
            rice.push(elem);
            break;
        case "Rice0": // ご飯なし
            rice0.push(elem);
            break;
        case "Rice1": // ご飯あり
            rice1.push(elem);
            break;
        case "LimitedTime-Rice0": // 季節限定、ご飯なし
            limited_rice0.push(elem);
            break;
        case "LimitedTime-Rice1": // 季節限定、ご飯あり
            limited_rice1.push(elem);
            break
        case "Side": // 副菜
            side.push(elem);
            break;
        case "Dessert": // デザート
            dessert.push(elem);
            break;

    }
}

console.log(rice)
console.log(rice0)
console.log(rice1)
console.log(limited_rice0)
console.log(limited_rice1)
console.log(side)
console.log(dessert)
// get random Menu
const selectMenu = () => {
    let res = [];
    let riceFlag = getRandomInt(2);
    let rareFlag = getRandomInt(10)
    if (riceFlag === 0) {
        if (rareFlag == 0) {
            // rare 10%
            res.push(limited_rice0[Math.floor(Math.random() * limited_rice0.length)]);
        } else {
            res.push(rice0[Math.floor(Math.random() * rice0.length)]);
        }
        res.push(side[Math.floor(Math.random() * side.length)]);
        res.push(dessert[Math.floor(Math.random() * dessert.length)]);

    } else {

        res.push(rice[Math.floor(Math.random() * rice.length)]);
        if (rareFlag == 0) {
            // rare 10%
            res.push(limited_rice1[Math.floor(Math.random() * limited_rice1.length)]);
        } else {
            res.push(rice1[Math.floor(Math.random() * rice1.length)]);
        }
        res.push(side[Math.floor(Math.random() * side.length)]);
        res.push(dessert[Math.floor(Math.random() * dessert.length)]);
    }
    // return 3 or 4 menu data
    return res;
}
const displayMenu = () => {
    let elem = selectMenu()
    console.log(elem)
    for(let i of elem){
        console.log(i.menu)
    }
}

function onRouteChanged() {
    const hash = window.location.hash;
    let menus = [];
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
            // document.querySelector('#img2').addEventListener('click', displayMenu)
            break;
        case "#stage2":
            removeall();
            menus = selectMenu();
            let sum = 0;
            for (let el of menus){
                console.log(el.price)
                sum += el.price;
            }
            console.log(sum)
            var tmp = document.querySelector("#stage2page");
            var clone = document.importNode(tmp.content, true);
            clone.querySelector('#card1').querySelector('.front').innerText = menus[0].menu;
            clone.querySelector('#card1').querySelector('.rarity').src = `./assets/${menus[0].rarity}.png`;
            clone.querySelector('#card2').querySelector('.front').innerText = menus[1].menu;
            clone.querySelector('#card2').querySelector('.rarity').src = `./assets/${menus[1].rarity}.png`;
            clone.querySelector('#card3').querySelector('.front').innerText = menus[2].menu;
            clone.querySelector('#card3').querySelector('.rarity').src = `./assets/${menus[2].rarity}.png`;
            if(menus.length === 4){
                clone.querySelector('#card4').querySelector('.front').innerText = menus[3].menu;
                clone.querySelector('#card4').querySelector('.rarity').src = `./assets/${menus[3].rarity}.png`;
            }else{
                clone.querySelector('#card4').classList.add("transparent")
            }
            clone.querySelector('#sumprice').innerText = `お値段 ${sum} 円！！！！`;
            console.log(clone);
            routerView.appendChild(clone);
            // document.querySelector('.front').addEventListener('click', flip);
            break;
        default:
            removeall()
            routerView.innerHTML = "<h1>404 - Page Not Found</h1>";
            break;
    }
}

const redirectToHome = () => {
    location.href = "#home"
}
window.addEventListener("hashchange", onRouteChanged);
window.addEventListener('DOMContentLoaded', redirectToHome);

const flip = (e) => {
    console.log(e.target)
}

