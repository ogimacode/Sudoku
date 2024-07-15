const express = require('express');
const cors = require('cors');
const pool = require('./database');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = 8000;
const JWT_SECRET = 'papabento16';

app.use(express.json());
app.use(cors());

app.post("/adduser", async (req, res) => {
    const { username, password } = req.body;
    
    try {
        const hashedPassword = await bcrypt.hash(password, 10);

        const insertUser = `INSERT INTO accounts (username, password) VALUES($1, $2)`;
        await pool.query(insertUser, [username, hashedPassword]);

        res.status(201).json({ message: "User added successfully" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server error" });
    }
});

app.post("/login", async (req, res) => {
    const { username, password } = req.body;

    try {
        const result = await pool.query(`SELECT * FROM accounts WHERE username = $1`, [username]);
        if (result.rows.length === 0) {
            return res.status(400).json({ error: "Invalid credentials" });
        }

        const user = result.rows[0];

        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            return res.status(400).json({ error: "Invalid credentials" });
        }

        const token = jwt.sign({ id: user.user_id }, JWT_SECRET, { expiresIn: '1h' });

        res.json({ token });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server error" });
    }
});

function verifyToken(req, res, next) {
    const token = req.header('auth-token');
    if (!token) return res.status(401).json({ error: "Access Denied" });

    try {
        const verified = jwt.verify(token, JWT_SECRET);
        req.user = verified;
        next();
    } catch (err) {
        res.status(400).json({ error: "Invalid Token" });
    }
}

app.get("/protected", verifyToken, (req, res) => {
    res.json({ message: "This is a protected route" });
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});