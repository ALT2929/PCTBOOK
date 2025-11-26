// ======================
// DỮ LIỆU SÁCH
// ======================
const books = [
    {
        id: 1,
        title: "Dám Bị Ghét",
        author: "Ichiro Kishimi & Fumitake Koga",
        intro:
            "Cuốn sách dựa trên triết học Adler, giúp bạn dám sống đúng với bản thân, tự do và hạnh phúc hơn.",
        tags: ["Tâm lý", "Phát triển bản thân"],
        genre: "Tâm lý / Self-help",
        cover: "pic/1.jpg",             // Ảnh bìa
    
    },
    {
        id: 2,
        title: "Đắc Nhân Tâm",
        author: "Dale Carnegie",
        intro:
            "Tác phẩm kinh điển về nghệ thuật giao tiếp, thuyết phục và xây dựng mối quan hệ bền vững.",
        tags: ["Kỹ năng", "Giao tiếp"],
        genre: "Kỹ năng sống",
        cover: "pic/dacnt.png",
    },
    {
        id: 3,
        title: "Nhà Giả Kim",
        author: "Paulo Coelho",
        intro:
            "Câu chuyện về hành trình đi tìm kho báu của cậu bé Santiago, cũng là hành trình tìm ước mơ đời mình.",
        tags: ["Tiểu thuyết", "Truyền cảm hứng"],
        genre: "Tiểu thuyết",
        cover: "pic/3.jpg",
    },
    {
        id: 4,
        title: "Tuổi Trẻ Đáng Giá Bao Nhi",
        author: "Rosie Nguyễn",
        intro:
            "Lời nhắn gửi đến người trẻ về việc học, đi, trải nghiệm và đầu tư cho bản thân trong những năm tháng thanh xuân.",
        tags: ["Tuổi trẻ", "Định hướng"],
        genre: "Phát triển bản thân",
        cover: "pic/4.jpg",
    },
    {
        id: 5,
        title: "Khi hơi thở hoá thinh không",
        author: "Paul Kalanithi",
        intro:
            "Khi Hơi Thở Hóa Thinh Không là cuốn hồi ký sâu sắc của một bác sĩ đối mặt cái chết, để lại những suy tư đẹp đẽ về ý nghĩa của cuộc đời và sự tồn tại.",
        tags: ["Triết lý sống", "Định hướng"],
        genre: "Hồi ký",
        cover: "pic/5.jpg",
    },
    {
        id: 6,
        title: "Tôi thấy hoa vàng trên cỏ xanh",
        author: "Nguyễn Nhật Ánh",
        intro:
            "“Tôi Thấy Hoa Vàng Trên Cỏ Xanh” là câu chuyện trong trẻo và đầy cảm xúc về tuổi thơ nơi làng quê, nơi những rung động đầu đời và ký ức đẹp đẽ được tái hiện một cách dịu dàng.",
        tags: ["Tuổi thơ", "Tình cảm gia đình"],
        genre: "Tiểu thuyết",
        cover: "pic/6.jpg",
        previewUrl: "https://848603edf5.vws.vegacdn.vn//data/doc/haiphong/2025/thcsmydong/2025_4/24/toi-thay-hoa-vang-tren-co-xanh-nguyen-nhat-anh_24420258.pdf",
    },
    {
        id: 7,
        title: "Mắt biếc",
        author: "Nguyễn Nhật Ánh",
        intro:
            "“Mắt Biếc” là câu chuyện tình yêu đơn phương đẹp mà buồn, theo chân Ngạn và Hà Lan qua những năm tháng tuổi trẻ đầy thương nhớ nơi làng Đo Đo.",
        tags: ["Tuổi học trò", "Tình bạn – tình yêu"],
        genre: "Tiểu thuyết",
        cover: "pic/7.jpg",
        previewUrl: "https://848603edf5.vws.vegacdn.vn/data/haiphong/thcsquangtrungngoquyen/2023_6/14/mat-biec-nguyen-nhat-anh_146202310.pdf",
    },
    {
        id: 8,
        title: "Cô gái đến từ hôm qua",
        author: "Nguyễn Nhật Ánh",
        intro:
            "“Cô Gái Đến Từ Hôm Qua” là câu chuyện nhẹ nhàng và đầy hoài niệm về mối tình học trò đan xen giữa hiện tại và ký ức tuổi thơ tinh nghịch.",
        tags: ["Tuổi học trò", "Tình yêu"],
        genre: "Tiểu thuyết",
        cover: "pic/8.jpg",
        previewUrl: "https://848603edf5.vws.vegacdn.vn/data/haiphong/thcsquangtrungngoquyen/2023_6/14/sachmoinet-co-gai-den-tu-hom-qua_146202310.pdf",
    },
    {
        id: 9,
        title: "Sống xanh không khó",
        author: "Nam Kha",
        intro:
            "“Sống Xanh Không Khó” mang đến những gợi ý thực tế và dễ áp dụng, giúp mỗi người bắt đầu hành trình sống bền vững chỉ từ những thay đổi nhỏ hằng ngày.",
        tags: ["Sống xanh", "Bảo vệ môi trường"],
        genre: "Kỹ năng sống",
        cover: "pic/9.png",
        previewUrl: "https://romhub.io/EBOOK/KHO%20S%C3%81CH%20KH%E1%BB%A6NG%203000+%20CU%E1%BB%90N%20S%C3%81CH/THI%C3%8AN%20NHI%C3%8AN,%20M%C3%94I%20TR%C6%AF%E1%BB%9CNG,%20MU%C3%94N%20LO%C3%80I%20(11)/S%E1%BB%91ng%20Xanh%20Kh%C3%B4ng%20Kh%C3%B3%20(Nam%20Kha)%20eb/S%E1%BB%91ng%20Xanh%20Kh%C3%B4ng%20Kh%C3%B3%20-%20Nam%20Kha%20[eBook].pdf",
    },
    {
        id: 10,
        title: "Niên lịch miền gió cát",
        author: "Aldo Leopold",
        intro:
            "“Niên Lịch Miền Gió Cát” là tập luận văn kinh điển, nơi Aldo Leopold ghi lại những quan sát tinh tế về thiên nhiên và kêu gọi con người xây dựng một đạo đức đất đai đầy nhân văn và bền vững.",
        tags: ["Sinh thái học", "Bảo tồn thiên nhiên"],
        genre: "Triết luận",
        cover: "pic/10.jpg  ",
        previewUrl: "https://ebookvie.com/doc-sach/nien-lich-mien-gio-cat/",
    },
    {
        id: 11,
        title: "tập Đời thừa",
        author: "Nam Cao",
        intro:
            "“Đời Thừa” là truyện ngắn sắc sảo của Nam Cao, khắc hoạ bi kịch tinh thần của người trí thức nghèo giữa vòng xoáy cơm áo và khát vọng sống có ý nghĩa.",
        tags: ["Văn học hiện thực", "Xã hội Việt Nam trước 1945"],
        genre: "Tâm lý – xã hội",
        cover: "pic/11.jpg",
        previewUrl: "https://dilib.vn/img/pdf/9500-doi-thua-thuviensach.vn.pdf",
    },
    {
        id: 12,
        title: "Tội ác và trừng phạt",
        author: "Fyodor Mikhaylovich Dostoyevsky",
        intro:
            "“Tội Ác và Trừng Phạt” là kiệt tác tâm lý – triết học, theo chân Raskolnikov trên hành trình từ tội lỗi đến thức tỉnh lương tri, mở ra những suy ngẫm sâu sắc về nhân tính và sự cứu rỗi.",
        tags: ["Tâm lý tội phạm", "Nhân tính & cứu rỗi"],
        genre: "Tiểu thuyết",
        cover: "pic/12.jpg",
        previewUrl: "https://dilib.vn/img/pdf/7832-toi-ac-va-trung-phat-thuviensach.vn.pdf",
    },
];

