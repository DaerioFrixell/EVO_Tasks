// аргументы функций: internalHandlerData, appeal.
// внутренняя функция: searchInDB.

if (appeal) {
  appeal.validationErrors = [];
  appeal.validationWarning = [];

  // Проверка отслеживает первое нажатие кнопки регистрации.
  if (internalHandlerData) {
    // Проверка уникальности номера. SearchInDb создаёт поисковый элемент, поэтому длина массива всегда будет минимум 1.
    if (internalHandlerData.length > 1) {
      const numAppeal = appeal.subservices[0].xsdData.parentAdministrative.appeal_number;

      const numIHD = internalHandlerData[0].subservices[0].xsdData.parentAdministrative.appeal_number;

      // При изменении вписанного номера нужно "сохранить" дело, чтоб подтянулся новый номер
      if (numAppeal !== numIHD) {
        appeal.validationWarning = ['Сохраните дело, чтобы проверить новый номер.'];

        return;
      }

      appeal.validationErrors = [`Номер ${numIHD} уже используется!`]
    } else {
      // Удалить все ошибки и предупреждения, если номер уникальный.
      appeal.validationErrors = [];
      appeal.validationWarning = [];
    }
  } else {
    appeal.validationWarning = ['Завершена проверка номера. Нажмите на "Регистрацию".'];
  }
}

// internal-handlers.service.ts
// internal-handlers.type.ts
// toaster-host.component.html
// common-appeal-actions.component