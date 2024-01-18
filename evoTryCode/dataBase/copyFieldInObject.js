db.getCollection("nfapRepositorylicenses").find(
  {
    "object": { $exists: true }, // проверить, что свойство существует.
    "status": "active",
    "number": { $exists: true }
  })
  .forEach(function (license) {
    var obj = license.object;

    if (obj) {
      var id = license._id.toString(); // конвертация Mongo _id в строку.

      //  из другой коллекции достать нужный объект. Сравниваю их по id.
      var reg = db.getCollection("nfapRepositoryActivityRegistry")
        .findOne({ "licenseId": id, "object": { $exists: true } });

      // обновление поля у объекта. Добавляет новое, если поле не существует.
      if (reg) {
        if (reg.object.docSupportCode) {
          db.nfapRepositorylicenses.updateOne({ number: reg.number }, { $set: { "object.formCode": reg.object.docSupportCode } });
        }
      }
    } else {
      print('no obj', license._id)
    }
  })