const express = require('express');
const mysql = require('mysql');
const cors = require('cors')
const app = express();
const port = 3000;
const helmet = require('helmet');

app.use((req, res, next) => {
  res.setHeader(
    'Content-Security-Policy',
    "script-src 'self' 'nonce-q2eoNlh5lAzhcJiBB7ihE8sVOcKmOzsD' 'nonce-xq00hexniYIJXc2WCsKvyXVxNQwq6GGF'"
  );
  next();
});

const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: 'dequitomark123!',
  database: 'objectives',
};

app.use(express.json());

const allowedOrigins = [
  'http://127.0.0.1:5501',
  'http://127.0.0.1:5501', // Added protocol (http) here
];



const corsOptions = {
  origin: allowedOrigins,
  allowedHeaders: ['Origin', 'Content-Type', 'Accept'],
};

app.use(cors(corsOptions));

app.get('/api/users', async (req, res) => {
  const connection = mysql.createConnection(dbConfig)

  try {
    await new Promise((resolve, reject) => {
      connection.connect((err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });

    console.log('Connected to Database!');

    const queryResult = await new Promise((resolve, reject) => {
      const mysqlcode = "SELECT Name,Price FROM foods";
      connection.query(mysqlcode, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });

    console.log('Query Result:', queryResult);
    
    // Send the query result as a JSON response
    res.json(queryResult);
  } catch (err) {
    console.error('Error executing query:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  } finally {
    connection.end((err) => {
      if (err) {
        console.error('Error ending the connection:', err);
      }
      console.log('Connection ended!');
    });
  }
});

app.post('/api/addFood', async (req, res) => {
  const { name, price } = req.body;

  if (!name || !price) {
    return res.status(400).json({ error: 'Name and price are required.' });
  }

  const connection = mysql.createConnection(dbConfig);

  try {
    await new Promise((resolve, reject) => {
      connection.connect((err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });

    console.log('Connected to Database!');

    const insertResult = await new Promise((resolve, reject) => {
      const mysqlcode = "INSERT INTO foods (Name, Price) VALUES (?, ?)";
      connection.query(mysqlcode, [name, price], (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });

    console.log('Insert Result:', insertResult);

    // Send a success response
    res.json({ message: 'Food added successfully.' });
  } catch (err) {
    console.error('Error executing query:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  } finally {
    connection.end((err) => {
      if (err) {
        console.error('Error ending the connection:', err);
      }
      console.log('Connection ended!');
    });
  }
});
  
app.listen(port, () => {
  console.log(`Server started on http:/localhost:${port}`);
});
