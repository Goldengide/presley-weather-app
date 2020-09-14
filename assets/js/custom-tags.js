
function createCustomTagProto(shadowElement) {
    currentTime = new Date();
    console.log(currentTime);
    function normalize(digit) {
        digit = '' + digit;
        if (digit.length == 1) {
            digit = '0' + digit;
        }
        return digit;
    }
    let templateId = '#' + shadowElement + "-template";
    let template = document.querySelector(templateId);
    let shadowRoot = document.querySelector(shadowElement).attachShadow({ mode: "open" });
    // let shadowRoot = document.querySelector(shadowElement);
    cloned = document.importNode(template.content, true);
    shadowRoot.appendChild(cloned);

    setInterval(function () {
        clonewatch = document.importNode(template.content.childNodes[3], true);
        currentTime = new Date();
        clonewatch.querySelector('.sec').innerText = normalize(currentTime.getSeconds());
        clonewatch.querySelector('.min').innerText = normalize(currentTime.getMinutes());
        clonewatch.querySelector('.hour').innerText = normalize(currentTime.getHours());
        clonewatch.querySelector('#todays-date').innerText = `${currentTime.toDateString()}`;
        shadowRoot.replaceChild(clonewatch, shadowRoot.childNodes[3]);

    }, 1000);
    // shadowRoot = null;



}



// createCustomTag('digital-watch');
// createCustomTag('weather-info');
// can I extend a shadow DOM functionality

let DigitalWatchProto = Object.create(HTMLElement.prototype);
DigitalWatchProto.createdCallback = function () {
    createCustomTagProto('digital-watch');
}
document.registerElement('digital-watch', {
    prototype: DigitalWatchProto
});

// let WeatherInfo = Object.create(HTMLElement.prototype);
document.registerElement('weather-info')

