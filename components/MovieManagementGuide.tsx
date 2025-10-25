import React from 'react';

const MovieManagementGuide: React.FC = () => {
  return (
    <div className="bg-brand-gray p-6 rounded-lg border border-gray-700">
      <h3 className="text-xl font-bold text-white mb-3">วิธีการอัปเดตรายการหนังในระบบจริง</h3>
      <div className="text-gray-300 space-y-2 text-sm">
        <p>
          <strong className="text-white">สำหรับเว็บต้นแบบ (Prototype) นี้:</strong> ข้อมูลหนังทั้งหมดถูกเก็บไว้ในไฟล์ชื่อ <code className="bg-gray-800 text-yellow-300 px-1 rounded-sm">constants.ts</code> หากคุณต้องการเพิ่ม, ลบ, หรือแก้ไขหนัง คุณจะต้องทำโดยตรงในไฟล์นั้น
        </p>
        <p>
          <strong className="text-white">สำหรับแอปพลิเคชันที่จะใช้งานจริง:</strong> คุณควรจะ:
        </p>
        <ol className="list-decimal list-inside pl-4 space-y-1">
          <li>
            <strong>ใช้ฐานข้อมูล:</strong> เช่น Firebase Firestore หรือ Realtime Database เพื่อเก็บข้อมูลหนังทั้งหมด
          </li>
          <li>
            <strong>สร้างหน้าจัดการ (Admin Panel):</strong> สร้างหน้าเว็บสำหรับผู้ดูแลระบบที่มีฟอร์มสำหรับกรอกข้อมูลหนังใหม่ (ชื่อเรื่อง, รายละเอียด, URL โปสเตอร์, วันที่เพิ่ม ฯลฯ)
          </li>
          <li>
            <strong>บันทึกข้อมูล:</strong> เมื่อผู้ดูแลกรอกข้อมูลและกดบันทึก โค้ดจะส่งข้อมูลนั้นไปเก็บไว้ใน Firebase
          </li>
          <li>
            <strong>แสดงผลอัตโนมัติ:</strong> หน้าเว็บหลักจะดึงข้อมูลล่าสุดจาก Firebase มาแสดงผลเสมอ ทำให้เมื่อคุณเพิ่มหนังใหม่ในระบบ มันจะปรากฏบนเว็บทันทีโดยไม่ต้องแก้ไขโค้ด
          </li>
        </ol>
        <p className="mt-3">
          วิธีนี้จะทำให้การจัดการข้อมูลหนังทำได้ง่าย, รวดเร็ว, และไม่ต้องยุ่งกับโค้ดของโปรแกรมโดยตรงครับ!
        </p>
      </div>
    </div>
  );
};

export default MovieManagementGuide;
