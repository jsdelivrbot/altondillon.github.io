document.getElementById('go').onclick = function() {
    var inputText = $('#text-input').val();
    var sayings = ["yo", "dawg", "my nigga", "mofo", "bitch", "ho"];
    var thugifiedText = inputText + ", " + sayings[Math.floor(Math.random() * sayings.length)];
    document.getElementById('output').innerHTML = thugifiedText;
};
