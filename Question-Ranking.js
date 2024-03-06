function sortRank(n, P, Q) {
    // Khởi tạo một mảng rỗng để lưu thông tin về các người tham gia.
    let participants = [];
    // Bắt đầu vòng lặp để duyệt qua các người tham gia.
    for (let i = 0; i < n; i++) {
        // Thêm một đối tượng mới vào mảng participants, chứa tên và điểm số của người tham gia tương ứng.
        participants.push({ name: P[i], score: Q[i] });
    }

    // Sắp xếp các người tham gia theo điểm số giảm dần.
    participants.sort((a, b) => b.score - a.score);

    // Khởi tạo biến rank để lưu trữ hạng ban đầu, bắt đầu từ 1.
    let rank = 1;
    // Lưu trữ điểm số của người tham gia đầu tiên để so sánh với các người tham gia sau đó.
    let prevScore = participants[0].score;

    // Khởi tạo một đối tượng rỗng để lưu trữ hạng của mỗi người tham gia.
    let ranks = {};

    // Bắt đầu vòng lặp để duyệt qua mảng participants.
    for (let i = 0; i < participants.length; i++) {
        // Lấy thông tin của người tham gia hiện tại.
        let participant = participants[i].name;
        let score = participants[i].score;

        // Kiểm tra nếu điểm số hiện tại không bằng điểm số trước đó.
        if (score !== prevScore) {
            // Cập nhật hạng mới nếu có sự thay đổi trong điểm số.
            rank = i + 1;
            // Cập nhật điểm số trước đó.
            prevScore = score;
        }

        // Lưu trữ hạng của người tham gia vào đối tượng ranks.
        ranks[participant] = rank;
    }

    // Bắt đầu vòng lặp để in ra kết quả.
    for (let i = 0; i < n; i++) {
        // In ra tên và hạng của người tham gia tương ứng.
        console.log(`${participants[i].name} ${ranks[participants[i].name]}`);
    }
}

let n = 5;
let P = ["Lan", "Linh", "Lam", "Luyen", "Ly"];
let Q = [5, 5, 1, 2, 1];
sortRank(n, P, Q);
