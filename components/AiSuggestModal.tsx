import React, { useState } from 'react';
import { generateMovieSuggestions } from '../services/geminiService';

interface AiSuggestModalProps {
  onClose: () => void;
}

interface Suggestion {
  title: string;
  synopsis: string;
}

const AiSuggestModal: React.FC<AiSuggestModalProps> = ({ onClose }) => {
  const [genre, setGenre] = useState('ไซไฟ');
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setSuggestions([]);

    try {
      const result = await generateMovieSuggestions(genre);
      setSuggestions(result);
    } catch (err) {
      setError('เกิดข้อผิดพลาดในการสร้างไอเดียหนัง โปรดลองอีกครั้ง');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-brand-gray rounded-lg shadow-2xl p-6 md:p-8 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white flex items-center">
             <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 mr-3 text-brand-red" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
            </svg>
            AI แนะนำหนัง
          </h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white text-3xl leading-none">&times;</button>
        </div>
        
        <p className="text-gray-300 mb-4">
          คิดไม่ออกว่าจะดูอะไร? ให้ Gemini AI ของเราช่วยสร้างไอเดียหนังใหม่ๆ ที่ไม่มีอยู่จริงให้คุณสิ! แค่เลือกแนวหนังที่คุณชอบ
        </p>

        <form onSubmit={handleSubmit}>
          <div className="flex flex-col sm:flex-row gap-4">
            <input 
              type="text"
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
              placeholder="ใส่แนวหนัง (เช่น คอมเมดี้, สยองขวัญ)"
              className="flex-grow bg-gray-700 text-white p-3 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-brand-red"
            />
            <button 
              type="submit"
              disabled={isLoading}
              className="bg-brand-red text-white px-6 py-3 rounded-md font-semibold hover:bg-red-700 transition-colors disabled:bg-gray-500 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {isLoading ? (
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : 'สร้างไอเดีย'}
            </button>
          </div>
        </form>

        {error && <p className="mt-4 text-red-400">{error}</p>}
        
        {suggestions.length > 0 && (
          <div className="mt-8 space-y-4">
            {suggestions.map((s, index) => (
              <div key={index} className="bg-gray-700 p-4 rounded-lg border-l-4 border-brand-red">
                <h4 className="font-bold text-lg text-white">{s.title}</h4>
                <p className="text-gray-300 mt-1">{s.synopsis}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AiSuggestModal;
