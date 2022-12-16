const LottoGameController = require("./LottoGameController");
const UserController = require("./UserController");

class MainController {
  #LottoGameController;
  #UserController;

  constructor() {
    this.#LottoGameController = new LottoGameController(this);
    this.#UserController = new UserController(this);
  }
}

module.exports = MainController;
