import React from 'react';

const Disclaimer: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-yellow-600 text-white p-3 text-center text-xs md:text-sm z-50 shadow-lg">
      <strong>คำชี้แจงสำคัญ:</strong> เว็บไซต์นี้เป็นเพียงแคตตาล็อกเพื่อแนะนำภาพยนตร์เท่านั้น
      เราไม่มีการสตรีมหรือจัดเก็บไฟล์วิดีโอใดๆ บนเซิร์ฟเวอร์ของเรา 
      ลิงก์ต่างๆ จะนำท่านไปยังผู้ให้บริการรับชมภาพยนตร์ที่ถูกลิขสิทธิ์
    </div>
  );
};

export default Disclaimer;