// ======================
// BIẾN DOM
// ======================
const bookListEl = document.getElementById("bookList");
const bookDetailEl = document.getElementById("bookDetail");
const searchInputEl = document.getElementById("searchInput");
const genreFilterEl = document.getElementById("genreFilter");

// Trạng thái filter
let currentSearch = "";
let currentGenre = "all";

// ======================
// KHỞI TẠO
// ======================
initGenres();
renderBookList();
autoSelectFirst();

// ======================
// HÀM KHỞI TẠO THỂ LOẠI
// ======================
function initGenres() {
    const genres = Array.from(new Set(books.map((b) => b.genre))).sort();
    genres.forEach((g) => {
        const opt = document.createElement("option");
        opt.value = g;
        opt.textContent = g;
        genreFilterEl.appendChild(opt);
    });
}

// ======================
// LỌC DỮ LIỆU
// ======================
function getFilteredBooks() {
    return books.filter((book) => {
        const matchGenre =
            currentGenre === "all" ? true : book.genre === currentGenre;

        const text = (book.title + " " + book.author).toLowerCase();
        const matchSearch = text.includes(currentSearch.toLowerCase());

        return matchGenre && matchSearch;
    });
}

// ======================
// RENDER DANH SÁCH
// ======================
function renderBookList() {
    bookListEl.innerHTML = "";
    const filtered = getFilteredBooks();

    if (filtered.length === 0) {
        bookListEl.innerHTML =
            '<p style="font-size:13px;opacity:0.7;">Không tìm thấy sách phù hợp.</p>';
        bookDetailEl.innerHTML =
            "<h2>Không có sách</h2><p>Thử từ khóa khác hoặc chọn thể loại khác.</p>";
        return;
    }

    filtered.forEach((book) => {
        const item = document.createElement("div");
        item.className = "book-item";
        item.dataset.id = book.id;

        item.innerHTML = `
      <img class="book-thumb" src="${book.cover}" alt="Bìa sách" />
      <div class="book-info">
        <div class="book-title">${book.title}</div>
        <div class="book-meta">${book.author}</div>
        <div class="book-meta">${book.genre}</div>
      </div>
    `;

        item.addEventListener("click", () => {
            setActiveBook(book.id);
            renderBookDetail(book);
        });

        bookListEl.appendChild(item);
    });
}

