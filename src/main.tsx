import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

function App() {
  return (
    <main className="page">
      <section className="hero">
        <p className="eyebrow">Site oficial</p>
        <h1>Thais Mota Vianna</h1>
        <p className="subtitle">Estrutura inicial pronta para receber conteudo.</p>
      </section>
    </main>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
