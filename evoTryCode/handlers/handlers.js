/** HANDLERS LIST:
 * - appeal.validationErrors;
 * - appeal.searchInDB;
 * - searchInDB();
 * - internalHandlerData();
 */

/**
 * - validationErrors изначально нет в appeal. Его нужно создать.
 * - validationErrors сохраняет все ошибки внутри себя. Очищение нужно делать вручную.
 * - если validationErrors будет иметь внутри элементы, то они покажутся в pop-up'е.
 * - если свойство validationErrors существует, но массив пуст, то pop-up не будет отображаться.
 * - массив ожидает строку/строки.
 * - EXM: appeal.validationErrors = ['error', 'one more error']
 */
appeal.validationErrors = [];

/**
 * не путать внутреннюю функцию searchInDB и appeal.searchInDB!
 * - searchInDB изначально нет в appeal. Его нужно создать.
 * - searchInDB нужно создать до того, как будет вызываться внутренняя функция searchInDB.
 * - searchInDB объект и searchInDB внутрення функция - разные вещи.
 * - searchInDB.collectionName - обязательное свойство. Это название коллекции, в которой будет поиск.
 * - searchInDB.params.search.search - обязательное свойство. Это массив объектов, которые фильтруют поиск.
 *  
 * - @params collectionName, params
 */
appeal.searchInDB = {
  collectionName: "string",
  params: {
    search: {
      "search": [{
        "field": "",
        "operator": "",
        "value": ""
      }]
    }
  }
}

/** 
 * - внутренняя функция, которая осуществляет поиск в БД.
 * - должна вызываться "на завершение", после того, как будет создан объект appeal.searchInDB.
 * - результат функции будет храниться в internalHandlerData().
 * - searchInDB, создаёт посковой объект, если такой не был найден в БД. (wtf)
 */
function searchInDB() { }

/**
 * - аргумент internalHandlerData хранит данные после вызова внутренней функции searchInDB.
 * - другие функции сюда же кидаю результат вроде как. Не тестил еще.
 */
function internalHandlerData() { }

/** TO DO: добавить описание.
 * - аргумент appeal
 */
function appeal() { }