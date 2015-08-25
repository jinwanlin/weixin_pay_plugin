// var buttons = require('sdk/ui/button/action');
// var tabs = require("sdk/tabs");
//
// var button = buttons.ActionButton({
//   id: "mozilla-link",
//   label: "Visit Mozilla",
//   icon: {
//     "16": "./icon-16.png",
//     "32": "./icon-32.png",
//     "64": "./icon-64.png"
//   },
//   onClick: handleClick
// });
//
// function handleClick(state) {
//   //tabs.open("http://www.mozilla.org/");
//   loadScript("www.foo.com/a.js");
// }


// var self = require("sdk/self");
//
// var button = require("sdk/ui/button/action").ActionButton({
//   id: "style-tab",
//   label: "Style Tab",
//   icon: "./icon-16.png",
//   onClick: function() {
//     require("sdk/tabs").activeTab.attach({
//       // contentScriptFile: self.data.url("jinjiankuaixian.js")
// 		contentScriptFile: [self.data.url('jquery-1.11.1.js'),self.data.url('jinjiankuaixian.js')
//                           ]
//     });
//   }
// });

// Import the page-mod API
var pageMod = require("sdk/page-mod");
// Import the self API
var self = require("sdk/self");
 
// Create a page mod
// It will run a script whenever a ".org" URL is loaded
// The script replaces the page contents with a message
pageMod.PageMod({
	include: "*.weixin.qq.com",
  	contentScriptFile: [self.data.url('jquery-1.11.1.js'),self.data.url('jinjiankuaixian.js')]
});