import React, { useState } from 'react';

const FloatingChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'bot', text: '🌿 Ask me anything about herbs or gardening!' }
  ]);
  const [userInput, setUserInput] = useState('');

  const toggleChat = () => setIsOpen(!isOpen);

  const handleSend = () => {
    if (!userInput.trim()) return;
    const userMsg = { sender: 'user', text: userInput };
    const botReply = getBotResponse(userInput);
    setMessages((prev) => [...prev, userMsg, botReply]);
    setUserInput('');
  };

  const getBotResponse = (msg) => {
    const text = msg.toLowerCase();
    if (text.includes('tulsi')) {
      return { sender: 'bot', text: '🌿 Tulsi helps with stress and immunity in Ayurveda.' };
    } else if (text.includes('mint')) {
      return { sender: 'bot', text: '🌱 Mint enjoys sunlight and regular watering every 2-3 days.' };
    } else if (text.includes('water')) {
      return { sender: 'bot', text: '💧 Water herbs when the topsoil is dry. Avoid soggy soil!' };
    } else {
      return { sender: 'bot', text: '🤔 I don’t know that yet. Try asking about Tulsi or Mint!' };
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <div className="w-80 bg-[#B8D8B3] rounded-lg shadow-lg border border-[#4C9A2A] flex flex-col overflow-hidden">
          <div className="p-4 h-64 overflow-y-auto text-[#1B4332] font-medium">
            {messages.map((msg, index) => (
              <div key={index} className="mb-3">
                <strong>{msg.sender === 'bot' ? 'Bot' : 'You'}:</strong> {msg.text}
              </div>
            ))}
          </div>
          <div className="flex items-center p-3 border-t border-green-700 bg-[#B8D8B3]">
            <input
              type="text"
              className="flex-1 p-2 rounded border border-green-700 bg-white"
              placeholder="Ask me anything..."
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            />
            <button
              onClick={handleSend}
              className="ml-2 px-4 py-2 bg-green-700 text-white font-bold rounded hover:bg-green-800"
            >
              Send
            </button>
          </div>
        </div>
      )}
      <button
        onClick={toggleChat}
        className="mt-2 bg-green-700 hover:bg-green-800 text-white px-4 py-2 font-bold rounded shadow"
      >
        {isOpen ? '×' : '💬'}
      </button>
    </div>
  );
};

export default FloatingChat;
