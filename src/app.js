import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
let pronoun = ['the', 'our'];
    let adj = ['great', 'big'];
    let noun = ['jogger', 'racoon'];

    const button = document.getElementById('btn-generate');
    const domainList = document.getElementById('domain-list');
    
    button.addEventListener('click', () => {
        domainList.innerHTML = '';
        for (let p of pronoun) {
        for (let a of adj) {
        for (let n of noun) {

                  let domainName = `${p}${a}${n}.com`;
                let li = document.createElement('li');
                li.innerText = domainName;
                domainList.appendChild(li);
                console.log(domainName);
                }
            }
        }
    });
};
