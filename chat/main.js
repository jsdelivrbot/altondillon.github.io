var config = {
    apiKey: "AIzaSyBmW66N1xtmq8E8THYTSHBm3zr4Ga53lYA",
    authDomain: "chat-app-19cd6.firebaseapp.com",
    databaseURL: "https://chat-app-19cd6.firebaseio.com",
    storageBucket: "chat-app-19cd6.appspot.com",
    messagingSenderId: "524462547187"
  };
  firebase.initializeApp(config);

var chatData = firebase.database().ref();

function pushMessage(event) {
    if (event.keyCode == 13) {
        var name =$('#nameInput').val();
        var text =$('#messageInput').val();
        chatData.push({name: name, text: text});
        $('#messageInput').val('');
    }
}

chatData.on("child_added", showMessage);

function showMessage(msg) {
    var message = msg.val();
    var messageSender = message.name;
    var messageContent = message.text;

    var messageE1 = $("<div/>").addClass("message");
    var senderEl = $("<span/>").text(messageSender + ": ");
    var contentEl = $("<span/>").text(messageContent);

    messageE1.append(senderEl);
    messageE1.append(contentEl);
    $('#messages').append(messageE1);
}

$('#messageInput').keypress(pushMessage);

