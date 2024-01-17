// arg: appeal, internalHandlerData;

const num = appeal.inputNumber;

if (internalHandlerData.length > 1 && num) {
  appeal.validationErrors = [];
  appeal.validationErrors = [`Номер ${num} уже используется`]
} else {
  appeal.validationErrors = [];
}