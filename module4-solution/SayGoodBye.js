(function(window) {
    var bye_Speaker = new Object();
    var Word = "Good Bye";
    bye_Speaker.speak = function speak(name) {
        console.log(Word + " " + name);
    };
    window.byeSpeaker = bye_Speaker;
})(window);
