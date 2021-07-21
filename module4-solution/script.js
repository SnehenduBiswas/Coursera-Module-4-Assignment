/*
Assignment 4 Solution:
Expected output:
Hello Cristiano
Good Bye Jonas
Good Bye Jerry
Good Bye James
Hello Pavon
Hello Fred
Hello Hulk
Hello Martinez
Hello Larson
Good Bye Jimmy
*/

(function() {
    var names = ["Cristiano", "Jonas", "Jerry", "James", "Pavon", "Fred", "Hulk", "Martinez", "Larson", "Jimmy"];
    for (var i = 0; i < names.length; i++) {
        var firstLetter = names[i].charAt(0).toLowerCase();
        if (firstLetter === 'j') {
            bye_Speaker.speak(names[i]);
        } else {
            hello_Speaker.speak(names[i]);
        }
    }
})();
