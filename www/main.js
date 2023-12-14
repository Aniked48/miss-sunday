$(document).ready(function () {

    $('.text').textillate({
        loop: true,
        sync: true,
        
        in: {
            effect: "bounceIn",
        },
        out: {
            effect: "bounceOut",
        },

    });

    //siri
    var siriWave = new SiriWave({
        container: document.getElementById("siri-container"),
        width: 800,
        height: 200,
        style: "ios9",
        amplitude: "1",
        speed: "0.30",
        autostart: true
    });

    //siri msg

    $('.siri-message').textillate({
        loop: true,
        sync: true,
        
        in: {
            effect: "fadeInUp",
            sync: true,
        },
        out: {
            effect: "fadeOutUp",
            sync: true,
        },

    });

    //mic 
    $("#MicBtn").click(function () { 
        
       $("#Oval").attr("hidden", true);
       $("#siri-message").attr("hidden", false);
       
        
    });

});