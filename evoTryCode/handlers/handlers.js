/**
 * - validationErrors изначально нет в appeal. Его нужно создать.
 * - validationErrors сохраняет все ошибки внутри себя. Очищение нужно делать вручную.
 * - если validationErrors будет иметь внутри элементы, то они покажутся в pop-up'е.
 * - если свойство validationErrors существует, но массив пуст, то pop-up не будет отображаться.
 * - массив ожидает строку/строки.
 * - exm: appeal.validationErrors = ['error', 'one more error']
 */
appeal.validationErrors = [];

/**
 * Здесь будут данные после вызова searchInDB.
 * 
 * Другие функции сюда же кидаю результат вроде как. Не тестил еще.
 */
function internalHandlerData() { }

/** TO DO
 * доделать описание
 * когда используется searchInDB, то она создаёт посковой объект, если такой не был найден в БД.
 * internalHandlerData - в него будет записан результат вызова searchInDB.
 */
function searchInDB() { }