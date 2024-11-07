const { Client } = require('pg');

const client = new Client({
    host: 'localhost',
    user: 'postgres',
    password: 'Demet.1516',
    database: 'node_db',
    port: 5432 
});

// Bağlantıyı başlatma
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

                const selectQuery = `SELECT * FROM employee WHERE departmentname = 'Engineering'`;

                client.query(selectQuery, (err, results) => {
                    if (err) {
                        console.error('Veri çekilirken hata oluştu:', err.stack);
                    } else {
                        console.log('Engineering departmanındaki çalışanlar:', results.rows);

                      
                        const updateQuery = `UPDATE Employee SET departmentName = 'Executive' WHERE firstname = 'Terri'`;

                        client.query(updateQuery, (err, result) => {
                            if (err) {
                                console.error('Veri güncellenirken hata oluştu:', err.stack);
                            } else {
                                console.log('Terri adlı çalışanın departmanı başarıyla güncellendi.');
                            }

                          
                            client.end();
                        });
                    }
                });
            }
        });
    }
});
