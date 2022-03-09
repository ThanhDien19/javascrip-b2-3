/**
 * DOM
 */
// var username = document.getElementById("txtUsername").value;
// console.log(username);

// document.getElementById("btnLogin").onclick = function () {
//   var username = document.getElementById("txtUsername").value;
//   var password = document.getElementById("txtPassword").value;

//   var ketQua = "Username la: " + username + "<br />Password la: " + password;

//   document.getElementById("footerLogin").innerHTML = ketQua;
// };

/**
 * Cộng 2 số
 */
// document.getElementById("btnCong").onclick = function () {
  /**
   * lấy value số thứ 1
   * lấy value số thứ 2
   * Tổng => show tổng
   */
  // var number_1 = document.getElementById("txtNumber_1").value * 1;
  // var number_2 = document.getElementById("txtNumber_2").value * 1;

  //Chuyển kiểu dữ liệu từ string => number
  //   number_1 = parseInt(number_1);
  //   number_2 = parseInt(number_2);

  // var tong = number_1 + number_2;

  // var ketQuaTong = "Tong la: " + tong;

  // //Gán ketQuaTong ra thẻ div#thongBao
  // document.getElementById("thongBao").innerHTML = ketQuaTong;

  //Style inline cho thẻ div#thongBao
  //   document.getElementById("thongBao").style.color = "white";
  //   document.getElementById("thongBao").style.backgroundColor = "red";
  //   document.getElementById("thongBao").style.fontSize = "30px";
  //   document.getElementById("thongBao").style.textAlign = "center";

  //Style add class cho thẻ div#thongBao
  //   document.getElementById("thongBao").className = "showInfo";
//   document.getElementById("thongBao").classList.add("showInfo");
// };

document.getElementById("btnOff").onclick = function () {
  document.getElementById("imgPic").src = "./images/pic_bulboff.gif";
};

document.getElementById("btnOn").onclick = function () {
  document.getElementById("imgPic").src = "./images/pic_bulbon.gif";
};

document.getElementById("btnDisableBtnOn").onclick = function () {
  //Khoá nút On (k cho user click vào nút On)
  document.getElementById("btnOn").disabled = true;
};

document.getElementById("enableBtnOn").onclick = function () {
  //Mở nút On (cho user click vào nút On)
  document.getElementById("btnOn").disabled = false;
};

/**
 * Tinh tien tip
 * - Đầu vào
 *     - tongTienThanhToan
 *     - phanTramTip
 *     - soLuongNguoiChia
 * - Xử lý: 100 => 100 * 30/100 / 3 => 10
 *      tongTienThanhToan * phanTramTip/100 / soLuongNguoiChia
 * - Đầu ra: Hien thi thong tin
 */
document.getElementById("btnTinh").onclick = function () {
  var tongTienThanhToan = document.getElementById("txtTongTien").value;
  var phanTramTip = document.getElementById("phanTramTip").value;
  var soLuongNguoiChia = document.getElementById("soNguoi").value;

  var total = (tongTienThanhToan * phanTramTip) / 100 / soLuongNguoiChia;

  //   var ketQua = "Mỗi người típ " + total + "$";
  //   var ketQua = "<div>Mỗi người típ " + total + " $</div>";
  var ketQua = "<div>Mỗi người típ ";
  ketQua += total;
  ketQua += " $</div>";

  document.getElementById("footerTienTip").innerHTML = ketQua;
};

document.getElementById("btnCreateP").onclick = function () {
  //Tạo thẻ p
  //   var tagP = "<p>Hello Cybersoft</p>";
  //   document.getElementById("divContent").innerHTML = tagP;

  //clear content của thẻ div
  document.getElementById("divContent").innerHTML = "";
  var tagP = document.createElement("p");
  tagP.innerHTML = "Hello Cybersoft";
  document.getElementById("divContent").appendChild(tagP);
};

/**
 * Tinh loi nhuan
 */
