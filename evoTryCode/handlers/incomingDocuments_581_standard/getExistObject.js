// аргументы функций: internalHandlerData, appeal.
// внутренняя функция: searchInDB.

if (internalHandlerData.length > 1) {
  appeal.validationErrors = [];
  const num = internalHandlerData[0].subservices[0].xsdData.parentAdministrative.appeal_number
  appeal.validationErrors = [`Номер ${num} уже используется`]
} else {
  appeal.validationErrors = [];
}