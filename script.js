var app = document.getElementById('typewriter2');

var customNodeCreator = function(character) {
    return document.createTextNode(character);
}

var typewriter = new Typewriter(app, {
    loop: true,
    delay: 75,
    onCreateTextNode: customNodeCreator,
});

typewriter
    .typeString('CODING STUDENT.')
    .pauseFor(500)
    .deleteAll()
    .typeString('UI DESGINER.')
    .pauseFor(500)
    .deleteAll()
    .typeString('WEBSITE DEVELOPER.')
    .pauseFor(500)
    .start();
