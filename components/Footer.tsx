import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-black py-8 border-t border-gray-800">
      <div className="container mx-auto px-4 md:px-10 lg:px-16 text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} MovieFlix Prototype. สงวนลิขสิทธิ์</p>
        <p className="mt-2 text-sm">นี่คือเว็บไซต์ต้นแบบเพื่อการสาธิตเท่านั้น</p>
      </div>
    </footer>
  );
};

export default Footer;
