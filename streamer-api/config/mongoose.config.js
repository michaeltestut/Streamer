const mongoose = require("mongoose");
mongoose.set('strictQuery', true);
mongoose.connect('mongodb://localhost/streamerdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(()=>console.log('Established connection to database'))
    .catch(err=>console.log('Something went wrong when connecting to database',err));