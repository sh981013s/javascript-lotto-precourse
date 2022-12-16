const MainController = require("./controller/MainController");

class App {
  play() {
    new MainController().initializeGame();
  }
}

new App().play();

module.exports = App;
