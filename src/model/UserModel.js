const LottoGenerator = require("../utils/LottoGenerator");

class UserModel {
  #userPurchasedLotto;

  constructor() {
    this.#userPurchasedLotto = [];
  }

  generateUserPurchasedLotto(userPriceInput) {
    this.#userPurchasedLotto = LottoGenerator.getGeneratedLotto(userPriceInput);
  }

  getUserPurchasedLotto() {
    return this.#userPurchasedLotto;
  }
}

module.exports = UserModel;
