let count = 0; // เอาไว้นับคะแนนที่กดแล้วถูกต้อง
let answered1 = false; // ตัวแปรตรวจสอบว่าคำถามข้อ 1 ถูกตอบแล้วหรือยัง
let answered2 = false; // ตัวแปรตรวจสอบว่าคำถามข้อ 2 ถูกตอบแล้วหรือยัง

// ฟังก์ชันสำหรับเช็คคำตอบข้อแรก
function checkAnswer(answer) {
    // ฟังก์ชันสำหรับเช็คคำตอบข้อแรก
    if (answered1) return; // ถ้าตอบแล้ว, ให้ return ออกจาก
    const result = document.getElementById("result");
    if (answer === "a") {
        result.textContent = "ถูกต้อง เอช เทค ทำระบบคลังสินค้าอัจฉริยะ";
        result.style.color = 'green';
        count++;// เพิ่มคะแนนเมื่อคำตอบถูกต้อง
    }
    else {
        result.textContent = "ไม่ถูกต้อง! ";
        result.style.color = 'red';
    }
    // แสดงคะแนนรวมทุกครั้งหลังเช็คคำตอบ
    updateTotalScore();
    // ตั้งค่าตัวแปร answered1 เป็น true เพื่อบอกว่าได้ตอบแล้ว
    answered1 = true;
}

// ฟังก์ชันสำหรับเช็คคำตอบข้อที่สอง
function checkAnswer2(answer) {
    if (answered2) return;
    const result = document.getElementById("result2");
    const result3 = document.getElementById("result3");
    if (answer === "d") {
        result.textContent = "ถูกต้อง เอช เทค ดำเนินธุรกิจมาแล้ว 18 ปี";
        result.style.color = 'green';
        count++;
    }
    else {
        result.textContent = "ไม่ถูกต้อง! ";
        result.style.color = 'red';
    }
    updateTotalScore();
    answered2 = true;
}

// ฟังก์ชันสำหรับอัพเดตคะแนนรวม
function updateTotalScore() {
    const result3 = document.getElementById("result3");
    result3.textContent = "คุณได้คะแนนทั้งหมด " + count + " คะแนน";
}