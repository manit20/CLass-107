Webcam.set({
    height: 300,
    width: 350,
    image_format: 'png',
    png_quality: 90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function takeSnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_image src="' + data_uri + '">';
    });
}

console.log("ml5 version: ", ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/w-8CLkfHu/model.json', Model_Loaded);

function Model_Loaded(){
    console.log("Model Loaded!");
}

function speak(){
    var synth = window.speechSynthesis;
    var speak_data_1 = "The first prediction is " + prediction_1;
    var speak_data_2 = "The second prediction is " + prediction_2;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
    synth.speak(utterThis);
}