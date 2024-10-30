secret.addEventListener('click',function(){
    alert("hello");
})

//When the user presses the light_on button i want to replace the image with the version that has the light turned on//
lights_on.addEventListener('click',function(){
    console.log("Lights turned on");
    document.getElementById("lightbulb").src = "lightbulb_on.webp";
    document.getElementById("lights_on").style.display="none";
    document.getElementById("lights_off").style.display="initial";

    //Apply the "light" class to the body of the page//
    document.body.classList.toggle('light');
})

lights_off.addEventListener('click',function(){
    console.log("Lights turned off");
    document.getElementById("lightbulb").src = "lightbulb_off.webp";
    document.getElementById("lights_on").style.display="initial";
    document.getElementById("lights_off").style.display="none";
    document.body.classList.toggle('light');
})
//Beware of spelling, i wrote docutment and the img did not change until i corrected the spelling check//