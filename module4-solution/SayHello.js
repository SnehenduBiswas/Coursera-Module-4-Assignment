(function(window) {
    var hello_Speaker = new Object();
    var word = "Hello";
    hello_Speaker.speak = function(name) {
        console.log(word + " " + name);
    };
    window.hello_Speaker = hello_Speaker;
})(window);
