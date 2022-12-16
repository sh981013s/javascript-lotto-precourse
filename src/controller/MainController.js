const LottoGameController = require("./LottoGameController");
const UserController = require("./UserController");
const InputView = require("../view/InputView");
const OutputView = require("../view/OutputView");

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

  printUserPurchasedLotto(userPurchasedLotto) {
    OutputView.printUserPurchasedLotto(userPurchasedLotto);
  }

  initializeGame() {
    InputView.readUserPrice(this.processUserPriceInput.bind(this));
  }
}

module.exports = MainController;
