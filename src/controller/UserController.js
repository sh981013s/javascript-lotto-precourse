const UserModel = require("../model/UserModel");

class UserController {
  #mainController;
  #UserModel;

  constructor(mainController) {
    this.#mainController = mainController;
    this.#UserModel = new UserModel();
  }

  processUserInput(userPriceInput) {
    this.#UserModel.generateLottos(userPriceInput);
    const userPurchasedLotto = this.#UserModel.getUserPurchasedLotto();
    this.#mainController.printUserPurchasedLotto(userPurchasedLotto);
    this.#mainController.readTargetLotto();
  }
}

module.exports = UserController;
