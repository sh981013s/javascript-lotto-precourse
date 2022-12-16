const { USER_PRICE_MESSAGES } = require("../constants/Messages");

class PriceInputValidation {
  static validate(userPriceInput) {
    if (typeof userPriceInput !== "number" || userPriceInput % 1000) {
      throw new Error(USER_PRICE_MESSAGES.ERROR);
    }
  }
}

module.exports = PriceInputValidation;
