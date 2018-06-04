var links = [];

function clearLinks(){
  links = [];
  links.splice(0,links.length);
}

function listLinks(){
  var listStr = "";
  for (var link in links){
      listStr = listStr + links[link] + "\n";
  }
  console.log(listStr);
}


addLink = function(info){
   var query = info.linkUrl;
   links.push(query);
};

var button = chrome.contextMenus.create({
title: "Add to link list",
contexts:["link"],  // ContextType
onclick: addLink // A callback function
});

console.log("Welcome to behind the scenes available stuff are addLink, listLinks, and clearLinks.");
