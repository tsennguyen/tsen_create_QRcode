document.getElementById('generateBtn').addEventListener('click', function() {
    var inputText = document.getElementById('inputText').value;
    var qrOption = document.getElementById('qrOption').value;

    if (inputText.trim() === '') {
        alert('Vui lòng nhập thông tin cần tạo mã!');
        return;
    }

    // Mã hóa URL nếu là liên kết
    var encodedText = encodeURIComponent(inputText);

    // Xóa mã QR/Mã vạch cũ
    document.getElementById('output').innerHTML = '';
    document.getElementById('downloadButtons').style.display = 'none';

    // Tạo mã QR hoặc mã vạch
    if (qrOption === 'qr') {
        // Tạo mã QR với URL đã được mã hóa
        var qr = new QRCode(document.getElementById("output"), {
            text: encodedText,  // Sử dụng URL mã hóa
            width: 256, 
            height: 256,
            colorDark : "#000000",
            colorLight : "#ffffff",
            correctLevel : QRCode.CorrectLevel.H
        });
    } else {
        // Tạo mã vạch
        JsBarcode("#output", inputText, {
            format: "CODE128", // Mã vạch chuẩn CODE128
            lineColor: "#000000",
            width: 3,
            height: 100,
            displayValue: true
        });
    }

    // Hiển thị các nút tải xuống
    document.getElementById('downloadButtons').style.display = 'block';
});
