const express = require('express');
const mysql = require('mysql2');
const cors = require('cors'); // Add this line
const app = express();
const port = 5000;

// Middleware
app.use(express.json());
app.use(cors()); // Add this line
app.use(express.json());
// Create MySQL connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '0531',
    database: 'my_database'
});

// Connect to MySQL
db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        process.exit(1);
    }
    console.log('Connected to MySQL');
});

// API routes

// Get all products
app.get('/products', (req, res) => {
    db.query('SELECT * FROM products', (err, results) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json(results);
        }
    });
});


// API route to fetch all data from product2
app.get('/products2', (req, res) => {
  const sql = 'SELECT * FROM product2';
  db.query(sql, (err, results) => {
    if (err) {
      return res.status(500).send('Database query error');
    }
    res.json(results);
  });
});


app.get('/blogs', (req, res) => {
    const query = 'SELECT * FROM blog';
    db.query(query, (err, results) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json(results);
    });
  });

  app.get('/offers', (req, res) => {
    const query = 'SELECT * FROM offer';
    db.query(query, (err, results) => {
      if (err) throw err;
      res.json(results);
    });
  });
// Get a single product by ID
app.get('/products/:id', (req, res) => {
    const id = req.params.id;
    db.query('SELECT * FROM products WHERE id = ?', [id], (err, results) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else if (results.length === 0) {
            res.status(404).json({ message: 'Product not found' });
        } else {
            res.json(results[0]);
        }
    });
});

// Create a new product
app.post('/products', (req, res) => {
    const { name, price } = req.body;
    db.query('INSERT INTO products (name, price) VALUES (?, ?)', [name, price], (err, results) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(201).json({ id: results.insertId, name, price });
        }
    });
});

// Update a product
app.put('/products/:id', (req, res) => {
    const id = req.params.id;
    const { name, price } = req.body;
    db.query('UPDATE products SET name = ?, price = ? WHERE id = ?', [name, price, id], (err, results) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else if (results.affectedRows === 0) {
            res.status(404).json({ message: 'Product not found' });
        } else {
            res.json({ id, name, price });
        }
    });
});

// Delete a product
app.delete('/products/:id', (req, res) => {
    const id = req.params.id;
    db.query('DELETE FROM products WHERE id = ?', [id], (err, results) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else if (results.affectedRows === 0) {
            res.status(404).json({ message: 'Product not found' });
        } else {
            res.json({ message: 'Product deleted' });
        }
    });
});

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