// ======================
// ĐẶT ACTIVE TRONG LIST
// ======================
function setActiveBook(id) {
    document.querySelectorAll(".book-item").forEach((el) => {
        if (Number(el.dataset.id) === id) {
            el.classList.add("active");
        } else {
            el.classList.remove("active");
        }
    });
}

// ======================
// RENDER CHI TIẾT
// ======================
function renderBookDetail(book) {
    bookDetailEl.innerHTML = `
    <div class="detail-top">
      <img class="detail-cover" src="${book.cover}" alt="Bìa sách" />
      <div class="detail-text">
        <div class="detail-title">${book.title}</div>
        <div class="detail-author">Tác giả: ${book.author}</div>
        <div class="detail-genre">Thể loại: ${book.genre}</div>
        <div class="detail-tags">
          ${book.tags && book.tags.length
            ? book.tags.map((t) => `<span class="tag">${t}</span>`).join("")
            : ""
        }
        </div>
        <p class="detail-description">${book.intro}</p>
      </div>
    </div>

    <div class="actions">
      <button class="btn btn-primary" id="previewBtn">
        📖 Đọc thử
      </button>
    </div>
  `;

    const previewBtn = document.getElementById("previewBtn");

    previewBtn.addEventListener("click", () => {
        // Chuyển sang trang flipbook chung, kèm id sách
        window.location.href = `reader.html?id=${book.id}`;
    });
}


// ======================
// AUTO CHỌN QUYỂN ĐẦU TIÊN
// ======================
function autoSelectFirst() {
    const filtered = getFilteredBooks();
    if (filtered.length === 0) return;
    const first = filtered[0];
    setTimeout(() => {
        setActiveBook(first.id);
        renderBookDetail(first);
    }, 0);
}

// ======================
// SỰ KIỆN TÌM KIẾM & LỌC
// ======================
searchInputEl.addEventListener("input", (e) => {
    currentSearch = e.target.value.trim();
    renderBookList();
    autoSelectFirst();
});

genreFilterEl.addEventListener("change", (e) => {
    currentGenre = e.target.value;
    renderBookList();
    autoSelectFirst();
});
