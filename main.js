
var button1 = document.getElementById("mot");
var button2 = document.getElementById("hai");
var button3 = document.getElementById("ba");

function excercise1(){
    let a = prompt("Nhap so a");
    a = parseInt(a);
    let b = prompt("Nhap so b");
    b = parseInt(b);
    if (a>b) {alert("a la max b la min");} else if (b>a) {alert("b la max a la min");} else {alert("so bang nhau");}
};
function excercise2(){
    let c = prompt("Nhap mot so nguyen");
    c = parseInt(c);
    if (c%2==0) {alert("so do la so chan");} else {alert("so do la so le");}
};
function excercise3(){
    let d = prompt("Nhap mot so nguyen");
    d = parseInt(d);
    let n = prompt("Nhap mot so nguyen n");
    n = parseInt(n);
    if (d%n==0) {alert("so nguyen do chia het cho n");} else {alert("so nguyen do khong chia het cho n");}
};

function excercise4(){
    var day = new Date().getDay();
    switch (day){
        case 0:
            alert("Chủ nhật");
            break;
        case 1:
            alert("Thứ 2");
            break;
        case 2:
            alert("Thứ 3");
            break;
        case 3:
            alert("Thứ 4");
            break;
        case 4:
            alert("Thứ 5");
            break;
        case 5:
            alert("Thứ 6");
            break;
        case 6:
            alert("Thứ 7");
            break;
        default:
            alert("Không xác định");
            break;
    }
};

function excercise5(){
    let traiCay = prompt("Nhập tên loại trái cây");
    switch (traiCay){
        case "Mít":
            alert("Đây là trái Mít");
            break;
        case "Chuối":
            alert("Đây là trái Chuối");
            break;
        case "Táo":
            alert("Đây là trái Táo");
            break;
        default:
            alert("Không xác định");
            break;
    }
};