const mongoose = require('mongoose');
const uri=process.env.MONGODB_URI_SOFOM;
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(db => console.log('DB is connected'))
    .catch(err => console.log(err));