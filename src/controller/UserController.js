const UserModel = require("../model/UserModel");
const PriceInputValidation = require("../validation/PriceInputValidation");

class UserController {
  #mainController;
  #UserModel;

  constructor(mainController) {
    this.#mainController = mainController;
    this.#UserModel = new UserModel();
  }

  processUserPurchasedLotto(userPurchasedLotto) {
    this.#mainController.printUserPurchasedLotto(userPurchasedLotto);
    this.#mainController.readTargetLotto();
  }

  processUserInput(userPriceInput) {
    try {
      PriceInputValidation.validate(userPriceInput);
      this.#UserModel.generateUserPurchasedLotto(userPriceInput);
      const userPurchasedLotto = this.#UserModel.getUserPurchasedLotto();
      this.processUserPurchasedLotto(userPurchasedLotto);
    } catch (errorLog) {
      this.#mainController.printError(errorLog);
    }
  }
}

module.exports = UserController;
