db.getCollection("nfapRepositorylicenses").find({"subject.data.organization.guid": {$exists: false}}).limit(15).forEach(function(license) {
  if(license.subject) {        
       var subject = license.subject;
       
       if (subject.data.organization.ogrn) {        
           var organization = db.organizations.findOne({'ogrn': subject.data.organization.ogrn});
           
           if (organization) {
              subject.data.organization.guid = organization.guid;
              db.nfapRepositorylicenses.updateOne({_id: license._id},{$set: {subject: subject}});
           }
       }
  } else {
      print('subject not exist', license._id)
  }         
})