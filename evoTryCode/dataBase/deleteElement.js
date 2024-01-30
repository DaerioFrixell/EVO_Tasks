db.getCollection("notificationTypes").find({}).forEach(el => {
  const searchString = `any string`;

  if (el.name === searchString) {
    db.notificationTypes.deleteOne({ name: searchString })
  }
})