document.getElementById("btnTinhLoiNhuan").onclick = function () {
  //Dom tới các thẻ input lấy value
  var tenPhim = document.getElementById("txtTenPhim").value;
  var giaVeNguoiLon = document.getElementById("giaVeNguoiLon").value;
  var giaVeTreEm = document.getElementById("giaVeTreEm").value;
  var slVeNguoiLon = document.getElementById("slVeNguoiLon").value;
  var slVeTreEm = document.getElementById("slVeTreEm").value;
  var tongSoLuongVe = slVeNguoiLon + slVeTreEm;

  console.log(tenPhim, giaVeNguoiLon, giaVeTreEm, slVeNguoiLon, slVeTreEm);

  //Xử lý
  //Tính doanh thu
  var doanhThu = giaVeNguoiLon * slVeNguoiLon + giaVeTreEm * slVeTreEm;

  //Tính từ thiện
  var tuThien = (doanhThu * 10) / 100;

  //Tính lợi nhuận
  var loiNhuan = doanhThu - tuThien;

  //Format vnd
  var currentFormat = new Intl.NumberFormat("vn-VN");
  var tienVnd = currentFormat.format(loiNhuan);

  var ketQua = "<div class='alert alert-success'>";
  ketQua    +=      "<p>Tên Phim: " + tenPhim + "</p>";
  ketQua    +=      "<p>Số vé đã bán: " + tongSoLuongVe + "</p>";
  ketQua    +=      "<p>Doanh thu: " + currentFormat.format(doanhThu) + "</p>";
  ketQua    +=      "<p>Trích % từ thiện: 10%";
  ketQua    +=      "<p>Tổng tiền trích từ thiện: " + currentFormat.format(tuThien) + "</p>";
  ketQua    +=      "<p>Lợi nhuận: " + tienVnd + "</p>";
  ketQua    += "</div>";

  document.getElementById("footerLoiNhuan").innerHTML = ketQua;
};

/**
 * Tinh luong NV
 */
document.getElementById("btnTinhLuongNV").onclick = function(){
    //Đầu vào
    const LUONG = 100000;
    var soNgayLam = document.getElementById("txtSoNgayLam").value;

    //Xử lý
    var tongTienLuong = soNgayLam * LUONG;
    //fortmat vnd
    var currentFormat = new Intl.NumberFormat('vn-VN');

    var tongTienLuongVND = currentFormat.format(tongTienLuong);

    //Đầu ra
    var ketQua = "<div>Tổng lương là: " + tongTienLuongVND + " vnd</div>";

    document.getElementById("footerTinhLuongNV").innerHTML = ketQua;
}

/**
 * Tinh gia tri TB
 */
document.getElementById("btnTinhTB").onclick = function(){
    //Đầu vào: dom tới 5 thẻ input lấy value
    var number_1 = document.getElementById("txtSo_1").value * 1;
    var number_2 = document.getElementById("txtSo_2").value * 1;
    var number_3 = document.getElementById("txtSo_3").value * 1;
    var number_4 = document.getElementById("txtSo_4").value * 1;
    var number_5 = document.getElementById("txtSo_5").value * 1;

    //Xử lý: 5 số cộng lại => chia 5 
    var tongTB = (number_1 + number_2 + number_3 + number_4 + number_5) / 5;

    //Đầu ra
    var ketQua = "<div class='alert alert-danger'>Tổng trung bình là: " + tongTB + "</div>";
    document.getElementById("footerTinhTB").innerHTML = ketQua;
}


/**
 * Quy doi tien USD => VND
 */
document.getElementById("btnVND").onclick = function(){
    //Đầu vào: dom tới thẻ input lấy value
    const TI_GIA = 23500;
    var txtUSD = document.getElementById("txtUSD").value;

    //Xử lý: 
    var quyDoiVND = txtUSD * TI_GIA;
    var currentFormat = new Intl.NumberFormat('vn-VN');
    var quyDoiVNDFormat = currentFormat.format(quyDoiVND);

    //Đầu ra
    var ketQua = "<div>Tiền quy đổi là: " + quyDoiVNDFormat + " vnd</div>";
    document.getElementById("footerTinhVND").innerHTML = ketQua;
}