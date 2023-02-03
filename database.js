const mongoose = require('mongoose');

const URI = 'mongodb+srv://SelenaGarcia:SelGarMer24@cluster0.1oibcnq.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(URI)
.then(db => console.log('DB connected'))
.catch(err => console.log(err));

module.exports = mongoose;