const { Random } = require("@woowacourse/mission-utils");

class LottoGenerator {
  static getGeneratedLotto(userPriceInput) {
    return Random.pickUniqueNumbersInRange(1, 45, userPriceInput / 1000);
  }
}

module.exports = LottoGenerator;
