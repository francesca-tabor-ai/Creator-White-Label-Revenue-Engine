import ChatWidget from './components/ChatWidget'

function App() {
  return (
    <div style={{ minHeight: '100vh', padding: '2rem' }}>
      <header style={{ marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '1.75rem', fontWeight: 600, margin: 0 }}>
          Creator White Label Revenue Engine
        </h1>
        <p style={{ color: 'var(--color-text-muted)', marginTop: '0.5rem' }}>
          Monetization tools for agencies, MCNs, and creator coaches
        </p>
      </header>
      <main>
        <p style={{ maxWidth: '600px', color: 'var(--color-text-muted)' }}>
          Welcome to the platform. Have questions? Click the chat icon in the bottom right corner to get guidance from our AI assistant.
        </p>
      </main>
      <ChatWidget />
    </div>
  )
}

export default App
