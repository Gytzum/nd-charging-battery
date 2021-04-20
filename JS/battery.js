
function battery(selector) {
    let HTML = '';
    const DOM = document.querySelector(selector);
    console.log(DOM);
    for (let i = 0; i < 1; i++) {
        HTML += `
                <div class= "container1">
                     <div class= "battery"></div>
                     <div class="cell"> </div>
                </div>
                <div class = "container2">
                   <div class = "celle"> </div>
                   <div class = "celle"> </div>
                   <div class = "celle"> </div>
                   <div class = "celle"> </div>
                   <div class = "celle"> </div>
                   <div class = "top"> </div>
                </div>`
    }
  DOM.innerHTML += HTML
  const batteryDOM = document.querySelector('.battery')

}

export {battery}