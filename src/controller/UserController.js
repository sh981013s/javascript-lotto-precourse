const UserModel = require("../model/UserModel");

class UserController {
  #mainController;
  #UserModel;

  constructor(mainController) {
    this.#mainController = mainController;
    this.#UserModel = new UserModel();
  }
}

module.exports = UserController;
