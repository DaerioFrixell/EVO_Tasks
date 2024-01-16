let object1 = {
  'ключ1': 100,
  "quentity": 2
};

let object2 = {
  'ключ1': 10,
  "quentity": 3
};

let object3 = {
  'ключ1': 10,
  "quentity": undefined
};

const sumValueByKey = (...rest) => rest.reduce(
  (result, current) => {
    for (let key in current) {
      if (key == "quentity") { // проверка на название ключа 
        let value = current[key]; // получили value по каждому ключу из каждого объекта

        if (result[key] === undefined) { // result[key] на первой итерации = undefined
          result[key] = value;
        } else {
          result[key] += value; // сумирует одинаковые ключи
        }
      }
    }

    return result;
  }, {});

sumValueByKey(object1, object2, object3); // функция суммирует значения у одинаковых ключей