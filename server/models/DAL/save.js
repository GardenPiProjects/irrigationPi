const MongoClient = require('mongodb').MongoClient;

function saveData(data) {
  MongoClient.connect(process.env.MONGO_URL, (err, db) => {
    if (err) console.log(err);
    if(!err) {
      console.log('connected to database');
      const collection = db.collection('data');
      collection.insert(data);
    }
  });
}

module.exports = saveData;

