// ==============================
// DỮ LIỆU SÁCH LƯU TẠI FRONTEND
// ==============================
const BOOK_DATA = {
    "8931234567890": {
        barcode: "8931234567890",
        title: "Dám Bị Ghét",
        author: "Ichiro Kishimi & Fumitake Koga",
        publisher: "NXB XYZ",
        year: "2020"
    },
    "9786041005143": {
        barcode: "9786041005143",
        title: "Mắt Biếc",
        author: "Nguyễn Nhật Ánh",
        publisher: "NXB Trẻ",
        year: "2010"
    },
    "9786041198234":{
        barcode: "97860411982345",
        title: "Cô Gái Đến Từ Hôm Qua",
        author: "Nguyễn Nhật Ánh",
        publisher: "NXB Trẻ",
        year: "2010"
    }
    // Thêm barcode khác vào đây
};
// =====================
// BIẾN TOÀN CỤC
// =====================
const codeReader   = new ZXing.BrowserMultiFormatReader();
const imageInput   = document.getElementById("image-input");
const scanResult   = document.getElementById("scan-result");
let   selectedBooks = [];


// =====================
// UPLOAD NHIỀU ẢNH
// =====================
imageInput.addEventListener("change", () => {
    const files = Array.from(imageInput.files);
    if (!files.length) return;

    scanResult.textContent = "Đang xử lý ảnh...";

    files.forEach(file => {
        if (!file.type.startsWith("image/")) return;

        const reader = new FileReader();
        reader.onload = e => {
            const img = new Image();
            img.src = e.target.result;
            img.onload = () => decodeFromImage(img);
        };
        reader.readAsDataURL(file);
    });
});


// =====================
// ĐỌC BARCODE TỪ MỘT ẢNH
// =====================
function decodeFromImage(imgElem) {
    codeReader.decodeFromImageElement(imgElem)
        .then(result => {
            const code = result.getText().trim();
            const book = BOOK_DATA[code];

            if (!book) {
                scanResult.textContent = "Có barcode không nằm trong dữ liệu sách.";
                console.warn("Barcode không có trong BOOK_DATA:", code);
                return;
            }

            // tránh trùng
            if (!selectedBooks.find(b => b.barcode === code)) {
                selectedBooks.push(book);
            }

            renderBooks();
        })
        .catch(err => {
            console.warn("Không đọc được ảnh:", err);
        });
}


// =====================
// HIỂN THỊ LIST SÁCH
// =====================
function renderBooks() {
    scanResult.textContent = `Đã nhận ${selectedBooks.length} sách.`;

    const list      = document.getElementById("books-list");
    const container = document.getElementById("books-container");

    container.innerHTML = selectedBooks
        .map(book => `
            <div class="book-item">
                <strong>${book.title}</strong><br>
                Barcode: ${book.barcode}<br>
                Tác giả: ${book.author}
            </div>
        `).join("");

    list.classList.remove("hidden");
    document.getElementById("borrow-form-card").classList.remove("hidden");
}


// =====================
// NÚT TẠO TICKET
// =====================
document.getElementById("btn-submit").addEventListener("click", () => {
    const msg = document.getElementById("borrow-message");
    msg.textContent = "";

    if (selectedBooks.length === 0) {
        msg.textContent = "Bạn chưa chọn sách!";
        return;
    }

    const student_name  = document.getElementById("student_name").value.trim();
    const student_class = document.getElementById("student_class").value.trim();
    const school        = document.getElementById("school").value.trim();
    const student_id    = document.getElementById("student_id").value.trim();
    const email         = document.getElementById("email").value.trim();
    const phone         = document.getElementById("phone").value.trim();
    const return_date   = document.getElementById("return_date").value;

    if (!student_name || !student_class || !school || !student_id || !return_date) {
        msg.textContent = "Vui lòng nhập đủ thông tin!";
        return;
    }

    const borrow_date = new Date().toISOString().slice(0, 10);
    const ticket_id   = "T" + Date.now();

    const ticket = {
        ticket_id,
        borrow_date,
        return_date,
        student_name,
        student_class,
        school,
        student_id,
        email,
        phone,
        books: selectedBooks
    };

    showTicket(ticket);
    msg.textContent = "Đã tạo phiếu mượn!";
});


// =====================
// HIỂN THỊ TICKET + VẼ BARCODE
// =====================
function showTicket(ticket) {
    const ticketCard    = document.getElementById("ticket-card");
    const ticketContent = document.getElementById("ticket-content");
    const qrContainer   = document.getElementById("ticket-qrcode");

    // danh sách barcode sách
    const booksBarcodeList = ticket.books.map(b => b.barcode).join(",");

    // PAYLOAD QR: NGẮN + CHỈ NHỮNG GÌ PYTHON CẦN
    const payload =
        "TID:"  + ticket.ticket_id       + "|" +
        "B:"    + booksBarcodeList       + "|" +
        "SID:"  + ticket.student_id      + "|" +
        "C:"    + ticket.student_class   + "|" +
        "MAIL:" + ticket.email           + "|" +
        "BD:"   + ticket.borrow_date     + "|" +
        "RD:"   + ticket.return_date;

    console.log("QR PAYLOAD:", payload);

    // xoá QR cũ
    qrContainer.innerHTML = "";

    // tạo QR mới
    try {
        new QRCode(qrContainer, {
            text: payload,
            width: 160,
            height: 160,
            correctLevel: QRCode.CorrectLevel.L   // mức L để chứa được nhiều hơn
        });
    } catch (e) {
        console.error("Lỗi tạo QR:", e);
        document.getElementById("borrow-message").textContent =
            "Đã tạo phiếu nhưng không tạo được QR (xem console).";
    }

    // phần chữ trên phiếu (giữ nguyên, vẫn hiện tên, trường, SĐT, ...)
    ticketContent.innerHTML = `
        <strong>Người mượn:</strong><br>
        ${ticket.student_name} (${ticket.student_class})<br>
        ${ticket.school}<br>
        Mã HS: ${ticket.student_id}<br>
        Email: ${ticket.email}<br>
        SĐT: ${ticket.phone}<br><br>

        <strong>Ngày mượn:</strong> ${ticket.borrow_date}<br>
        <strong>Ngày trả dự kiến:</strong> ${ticket.return_date}<br><br>

        <strong>Sách đã mượn:</strong><br>
        ${ticket.books.map(b => `• ${b.title} (${b.barcode})`).join("<br>")}
    `;

    ticketCard.classList.remove("hidden");
}
