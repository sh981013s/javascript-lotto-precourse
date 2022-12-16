const { Console } = require("@woowacourse/mission-utils");
const { USER_PRICE_MESSAGES } = require("../constants/Messages");

const InputView = {
  readUserPrice(callbackFunction) {
    Console.readLine(USER_PRICE_MESSAGES.INPUT, (userPriceInput) => {
      callbackFunction(userPriceInput);
    });
  },
};

module.exports = InputView;
