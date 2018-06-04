var bgPage = chrome.extension.getBackgroundPage();

function delLast(){
  bgPage.links.pop();
  refresh();
}

function clearLinks(){
  bgPage.clearLinks();
  refresh();
}

function refresh(){
  var a = bgPage.links;
  document.getElementById('urls').innerHTML = "";

  for(var i in a){
      var par = document.createElement("tr");
      var node = document.createElement("td");
      var textnode = document.createTextNode(a[i]);
      node.appendChild(textnode);
      par.appendChild(node);
      document.getElementById("urls").appendChild(par);
    }
}

window.onload = function(){
  document.getElementById('clear').onclick = clearLinks;
  document.getElementById('refresh').onclick = refresh;
  document.getElementById('delete').onclick = delLast;

  refresh();
}
