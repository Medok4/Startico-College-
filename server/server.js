const express = require('express');
const cors = require('cors');
const {Pool} = require('pg');

const app = express();
app.use(cors());
app.use(express.json());

const pool = new Pool({
    user: process.env.DB_USER || 'postgres',
    host: process.env.DB_HOST || 'localhost',
    database: process.env.DB_NAME || 'postgres',
    password: process.env.DB_PASSWORD || 'HELP5509',
    port: process.env.DB_PORT || 5432,
});

//Добавление почты
app.post('/api/email', async (req, res) => {
    const{
        email
    } = req.body;

    try{
        const result = await pool.query(
            `INSERT INTO emailtb (email)
            VALUES ($1) RETURNING *`,
            [email]
        );
        
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({error: 'Internal server error'});
    }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`We are going through ${PORT} with this one!`))