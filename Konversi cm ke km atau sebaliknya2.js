// 2. Konversi cm ke km atau sebaliknya 
function convertLength(value, unit) {
    if (unit === 'cm') {
        return value / 100000 + ' km'; 
    } else if (unit === 'km') {
        return value * 100000 + ' cm';
    } else {
        return 'Unit Tidak valid';
    }
}
console.log(convertLength(100000, 'cm')); // Output : "1km"
