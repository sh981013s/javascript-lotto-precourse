const USER_PRICE_MESSAGES = Object.freeze({
  INPUT: "구입금액을 입력해 주세요.\n",
  ERROR: "[ERROR] 1000원 단위로 나누어 떨어진 숫자이어야 합니다.",
  LottoNumber: "개를 구매했습니다.",
});

const USER_TARGET_MESSAGES = Object.freeze({
  INPUT: "\n당첨 번호를 입력해 주세요.\n",
  ERROR: "[ERROR] 콤마(,)로 구분된 6개의 숫자이어야 합니다.",
});

module.exports = { USER_PRICE_MESSAGES, USER_TARGET_MESSAGES };
