(function(window) {
    var bye_Speaker = new Object();
    var Word = "Good Bye";
    bye_Speaker.speak = function speak(name) {
        console.log(Word + " " + name);
    };
    window.bye_Speaker = bye_Speaker;
})(window);
