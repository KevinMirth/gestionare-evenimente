const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const eventRoutes = require('./routes/EvenimentRoutes');

require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

app.use('/api/events', eventRoutes);
//app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});