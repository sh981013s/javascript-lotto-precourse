/* eslint-disable */
const LottoGenerator = require("../src/utils/LottoGenerator");

describe("로또 생성기 테스트", () => {
  test("로또 생성 테스트", () => {
    const generatedLotto = LottoGenerator.getGeneratedLotto(3000);
    expect(generatedLotto.length === 3).toEqual(true);
    for (let i = 0; i < generatedLotto.length; i++) {
      expect(new Set(generatedLotto[i]).size === 6).toEqual(true);
      for (let j = 0; j < generatedLotto[i]; j++) {
        expect(0 < generatedLotto[i][j] && generatedLotto[i][j] < 46).toEqual(true);
      }
    }
  });
});
