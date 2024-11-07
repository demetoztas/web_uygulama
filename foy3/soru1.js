const { Client } = require('pg');


const client = new Client({
  host: 'localhost',
  user: 'postgres',
  password: 'Demet.1516',
  database: 'node_db',
  port: 5432 
});

client.connect((err) => {
  if (err) throw err;
  console.log('PostgreSQL bağlantısı başarıyla gerçekleştirildi.');
});


const createTableQuery = `
  CREATE TABLE Employee (
    EmployeeId SERIAL PRIMARY KEY,
    FirstName VARCHAR(100),
    Lastname  VARCHAR(100),
    DepartmentName VARCHAR(255)
  )
`;

client.query(createTableQuery, (err, result) => {
  if (err) throw err;
  console.log('Employee tablosu başarıyla oluşturuldu.');
});

