const { Console } = require("@woowacourse/mission-utils");
const messages = require("../constants/messages");

class View {
  constructor(controller) {
    this.controller = controller;
  }

  getPurchasingAmountFromUser() {
    Console.readLine(messages.PURCHASING_AMOUNT_MESSAGE, (userInput) => {
      this.controller.setPurchasingAmount(userInput);
    });
  }

  printPurchasingAmountErrorMessage() {
    throw new Error(messages.PURCHASING_AMOUNT_ERROR_MESSAGE);
  }

  printUserLottoArray(userLottoArray) {
    Console.print(
      `\n${this.controller.userNumber.getUserLottoArray().length}${
        messages.USER_LOTTO_CONFIRMATION_MESSAGE
      }`,
    );
    for (const singleLottoCombination of userLottoArray) {
      Console.print(singleLottoCombination);
    }
  }

  getWinningNumberFromUser() {
    Console.readLine(messages.WINNING_NUMBER_MESSAGE, (userInput) => {
      this.controller.setWinningNumberFromUser(userInput);
    });
  }

  printWinningNumberCommaNumberErrorMessage() {
    throw new Error(messages.WINNING_NUMBER_ERROR_COMMA_NUMBER_MESSAGE);
  }

  printWinningNumberRangeErrorMessage() {
    throw new Error(messages.WINNING_NUMBER_ERROR_RANGE_MESSAGE);
  }

  printWinningNumberUniqueErrorMessage() {
    throw new Error(messages.WINNING_NUMBER_ERROR_UNIQUE_NUMBERS_MESSAGE);
  }

  getBonusNumberFromUser() {
    Console.readLine(messages.BONUS_NUMBER_MESSAGE, (userInput) => {
      this.controller.setBonusNumberFromUser(userInput);
    });
  }

  printBonusNumberErrorMessage() {
    throw new Error(messages.BONUS_NUMBER_ERROR_MESSAGE);
  }

  printStatistics(ranks, rateOfReturn) {
    Console.print(messages.STATISTICS_OPENING_MESSAGE);
    const statisticsMessage = `${messages.STATISTICS_FIFTH_MESSAGE}${ranks.fifth}개
${messages.STATISTICS_FOURTH_MESSAGE}${ranks.fourth}개
${messages.STATISTICS_THIRD_MESSAGE}${ranks.third}개
${messages.STATISTICS_SECOND_MESSAGE}${ranks.second}개
${messages.STATISTICS_FIRST_MESSAGE}${ranks.first}개
총 수익률은 ${rateOfReturn}%입니다.`;

    Console.print(statisticsMessage);
    this.controller.finishGame();
  }
}

module.exports = View;
