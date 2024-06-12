var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
function start(){
    document.getElementById("seevoice").innerHTML = "";
   recognition.start(); 
}
recognition.onresult = function(event){
    console.log(event);
    var content = event.results[0][0].transcript;
    document.getElementById("seevoice").innerHTML=content;
    console.log(content);
    if (content=="take my selfie") {
console.log("taking your selfie");
speak();        
    }
}
function speak() {
    var synth = window.speechSynthesis;
    var speak1 = "taking your selfie in 5 seconds";
    var utterthis = new SpeechSynthesisUtterance(speak1);
    synth.speak(utterthis);
    Webcam.attach(cams);
    setTimeout(function(){
        takeSnapshot();
        save();
    },5000
);

}


camera = document.getElementById("cams");
Webcam.set({

    width :  360,
    height :  250,
    image_format : "jpeg",
    jpeg_quality : 100

});

function takeSnapshot(){
    Webcam.snap(function(data_uri){
document.getElementById("selfiend").innerHTML='<img id="selfie" src="'+data_uri+'"/>';
    }
);     
}
function save(){
    link = document.getElementById("link");
    image = document.getElementById("selfie").src;
    link.href = image;
    link.click();
}
