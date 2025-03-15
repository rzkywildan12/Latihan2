# Tugas2
# Konversi dan Manipulasi Data dalam JavaScript & TypeScript

Repositori ini berisi lima program sederhana yang dibuat dalam JavaScript dan TypeScript untuk melakukan berbagai operasi pemrosesan data. Berikut adalah daftar tugas dan implementasinya.

---

## 🛠 Teknologi yang Digunakan
- JavaScript (JS) - Bahasa pemrograman utama untuk pengolahan data di sisi klien maupun server.
- TypeScript (TS) - Superset dari JavaScript dengan fitur tipe data statis untuk meningkatkan keamanan kode.

## 1. Konversi Fahrenheit ke Celsius
###  Penjelasan
Fungsi ini menerima suhu dalam Fahrenheit dan mengonversinya ke Celsius menggunakan rumus:

\[C = (F - 32) \times \frac{5}{9}\]

###  Implementasi
#### JavaScript (fahrenheitToCelsius.js)
```js
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}
console.log(fahrenheitToCelsius(100)); // Output: 37.777...
```
#### TypeScript (fahrenheitToCelsius.ts)
```ts
function fahrenheitToCelsius(fahrenheit: number): number {
    return (fahrenheit - 32) * 5 / 9;
}
console.log(fahrenheitToCelsius(100)); // Output: 37.777...
```

---

##  2. Konversi cm ke km atau sebaliknya
###  Penjelasan
Fungsi ini mengonversi nilai panjang dari sentimeter ke kilometer atau sebaliknya dengan perhitungan:
- 1 km = 100000 cm
- 1 cm = 0.00001 km

###  Implementasi
#### JavaScript (convertLength.js)
```js
function convertLength(value, unit) {
    if (unit === 'cm') {
        return value / 100000 + ' km';
    } else if (unit === 'km') {
        return value * 100000 + ' cm';
    } else {
        return 'Unit tidak valid';
    }
}
console.log(convertLength(100000, 'cm')); // Output: "1 km"
```
#### TypeScript (convertLength.ts)
```ts
function convertLength(value: number, unit: string): string {
    if (unit === 'cm') {
        return `${value / 100000} km`;
    } else if (unit === 'km') {
        return `${value * 100000} cm`;
    } else {
        return 'Unit tidak valid';
    }
}
console.log(convertLength(100000, 'cm')); // Output: "1 km"
```

---

## 3. Cek bilangan ganjil atau genap
### Penjelasan
Fungsi ini mengecek apakah suatu bilangan adalah ganjil atau genap berdasarkan operasi modulus (`%`).

###  Implementasi
#### JavaScript (isOdd.js)
```js
function isOdd(n) {
    return n % 2 !== 0;
}
console.log(isOdd(1001)); // Output: true
console.log(isOdd(1000)); // Output: false
```
#### TypeScript (isOdd.ts)
```ts
function isOdd(n: number): boolean {
    return n % 2 !== 0;
}
console.log(isOdd(1001)); // Output: true
console.log(isOdd(1000)); // Output: false
```

---

## 4. Hapus kemunculan pertama dari sebuah string
###  Penjelasan
Fungsi ini menghapus kemunculan pertama dari suatu substring dalam string utama menggunakan metode `.replace()`.

### Implementasi
#### JavaScript (removeFirstOccurrence.js)
```js
function removeFirstOccurrence(str, searchStr) {
    return str.replace(searchStr, '');
}
console.log(removeFirstOccurrence("Hello world", "ell")); // Output: "Ho world"
```
#### TypeScript (removeFirstOccurrence.ts)
```ts
function removeFirstOccurrence(str: string, searchStr: string): string {
    return str.replace(searchStr, '');
}
console.log(removeFirstOccurrence("Hello world", "ell")); // Output: "Ho world"
```

---

## 5. Cek apakah sebuah string adalah palindrome
###  Penjelasan
Fungsi ini memeriksa apakah suatu kata tetap **sama** jika dibalik dengan cara:
1. Menggunakan `.split('')` untuk memecah string menjadi array karakter.
2. Menggunakan `.reverse()` untuk membalikkan array.
3. Menggunakan `.join('')` untuk mengembalikannya ke string.
4. Membandingkan hasil dengan string aslinya.

###  Implementasi
#### JavaScript (isPalindrome.js)
```js
function isPalindrome(str) {
    let reversed = str.split('').reverse().join('');
    return str === reversed;
}
console.log(isPalindrome("madam")); // Output: true
console.log(isPalindrome("hello")); // Output: false
```
#### TypeScript (isPalindrome.ts)
```ts
function isPalindrome(str: string): boolean {
    let reversed = str.split('').reverse().join('');
    return str === reversed;
}
console.log(isPalindrome("madam")); // Output: true
console.log(isPalindrome("hello")); // Output: false
```

---

## Cara Menjalankan Kode
### JavaScript
1. Pastikan Node.js telah terinstal.
2. Jalankan file JavaScript dengan perintah:
   ```sh
   node namaFile.js
   ```
   Contoh:
   ```sh
   node fahrenheitToCelsius.js
   ```

### TypeScript
1. Pastikan TypeScript telah terinstal dengan perintah:
   ```sh
   npm install -g typescript
   ```
2. Kompilasi file TypeScript ke JavaScript:
   ```sh
   tsc namaFile.ts
   ```
3. Jalankan hasilnya dengan Node.js:
   ```sh
   node namaFile.js
   ```

---

Kesimpulan
Repositori ini menyediakan berbagai fungsi sederhana untuk konversi dan manipulasi data dalam JavaScript dan TypeScript. Dengan menggunakan TypeScript, kode menjadi lebih terstruktur dan aman karena mendukung pengecekan tipe. 
