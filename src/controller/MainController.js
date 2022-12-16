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

  processTargetLottoInput(targetLottoInput) {
    this.#LottoGameController.processTargetLottoInput(targetLottoInput);
  }

  printError(errorLog) {
    OutputView.printError(errorLog);
  }

  printUserPurchasedLotto(userPurchasedLotto) {
    OutputView.printUserPurchasedLotto(userPurchasedLotto);
  }

  readTargetLotto() {
    InputView.readTargetLotto(this.processTargetLottoInput.bind(this));
  }

  initializeGame() {
    InputView.readUserPrice(this.processUserPriceInput.bind(this));
  }
}

module.exports = MainController;
