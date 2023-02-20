const express = require("express");
const cors = require("cors");

const userRoutes = require("./routes/UserRoutes")

const app = express();

app.use(cors());
app.use(express.json());

require('./config/mongoose.config');
app.use('/api/user', userRoutes);



app.listen(8000, () => { console.log(`listening on port:8000`) });
