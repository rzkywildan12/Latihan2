// 2. Konversi cm ke km atau sebaliknya
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
