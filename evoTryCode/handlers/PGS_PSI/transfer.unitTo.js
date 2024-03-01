/**
 * Проверяет выбран или ответ "нет".
 */
const isTransfer = model.checkEducation === "no";

//Перенаправляет дело, если ответ "да".
if (!isTransfer) {
  appeal.unitTo = {
    id: '65aa128e82dcf16d7f67b391',
    name: 'МИНИСТЕРСТВО СОЦИАЛЬНОГО РАЗВИТИЯ ОРЕНБУРГСКОЙ ОБЛАСТИ'
  }

  appeal.executor = null;
}