//your JS code here. If required.
let appname = window.navigator.appName;
let version = window.navigator.appVersion;

let divElement = document.createElement("div");
divElement.id = "browser-info";

divElement.innerHTML = "You are using "+appname+" version "+version;


document.body.appendChild(divElement);