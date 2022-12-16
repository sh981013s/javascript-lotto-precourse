const { Console } = require("@woowacourse/mission-utils");
const { USER_PRICE_MESSAGES } = require("../constants/Messages");

const OutputView = {
  printError(errorLog) {
    Console.print(errorLog);
  },

  printUserPurchasedLotto(userPurchasedLotto) {
    Console.print(userPurchasedLotto.length + USER_PRICE_MESSAGES.LottoNumber);
    for (const singleLottoCombination of userPurchasedLotto) {
      Console.print(`[${singleLottoCombination.join(", ")}]`);
    }
  },
};

module.exports = OutputView;
