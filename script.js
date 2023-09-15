//your JS code here. If required.
const appName = window.navigator.appName;
const appVersion = window.navigator.appVersion;

const div = document.createElement('div');

div.id  = "browser-info";

let str  = `You are using ${appName} version ${appVersion}.`;

div.innerHTML = str;