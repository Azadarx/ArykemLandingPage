'use client';

import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User, AlertTriangle } from 'lucide-react';
import { 
  searchKnowledge, 
  getSuggestedQuestions, 
  checkEmergency,
  getAllProducts 
} from '@/lib/productKnowledgeSearch';

export default function ProductChatSupport() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    // Welcome message on first open
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          id: Date.now(),
          type: 'bot',
          content: 'Hello! I\'m the Arykem Product Knowledge Assistant. I can help you understand our products, ingredients, and scientific information. How can I assist you today?',
          timestamp: new Date()
        }
      ]);
    }
  }, [isOpen, messages.length]);

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const userMessage = {
      id: Date.now(),
      type: 'user',
      content: inputValue,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate thinking delay
    await new Promise(resolve => setTimeout(resolve, 500));

    // Check for emergency first
    const emergencyCheck = checkEmergency(inputValue);
    if (emergencyCheck.isEmergency) {
      const botMessage = {
        id: Date.now() + 1,
        type: 'bot',
        content: emergencyCheck.response,
        isEmergency: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
      return;
    }

    // Search knowledge base
    const result = searchKnowledge(inputValue);

    const botMessage = {
      id: Date.now() + 1,
      type: 'bot',
      content: result.response,
      confidence: result.confidence,
      category: result.category,
      productName: result.productName,
      relatedQuestions: result.relatedQuestions,
      suggestions: result.suggestions,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, botMessage]);
    setIsTyping(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setInputValue(suggestion);
    inputRef.current?.focus();
  };

  const suggestedQuestions = getSuggestedQuestions();

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[var(--botanical)] hover:bg-[var(--charcoal)] text-white rounded-full shadow-lg transition-all duration-300 flex items-center justify-center group"
        aria-label="Open Product Knowledge Chat"
      >
        {isOpen ? (
          <X size={24} className="transition-transform group-hover:rotate-90" />
        ) : (
          <MessageCircle size={24} className="transition-transform group-hover:scale-110" />
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div 
          className="fixed bottom-24 right-6 z-50 w-full max-w-md bg-white border-2 border-[var(--soft-grey)] shadow-2xl overflow-hidden"
          style={{
            height: 'min(600px, calc(100vh - 140px))',
            maxHeight: '600px'
          }}
        >
          {/* Header */}
          <div className="bg-[var(--charcoal)] text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[var(--botanical)] rounded-full flex items-center justify-center">
                <Bot size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-base">Arykem Assistant</h3>
                <p className="text-xs text-white/70">Product Knowledge Support</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/70 hover:text-white transition-colors"
              aria-label="Close chat"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[var(--ivory)]" style={{ height: 'calc(100% - 180px)' }}>
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-3 ${message.type === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
              >
                {/* Avatar */}
                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                  message.type === 'user' 
                    ? 'bg-[var(--botanical)]' 
                    : message.isEmergency 
                    ? 'bg-red-500' 
                    : 'bg-[var(--charcoal)]'
                }`}>
                  {message.type === 'user' ? (
                    <User size={16} className="text-white" />
                  ) : message.isEmergency ? (
                    <AlertTriangle size={16} className="text-white" />
                  ) : (
                    <Bot size={16} className="text-white" />
                  )}
                </div>

                {/* Message Content */}
                <div className={`flex-1 max-w-[80%] ${message.type === 'user' ? 'items-end' : 'items-start'}`}>
                  <div
                    className={`p-3 rounded-lg ${
                      message.type === 'user'
                        ? 'bg-[var(--botanical)] text-white'
                        : message.isEmergency
                        ? 'bg-red-50 border-2 border-red-500 text-red-900'
                        : 'bg-white border border-[var(--soft-grey)] text-[var(--charcoal)]'
                    }`}
                  >
                    <p className="text-sm leading-relaxed whitespace-pre-line">{message.content}</p>
                    
                    {message.productName && (
                      <div className="mt-2 pt-2 border-t border-[var(--soft-grey)]">
                        <span className="text-xs text-[var(--medium-grey)]">
                          About: <span className="font-semibold">{message.productName}</span>
                        </span>
                      </div>
                    )}

                    {/* Related Questions */}
                    {message.relatedQuestions && message.relatedQuestions.length > 0 && (
                      <div className="mt-3 space-y-2">
                        <p className="text-xs text-[var(--medium-grey)] font-semibold">Related Questions:</p>
                        {message.relatedQuestions.map((q, index) => (
                          <button
                            key={index}
                            onClick={() => handleSuggestionClick(q)}
                            className="block w-full text-left text-xs p-2 bg-[var(--ivory)] hover:bg-[var(--botanical)]/10 border border-[var(--soft-grey)] rounded transition-colors"
                          >
                            {q}
                          </button>
                        ))}
                      </div>
                    )}

                    {/* Suggestions for unknown queries */}
                    {message.suggestions && message.suggestions.length > 0 && (
                      <div className="mt-3 space-y-2">
                        <p className="text-xs text-[var(--medium-grey)] font-semibold">Try asking:</p>
                        <div className="grid grid-cols-1 gap-1">
                          {message.suggestions.slice(0, 4).map((s, index) => (
                            <button
                              key={index}
                              onClick={() => handleSuggestionClick(s)}
                              className="text-left text-xs p-2 bg-[var(--ivory)] hover:bg-[var(--botanical)]/10 border border-[var(--soft-grey)] rounded transition-colors"
                            >
                              {s}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                  <span className="text-xs text-[var(--medium-grey)] mt-1 block">
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--charcoal)] flex items-center justify-center">
                  <Bot size={16} className="text-white" />
                </div>
                <div className="bg-white border border-[var(--soft-grey)] p-3 rounded-lg">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-[var(--medium-grey)] rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <div className="w-2 h-2 bg-[var(--medium-grey)] rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <div className="w-2 h-2 bg-[var(--medium-grey)] rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Suggested Questions (when no messages) */}
          {messages.length === 1 && (
            <div className="p-4 bg-white border-t border-[var(--soft-grey)]">
              <p className="text-xs text-[var(--medium-grey)] mb-2 font-semibold">Quick Questions:</p>
              <div className="flex flex-wrap gap-2">
                {suggestedQuestions.slice(0, 4).map((q, index) => (
                  <button
                    key={index}
                    onClick={() => handleSuggestionClick(q)}
                    className="text-xs px-3 py-1.5 bg-[var(--ivory)] hover:bg-[var(--botanical)]/10 border border-[var(--soft-grey)] rounded-full transition-colors"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input Area */}
          <div className="p-4 bg-white border-t-2 border-[var(--soft-grey)]">
            <div className="flex gap-2">
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about our products..."
                className="flex-1 px-4 py-2 border border-[var(--soft-grey)] focus:border-[var(--botanical)] focus:outline-none text-sm"
                disabled={isTyping}
              />
              <button
                onClick={handleSend}
                disabled={!inputValue.trim() || isTyping}
                className="px-4 py-2 bg-[var(--botanical)] hover:bg-[var(--charcoal)] text-white disabled:bg-[var(--soft-grey)] disabled:cursor-not-allowed transition-colors flex items-center justify-center"
                aria-label="Send message"
              >
                <Send size={18} />
              </button>
            </div>
            <p className="text-xs text-[var(--medium-grey)] mt-2 text-center">
              General information only • Not medical advice
            </p>
          </div>
        </div>
      )}
    </>
  );
}
