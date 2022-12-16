const LottoGameModel = require("../model/LottoGameModel");

class LottoGameController {
  #mainController;
  #LottoGameModel;

  constructor(mainController) {
    this.#mainController = mainController;
    this.#LottoGameModel = new LottoGameModel();
  }
}

module.exports = LottoGameController;
