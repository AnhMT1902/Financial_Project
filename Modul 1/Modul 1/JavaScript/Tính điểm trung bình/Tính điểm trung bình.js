Physics = prompt ("Điểm Lý;");
Chemistry = prompt ("Điểm Hóa;");
Biological = prompt ("Điểm Sinh;");
    let A = parseInt(Physics);
    let B = parseInt(Chemistry);
    let C = parseInt(Biological);
        let sum = A+B+C
        let ĐTB = sum/3
            document.write('Tổng bằng'+sum)
            document.write('<br>')
            document.write('Điểm trung bình'+ĐTB)