const { USER_TARGET_MESSAGES } = require("../constants/Messages");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6 || new Set(numbers).size !== 6) {
      throw new Error(USER_TARGET_MESSAGES.ERROR.message);
    }
    for (const singleLottoNumber of numbers) {
      if (1 > singleLottoNumber || singleLottoNumber > 45) {
        throw new Error(USER_TARGET_MESSAGES.ERROR.message);
      }
    }
  }
}

module.exports = Lotto;
