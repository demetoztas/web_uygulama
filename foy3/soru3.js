const fs = require('fs');

function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

const primes = [];
for (let i = 2; i < 90; i++) {
    if (isPrime(i)) primes.push(i);
}


fs.writeFile('asal_sayi.txt', primes.join(', '), (err) => {
    if (err) throw err;
    console.log('Asal sayılar başarıyla asal_sayi.txt dosyasına kaydedildi.');

    
    const fullNumbers = Array.from({ length: 89 }, (_, i) => i + 1);

    fs.writeFile('tum_sayilar.txt', fullNumbers.join(', '), (err) => {
        if (err) throw err;
        console.log('Tüm sayılar başarıyla tum_sayilar.txt dosyasına kaydedildi.');
    });
});
