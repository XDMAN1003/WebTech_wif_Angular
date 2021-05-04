//JavaScript
var sendBtn = document.getElementById("sendButton");
var senderBtn = document.getElementById("senderActive");
var receiverBtn = document.getElementById("receiverActive");
var sBox = document.getElementById("senderBox");
var rBox = document.getElementById("receiverBox");





sendBtn.addEventListener("click", function() {
    var msg = document.getElementById("message").value;
    var file = document.getElementById("attachment").value;
    document.getElementById("chatBox").innerHTML += "\n" + msg;
    document.getElementById("chatBox2").innerHTML += "\n" + msg;
    document.getElementById("message").value = "";
    if(file){
        var fileName = file.split(/(\\|\/)/g).pop();
        document.getElementById("chatBox").innerHTML += "\nFile uploaded: " +fileName;
        document.getElementById("chatBox2").innerHTML += "\nFile uploaded: " +fileName;
    }
});

senderBtn.addEventListener("click", function() {
    sBox.style.display = "block";
    rBox.style.display = "none";
    senderBtn.style.backgroundColor = "blue";
    receiverBtn.style.backgroundColor = "skyblue";
});

receiverBtn.addEventListener("click", function() {
    sBox.style.display = "none";
    rBox.style.display = "block";
    senderBtn.style.backgroundColor = "skyblue";
    receiverBtn.style.backgroundColor = "blue";
});




//Jquery
var sendBtnJq = $('#sendButtonJq');
sendBtnJq.on('click', function() {
    var msg = $('#message').val();
    $('#chatBox').append("\n");
    $('#chatBox').append(msg);
    $('#chatBox2').append("\n");
    $('#chatBox2').append(msg);
    $('#message').val("");
});
