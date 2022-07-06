var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("textbox").innerHTML="";
    recognition.start();
}

     
recognition.onresult = function(event)
{
    console.log(event);

    var Content = event.results[0] [0].transcript;

   document.getElementById("textbox").innerHTML = Content;
    console.log(Content);
    if(Content == "selfie")
    {
        console.log("taking selfie ---");
        speak();
    }
    
}

function speak(){
    var synth = window.speechSynthesis;
    synth.speak(utterThis); 
    Webcam.attach(camera);
    
    setTimeout(function()
    {
        img_id = "selfie1";
        take_snapshot();
        speak_data = "Taking your selfie in 10 seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        save();
    }, 5000);

    setTimeout(function()
    {
        img_id = "selfie2";
        take_snapshot();
        speak_data = "Taking your second selfie in 10 seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        save();
    }, 10000);

    setTimeout(function()
    {
        img_id = "selfie3";
        take_snapshot();
        speak_data = "Taking your last selfie in 10 seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        save();
    }, 15000);
    
}
    

    
        
Webcam.set({
    width:360,
    height:250,
    image_format : "png",
    png_quality: 90
});
camera= document.getElementById("camera");

function take_snapshot()
{
    Webcam.snap(function(data_uri){
        if(img_id =="myselfie1"){
            document.getElementById("result1").innerHTML = '<img id="myselfie1" src="'+data_uri+'"/>';
        }

        if(img_id =="myselfie2"){
            document.getElementById("result2").innerHTML = '<img id="myselfie2" src="'+data_uri+'"/>';
        }

        if(img_id =="myselfie3"){
            document.getElementById("result3").innerHTML = '<img id="myselfie3" src="'+data_uri+'"/>';
        }
        
    });
}

function save()
{
    link = document.getElementById("link");
    image = document.getElementById("selfie_image").src;
    link.href = image;
    link.click();
}