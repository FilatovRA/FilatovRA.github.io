$(function(){
function launchTyping(){
    var options = {
        strings: ["Hello, my name is Roman,\nthis is my personal page."],
        typeSpeed: 40,
         startDelay: 3000,
      }
      var typed = new Typed(".selfTypingText", options);
}
    launchTyping()
})
