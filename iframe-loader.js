var makeIframe = document.createElement("iframe");
makeIframe.setAttribute("src", "http://localhost:3000");//Url of the React app
makeIframe.style.border = "none";
makeIframe.style.position = "absolute";
makeIframe.style.width = "500px";
makeIframe.style.height = "500px";
makeIframe.id = 'iframeToLoad'

var getRef = document.getElementById("div-id-to-insert-element-before");
var parentDiv = getRef.parentNode;
parentDiv.insertBefore(makeIframe, getRef);

function loadIFrame() {
	var iframe = document.getElementById('iframeToLoad').contentWindow;
	var message = "Iframe successfully loaded.";
	iframe.postMessage(message, '*'); //sending the message
	iframe.focus();
}