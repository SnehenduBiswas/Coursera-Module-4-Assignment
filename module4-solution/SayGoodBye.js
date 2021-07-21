(function(window) {
    var bye_Speaker = new Object();
    var word = "Good Bye";
    bye_Speaker.speak = function speak(name) {
        console.log(word + " " + name);
    };
    window.bye_Speaker = bye_Speaker;
})(window);
