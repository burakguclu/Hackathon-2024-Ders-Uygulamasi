import React, { useState } from 'react';
import '../css/Home.css';
import { GoogleGenerativeAI } from '@google/generative-ai';

const Home = () => {
  const [inputValue, setInputValue] = useState('');
  const [promptResponses, setPromptResponses] = useState([]);
  const [loading, setLoading] = useState(false);
  const genAI = new GoogleGenerativeAI("xxx");

  const handleInputChange = (e) => setInputValue(e.target.value);

  const getResponseForGivenPrompt = async () => {
    try {
      setLoading(true);
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });
      const result = await model.generateContent(inputValue);
      const response = result.response.text();

      setPromptResponses([...promptResponses, { question: inputValue, answer: response }]);
      setInputValue('');
      setLoading(false);
    } catch (error) {
      console.log("Something Went Wrong", error);
      setLoading(false);
    }
  };

  return (
    <div className="chat-body">
      <div className="chat-box">
        <div className="chat-messages">
          {loading ? (
            <div className="loading">Cevap yükleniyor...</div>
          ) : (
            promptResponses.map((item, index) => (
              <div key={index} className="message-pair">
                <div className="message user">{item.question}</div>
                <div className="message bot">{item.answer}</div>
              </div>
            ))
          )}
        </div>
        <div className="input-area">
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Bana bir şeyler sor..."
            className="chat-input"
          />
          <button onClick={getResponseForGivenPrompt} className="send-button">Gönder</button>
        </div>
      </div>
    </div>
  );
};

export default Home;