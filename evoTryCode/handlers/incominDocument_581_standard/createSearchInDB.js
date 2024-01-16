const currentNumber = appeal.subservices[0].xsdData.parentAdministrative.appeal_number;

/**
 * - validationErrors изначально нет в appeal. Его нужно создать.
 * - validationErrors сохраняет все ошибки внутри себя. Очищение нужно делать вручную.
 * - если validationErrors будет иметь внутри элементы, то они покажутся в pop-up'е.
 * - если свойство validationErrors существует, но массив пуст, то pop-up не будет отображаться.
 * - массив ожидает строку/строки.
 * - exm: appeal.validationErrors = ['error', 'one more error']
 */
appeal.validationErrors = [];

appeal.searchInDB = {
  collectionName: 'incomingDocumentsAppeals', // название коллекции, в которой осуществляется поиск.
  params: {
    search: {
      "search": [{
        "field": "subservices.0.xsdData.parentAdministrative.appeal_number",
        "operator": "eq",
        "value": `${currentNumber}`,
      }]
    }
  }
};