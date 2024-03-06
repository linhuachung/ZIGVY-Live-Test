function firstDuplication(a) {
    // Khởi tạo một đối tượng để lưu trữ các số đã xuất hiện và vị trí của chúng
    let list = {};

    // Duyệt qua mảng
    for (let i = 0; i < a.length; i++) {
        // Nếu số đã xuất hiện trước đó
        if (list[a[i]] !== undefined) {
            // Trả về số đó
            return a[i];
        } else {
            // Nếu số chưa xuất hiện, lưu vị trí của nó vào đối tượng list
            list[a[i]] = i;
        }
    }

    // Nếu không có số nào lặp lại, trả về -1
    return -1;
}

console.log(firstDuplication([2, 1, 3, 5, 3, 2])); // Kết quả: 3
console.log(firstDuplication([5, 5])); // Kết quả: 5
console.log(firstDuplication([2, 4, 3, 5, 1])); // Kết quả: -1
