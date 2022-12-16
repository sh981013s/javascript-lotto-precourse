const { Console } = require("@woowacourse/mission-utils");
const { USER_PRICE_MESSAGES, USER_TARGET_MESSAGES } = require("../constants/Messages");

const InputView = {
  readUserPrice(callbackFunction) {
    Console.readLine(USER_PRICE_MESSAGES.INPUT, (userPriceInput) => {
      callbackFunction(userPriceInput);
    });
  },

  readTargetLotto(callBackFunction) {
    Console.readLine(USER_TARGET_MESSAGES.INPUT, (targetLottoInput) => {
      callBackFunction(targetLottoInput);
    });
  },
};

module.exports = InputView;
