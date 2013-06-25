function Controller() {
    function downloadMP3() {
        var xhr = Titanium.Network.createHTTPClient({
            onload: function() {
                MP3File.write(this.responseData);
                alert("ההורדה הסתיימה");
            },
            timeout: 1e4
        });
        xhr.open("GET", "http://previews.mboxltd.com/Content/MP3_192s/342841.mp3");
        xhr.send();
    }
    function playMP3() {
        if (MP3File.exists()) {
            sound.url = MP3File.nativePath;
            sound.play();
        } else alert("קובץ לא קיים");
    }
    function stopMP3() {
        sound.stop();
    }
    function deleteMP3() {
        if (MP3File.exists()) {
            MP3File.deleteFile();
            alert("הקובץ נמחק");
        } else alert("קובץ לא קיים");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.btnDownload = Ti.UI.createButton({
        title: "Download MP3",
        id: "btnDownload",
        top: "10"
    });
    $.__views.index.add($.__views.btnDownload);
    downloadMP3 ? $.__views.btnDownload.addEventListener("click", downloadMP3) : __defers["$.__views.btnDownload!click!downloadMP3"] = true;
    $.__views.btnPlay = Ti.UI.createButton({
        title: "Play MP3 Localy",
        id: "btnPlay",
        top: "60"
    });
    $.__views.index.add($.__views.btnPlay);
    playMP3 ? $.__views.btnPlay.addEventListener("click", playMP3) : __defers["$.__views.btnPlay!click!playMP3"] = true;
    $.__views.btnStop = Ti.UI.createButton({
        title: "Stop MP3 Localy",
        id: "btnStop",
        top: "110"
    });
    $.__views.index.add($.__views.btnStop);
    stopMP3 ? $.__views.btnStop.addEventListener("click", stopMP3) : __defers["$.__views.btnStop!click!stopMP3"] = true;
    $.__views.btnDeleteMP3 = Ti.UI.createButton({
        title: "Delete the file",
        id: "btnDeleteMP3",
        top: "160"
    });
    $.__views.index.add($.__views.btnDeleteMP3);
    deleteMP3 ? $.__views.btnDeleteMP3.addEventListener("click", deleteMP3) : __defers["$.__views.btnDeleteMP3!click!deleteMP3"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var MP3File = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, "1.mp3");
    var sound = Titanium.Media.createSound();
    $.index.open();
    __defers["$.__views.btnDownload!click!downloadMP3"] && $.__views.btnDownload.addEventListener("click", downloadMP3);
    __defers["$.__views.btnPlay!click!playMP3"] && $.__views.btnPlay.addEventListener("click", playMP3);
    __defers["$.__views.btnStop!click!stopMP3"] && $.__views.btnStop.addEventListener("click", stopMP3);
    __defers["$.__views.btnDeleteMP3!click!deleteMP3"] && $.__views.btnDeleteMP3.addEventListener("click", deleteMP3);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;