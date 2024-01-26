//arg: appeal.

const doctype1 = "Приказ по основной деятельности (ОД)";
const doctype2 = "Приказ по служебным проверкам (СП)";
const doctype3 = "Распоряжение о прохождении стажировок и освоении дополнительных услуг";
const doctype4 = "Распоряжение по основной деятельности";

if (appeal) {
  const commonData = appeal.subservices[0].xsdData.parentAdministrative;

  if (commonData.Documenttype === doctype1) {
    appeal.inputNumber = commonData.Blocknum1.appeal_number;
    appeal.inputBlocknum = "Blocknum1";
  };

  if (commonData.Documenttype === doctype2) {
    appeal.inputNumber = commonData.Blocknum2.appeal_number;
    appeal.inputBlocknum = "Blocknum2";
  };

  if (commonData.Documenttype === doctype3) {
    appeal.inputNumber = commonData.Blocknum3.appeal_number;
    appeal.inputBlocknum = "Blocknum3";
  };

  if (commonData.Documenttype === doctype4) {
    appeal.inputNumber = commonData.Blocknum4.appeal_number;
    appeal.inputBlocknum = "Blocknum4";
  };

  const cond = commonData.Documenttype !== doctype1
    && commonData.Documenttype !== doctype2
    && commonData.Documenttype !== doctype3
    && commonData.Documenttype !== doctype4;

  if (cond) {
    appeal.inputNumber = commonData.Blocknum5.appeal_number;
    appeal.inputBlocknum = "Blocknum5";
  };
};

if (appeal.inputNumber && appeal.inputBlocknum) {
  appeal.validationErrors = [];

  appeal.searchInDB = {
    collectionName: 'regulatoryDocumentsAppeals',
    params: {
      search: {
        "search": [{
          "field": `subservices.0.xsdData.parentAdministrative.${appeal.inputBlocknum}.appeal_number`,
          "operator": "eq",
          "value": `${appeal.inputNumber}`,
        }]
      }
    }
  }
}
