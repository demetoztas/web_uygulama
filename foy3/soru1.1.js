const { Client } = require('pg');

const client = new Client({
    host: 'localhost',
    user: 'postgres',
    password: 'Demet.1516',
    database: 'node_db',
    port: 5432 
});


client.connect((err) => {
    if (err) {
        console.error('Veritabanına bağlanırken hata oluştu:', err.stack);
    } else {
        console.log('PostgreSQL veritabanına bağlanıldı.');

        const insertQuery = `
        INSERT INTO employee (firstname, lastname, departmentname) VALUES 
        ('John', 'Duffy', 'Engineering'),
        ('Doe', 'Walters', 'Support'),
        ('Jane', 'Austen', 'Engineering'),
        ('Terri', 'Swift', 'Support')
      `;
      
        client.query(insertQuery, (err, result) => {
            if (err) {
                console.error('Veri eklenirken hata oluştu:', err.stack);
            } else {
                console.log('Veriler başarıyla eklendi.');
            }


            client.end();
        });
    }
});
