const { Console } = require("@woowacourse/mission-utils");
const { USER_PRICE_MESSAGES } = require("../constants/Messages");

const OutputView = {
  printError(errorLog) {
    Console.print(errorLog.message);
  },

  printUserPurchasedLotto(userPurchasedLotto) {
    Console.print(`\n${userPurchasedLotto.length}${USER_PRICE_MESSAGES.LottoNumber}`);
    for (const singleLottoCombination of userPurchasedLotto) {
      Console.print(`[${singleLottoCombination.join(", ")}]`);
    }
  },
};

module.exports = OutputView;
