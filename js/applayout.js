const pathName = location.href
let isTintuc = false
if (pathName.indexOf("tintuc") != -1) {
    isTintuc = true
}

document.getElementById("header").innerHTML = `    <nav class="container-fluid">
<img src="../images/logo-Sunhomes-BBQ-01.png" alt="logo">
<ul id="p">
    <li ><a href="../html/index.html">Trang chủ</a></li>
    <li ><a href="../html/gioithieu.html" >Giới thiệu</a></li>
    <li ><a href="../html/datban.html">Đặt bàn</a></li>
    <li ><a href="../html/thucdon.html">Thực đơn</a></li>
    <li ><a href="../html/tuyendung.html">Tuyển dụng</a></li>
    <li ><a class="${isTintuc ? "active" : ""}" href="../html/tintuc.html">Tin tức</a></li>
    <li ><a href="../html/lienhe.html">Liên hệ</a></li>
    <li class="hotline">
        <a href="#">
            <span>Hotline: 0989708895</span>
        </a>
    </li>
</ul>
</nav>`;

var x = window.location.href;

let list = document.querySelectorAll('li>a');
// list.forEach(element => {
//     element.classList.remove("active");
// });
list.forEach(element => {
    if (element.href == x) {
        element.classList.add("active");
    }
});

document.getElementById("footer").innerHTML = `<div class="footer">
<div class="container">
    <div class="footer-left">
        Công ty Cổ phần Thương mại Dịch vụ Cổng Vàng
        <br>
        Trụ sở chính: 490A, Điện Biên Phủ, P.21, Q.Bình Thạnh
        <br>
        GPĐK: Số 0103023679 cấp ngày 09/04/2008
        <br>
        ĐT: 0999000000 Email: email@gmail.com
    </div>
    <div class="footer-right">
        © 2011 Golden Gate ., JSC. All rights reserved
        <br>
        <img src="../images/footer-bct.png" alt="">
    </div>
</div>
</div>`;

const idbanner = document.getElementById("banner");
let isbanner = false;
if (idbanner === null) {
    isbanner = false;
} else {
    isbanner = true;
}
document.getElementById("banner").innerHTML = `<div class="banner" style="display:${isbanner?"block":"none"}" >
<img src="../images/giới thiệu/banner-234.jpg" alt="">
</div>`;