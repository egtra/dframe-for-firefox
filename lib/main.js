var pageMod = require("sdk/page-mod");
var self = require("sdk/self");

pageMod.PageMod({
    include: /.*\.dframe/,
    contentScriptWhen: "ready",
    contentScriptFile: [
        self.data.url("jquery-2.1.1.min.js"),
        self.data.url("markdown.min.js"),
        self.data.url("dframe.js"),
    ]
});
