import { a } from './data.js';

console.log(a)


function onRouteChanged() {
    const hash = window.location.hash;
    console.log(hash)
    const routerView = document.getElementById("root");

    if (!(routerView instanceof HTMLElement)) {
        throw new ReferenceError("No router view element available for rendering");
    }

    switch (hash) {
        case "#home":
            let tmp = document.querySelector("#toppage");
            var clone = document.importNode(tmp.content, true);
            console.log(clone);
            routerView.appendChild(clone);
            document.querySelector("#img").addEventListener("click", routeToStage1);
            break;

        case "#about":
            routerView.innerHTML = "<h1>About page</h1>";
            break;
        default:
            routerView.innerHTML = "<h1>404 - Page Not Found</h1>";
            break;
    }
}

function routeToStage1() {
    const hash = "#stage1";
    console.log(hash)
    const routerView = document.getElementById("root");

    if (!(routerView instanceof HTMLElement)) {
        throw new ReferenceError("No router view element available for rendering");
    }

    switch (hash) {
        case "#home":
            let tmp = document.querySelector("#toppage");
            var clone = document.importNode(tmp.content, true);
            console.log(clone);
            routerView.appendChild(clone);
            
            break;

        case "#about":
            routerView.innerHTML = "<h1>About page</h1>";
            break;
        default:
            routerView.innerHTML = "<h1>404 - Page Not Found</h1>";
            break;
    }
}

window.addEventListener("hashchange", onRouteChanged);
window.addEventListener('DOMContentLoaded', onRouteChanged);
