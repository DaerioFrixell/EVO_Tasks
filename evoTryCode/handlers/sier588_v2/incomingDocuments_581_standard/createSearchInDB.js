//arg: appeal.

if (appeal) {

  const currentNumber = appeal.subservices[0].xsdData.parentAdministrative.appeal_number;

  appeal.searchInDB = {
    collectionName: 'incomingDocumentsAppeals',
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
}