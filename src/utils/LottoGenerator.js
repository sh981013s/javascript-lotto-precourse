const { Random } = require("@woowacourse/mission-utils");

class LottoGenerator {
  static getGeneratedLotto(userPriceInput) {
    const generatedLotto = [];
    for (let index = 0; index < userPriceInput / 1000; index++) {
      generatedLotto.push(Random.pickUniqueNumbersInRange(1, 45, 6));
    }
    return generatedLotto;
  }
}

module.exports = LottoGenerator;
