var MP3File = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory,'1.mp3');
var sound = Titanium.Media.createSound();

function downloadMP3(e) {  
	    var xhr = Titanium.Network.createHTTPClient({
		onload: function() {
	        MP3File.write(this.responseData); // write to the file
	        alert("ההורדה הסתיימה");	        
	    },
	    timeout: 10000
	});
	xhr.open('GET','http://previews.mboxltd.com/Content/MP3_192s/342841.mp3');
	xhr.send();
}

function playMP3(e) {
	if (MP3File.exists()) {
		sound.url=MP3File.nativePath; 
	    sound.play();
   	} else {
   		alert("קובץ לא קיים");
   	}
}

function stopMP3(e) {
	sound.stop();
}

function deleteMP3(e) {
	if (MP3File.exists()) {
		MP3File.deleteFile();
		alert("הקובץ נמחק");
	}
	else {
		alert("קובץ לא קיים");
	}
}

$.index.open();
