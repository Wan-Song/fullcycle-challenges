const express = require('express');
const mysql = require('mysql2/promise');

const app = express();
const port = 3000;

const config = {
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'nodedb'
};

async function ensureTable(connection) {
  await connection.query(`
    CREATE TABLE IF NOT EXISTS people (
      id INT NOT NULL AUTO_INCREMENT,
      name VARCHAR(255) NOT NULL,
      PRIMARY KEY (id)
    )
  `);
}

async function insertData(connection, name) {
  const sql = `INSERT INTO people(name) VALUES (?)`;
  await connection.query(sql, [name]);
}

async function getData(connection) {
  const [results] = await connection.query(`SELECT name FROM people`);
  return results.map(r => r.name);
}

app.get('/', async (req, res) => {
  try {
    const connection = await mysql.createConnection(config);

    await ensureTable(connection);
    await insertData(connection, 'Wan Song');
    await insertData(connection, 'Wesley');

    const names = await getData(connection);
    await connection.end();

    const html = `
      <html>
        <head><meta charset="utf-8" /></head>
        <body>
          <h1>Full Cycle Rocks!</h1>
          <ul>
            ${names.map(name => `<li>${name}</li>`).join('')}
          </ul>
        </body>
      </html>
    `;
    res.status(200).send(html);
  } catch (err) {
    res.status(500).send(`Erro: ${err.message}`);
  }
});

app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
