class Statistics {
  constructor(controller) {
    this.controller = controller;
    this.ranks = {
      first: 0,
      second: 0,
      third: 0,
      fourth: 0,
      fifth: 0,
    };
    this.rateOfReturn = 0;
  }

  getRanks() {
    return this.ranks;
  }

  setRanks(type, newState) {
    this.ranks[type] = newState;
  }

  getRateOfReturn() {
    return this.rateOfReturn;
  }

  setRateOfReturn(newRateOfReturn) {
    this.rateOfReturn = newRateOfReturn;
  }
}

module.exports = Statistics;
