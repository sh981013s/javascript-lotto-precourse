const { Console } = require("@woowacourse/mission-utils");

const OutputView = {
  printError(errorLog) {
    Console.print(errorLog);
  },
};

module.exports = OutputView;
