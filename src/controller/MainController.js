const LottoGameController = require("./LottoGameController");
const UserController = require("./UserController");
const InputView = require("../view/InputView");

class MainController {
  #LottoGameController;
  #UserController;

  constructor() {
    this.#LottoGameController = new LottoGameController(this);
    this.#UserController = new UserController(this);
  }

  processUserPriceInput(userInputPrice) {
    this.#UserController.processUserInput(+userInputPrice);
  }

  initializeGame() {
    InputView.readUserPrice(this.processUserPriceInput.bind(this));
  }
}

module.exports = MainController;
