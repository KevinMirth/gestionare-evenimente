const db = require('../db');

exports.addEvent = async (req, res) => {
    const { nume_eveniment, tip_eveniment, locatie, status_eveniment, data } = req.body;

    try {
        const [result] = await db.query(
            `INSERT INTO evenimente (nume_eveniment, tip_eveniment, data_eveniment, locatie, status_eveniment) VALUES (?, ?, ?, ?, ?)`,
            [nume_eveniment, tip_eveniment, data, locatie, status_eveniment]
        );

        res.status(201).json({ message: 'Eveniment registered successfully.' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong. Please try again later.' });
    }
};