'use client'

import { useState, useRef, useEffect } from 'react'
import { getAIResponse, PROMPT_PROBES, type Message } from '@/lib/aiAssistant'
import './ChatWidget.css'

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus()
    }
  }, [isOpen])

  const addMessage = (role: 'user' | 'assistant', content: string) => {
    const newMessage: Message = {
      id: crypto.randomUUID(),
      role,
      content,
      timestamp: new Date(),
    }
    setMessages((prev) => [...prev, newMessage])
  }

  const handleSend = async (text?: string) => {
    const toSend = (text || inputValue).trim()
    if (!toSend) return

    addMessage('user', toSend)
    setInputValue('')
    setIsTyping(true)

    try {
      const response = await getAIResponse(toSend, messages)
      addMessage('assistant', response)
    } catch {
      addMessage(
        'assistant',
        "I'm sorry, I couldn't process that. Please try again or rephrase your question."
      )
    } finally {
      setIsTyping(false)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  const handleProbeClick = (probe: string) => {
    handleSend(probe)
  }

  return (
    <>
      <button
        className="chat-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
      >
        {isOpen ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        )}
      </button>

      {isOpen && (
        <div className="chat-panel">
          <div className="chat-header">
            <div className="chat-header-content">
              <div className="chat-avatar" aria-hidden>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 16v-4M12 8h.01" />
                </svg>
              </div>
              <div>
                <h2 className="chat-title">Platform Assistant</h2>
                <p className="chat-subtitle">Ask me anything about the Creator Revenue Engine</p>
              </div>
            </div>
          </div>

          <div className="chat-messages">
            {messages.length === 0 ? (
              <div className="chat-welcome">
                <p className="welcome-text">Hi! I'm your platform assistant. I can help you understand the Creator White Label Revenue Engine, guide you through features, and answer questions about monetization tools.</p>
                <p className="probes-label">Try asking:</p>
                <div className="prompt-probes">
                  {PROMPT_PROBES.map((probe, i) => (
                    <button
                      key={i}
                      className="probe-btn"
                      onClick={() => handleProbeClick(probe)}
                    >
                      {probe}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <>
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`message message--${msg.role}`}
                  >
                    {msg.role === 'assistant' && (
                      <div className="message-avatar message-avatar--assistant" aria-hidden>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="12" cy="12" r="10" />
                          <path d="M12 16v-4M12 8h.01" />
                        </svg>
                      </div>
                    )}
                    <div className="message-bubble">
                      <p className="message-content">{msg.content}</p>
                    </div>
                  </div>
                ))}
                {isTyping && (
                  <div className="message message--assistant">
                    <div className="message-avatar message-avatar--assistant" aria-hidden>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 16v-4M12 8h.01" />
                      </svg>
                    </div>
                    <div className="message-bubble message-bubble--typing">
                      <span className="typing-dots">
                        <span></span><span></span><span></span>
                      </span>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </>
            )}
          </div>

          {messages.length > 0 && (
            <div className="chat-probes-inline">
              {PROMPT_PROBES.slice(0, 3).map((probe, i) => (
                <button
                  key={i}
                  className="probe-btn probe-btn--inline"
                  onClick={() => handleProbeClick(probe)}
                >
                  {probe}
                </button>
              ))}
            </div>
          )}

          <div className="chat-input-wrap">
            <input
              ref={inputRef}
              type="text"
              className="chat-input"
              placeholder="Ask a question about the platform..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              disabled={isTyping}
            />
            <button
              className="chat-send"
              onClick={() => handleSend()}
              disabled={!inputValue.trim() || isTyping}
              aria-label="Send message"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  )
}
