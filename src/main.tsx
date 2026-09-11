import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { useEffect, useState } from 'react'
import './styles.css'

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const revealItems = document.querySelectorAll('[data-reveal]')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.18,
        rootMargin: '0px 0px -8% 0px',
      },
    )

    revealItems.forEach((item) => observer.observe(item))

    return () => observer.disconnect()
  }, [])

  const calculateYearsOfExperience = () => {
    const startDate = new Date(2013, 8, 1) // Setembro de 2013
    const today = new Date()
    let years = today.getFullYear() - startDate.getFullYear()
    const monthDiff = today.getMonth() - startDate.getMonth()
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < startDate.getDate())) {
      years--
    }
    
    return years
  }

  const handleMobileMenuItemClick = () => {
    setMobileMenuOpen(false)
  }

  return (
    <main>
      <header className="site-header">
        <div className="container nav-wrap">
          <a className="brand" href="#home">
            Thais Mota Vianna
          </a>
          <button 
            className="hamburger-menu" 
            aria-label="Menu"
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
          <nav aria-label="Menu principal" className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
            <ul className="menu-list">
              <li>
                <a href="#como-fazemos" onClick={handleMobileMenuItemClick}>como fazemos</a>
              </li>
              <li>
                <a href="#solucoes" onClick={handleMobileMenuItemClick}>soluções</a>
              </li>
              <li>
                <a href="#sobre" onClick={handleMobileMenuItemClick}>sobre</a>
              </li>
              <li>
                <a href="#contato" onClick={handleMobileMenuItemClick}>contato</a>
              </li>
            </ul>
            <div className="mobile-contact-links">
              <a className="footer-link-item" href="https://wa.me/5500000000000" aria-label="WhatsApp">
                <span className="footer-icon" aria-hidden="true">
                  <img src="/icons/whatsapp-icon.svg" alt="WhatsApp" style={{ width: '24px', height: '24px' }} />
                </span>
              </a>
              <a className="footer-link-item" href="mailto:contato@exemplo.com" aria-label="Email">
                <span className="footer-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" role="img">
                    <rect x="3.5" y="5.5" width="17" height="13" rx="2" fill="none" stroke="currentColor" strokeWidth="1.7" />
                    <path d="M4.5 7l7.5 6 7.5-6" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </a>
              <a className="footer-link-item" href="#" aria-label="LinkedIn">
                <span className="footer-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" role="img">
                    <rect x="4" y="4" width="16" height="16" rx="3" fill="none" stroke="currentColor" strokeWidth="1.7" />
                    <path d="M8 10v6" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                    <circle cx="8" cy="8" r="1" fill="currentColor" />
                    <path d="M12 16v-3.2c0-1.3.9-2.2 2-2.2s2 .9 2 2.2V16" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </a>
              <a className="footer-link-item" href="#" aria-label="Google">
                <span className="footer-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" role="img">
                    <path d="M20 12.2c0 4.6-3.1 7.8-7.8 7.8a8 8 0 1 1 0-16c2.2 0 4 .8 5.4 2.1l-2.2 2.1c-.8-.8-1.9-1.3-3.2-1.3-2.8 0-5 2.2-5 5.1s2.2 5.1 5 5.1c2.4 0 3.9-1.4 4.2-3.3h-4.2v-2.6H20v1Z" fill="currentColor" />
                  </svg>
                </span>
              </a>
            </div>
          </nav>
        </div>
      </header>

      <section className="hero-section" id="home">
        <div className="container hero-grid">
          <div className="hero-content" data-reveal>
            {/* <p className="label">Estrategia de comunicacao juridica</p> */}
            <h1>estratégia de comunicação processual, linguagem simples e experiência do juiz</h1>
            <p className="body-lg">
              Treinamentos e consultorias para advogados e escritórios que desejam
              desenvolver uma comunicação mais clara, objetiva e estratégica com o
              judiciário.
            </p>
            <div className="hero-note">
              <p><span className="hero-note-accent">✦</span> Thais Mota Vianna — mais de {calculateYearsOfExperience()} anos do lado de cá da caneta, analisando diariamente recursos, petições e manifestações das partes.</p>
            </div>
            <div className="hero-actions">
              <a className="primary-btn" href="#contato">
                Agendar conversa
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="text-section challenge-section" id="desafio">
        <div className="container challenge-grid">
          <div className="challenge-title-column" data-reveal>
            <p className="label">O desafio</p>
            <h2>o juiz consegue entender exatamente o que esta sendo pedido?</h2>
          </div>
          <div className="challenge-copy-column" data-reveal>
            
            <p className="body-lg challenge-copy">
             Muitas vezes as peças jurídicas estão mais preocupadas com teses jurídicas, citação de doutrina ou jurisprudência, quando os juízes precisam efetivamente entender o que aconteceu de fato e o que a parte pretende ao acionar o judiciário.
            </p>
            <p className="body-lg challenge-copy">
             Quando uma petição é prolixa, desorganizada ou saturada de doutrina, 
             ela impõe uma alta carga cognitiva ao julgador. 
             Esse excesso de esforço gera resistência involuntária, cansaço e ruídos na interpretação dos fatos.</p>
            <p className="body-lg challenge-copy">
              Por outro lado, uma estrutura narrativa limpa, 
              focada nos fatos essenciais e na lógica do pedido, 
              gera o que a psicologia chama de fluência cognitiva. Quanto mais fácil é processar uma informação, mais clara, familiar e persuasiva ela se torna.
            </p>
            <p className="body-lg challenge-copy">
              A estratégia de comunicação não substitui o direito, 
              mas remove a fricção da leitura, permitindo que o julgador 
              compreenda a causa com rapidez e sinta segurança na tomada de decisão.
            </p>
          </div>
        </div>
      </section>

      <section className="services-section" id="como-fazemos">
        <div className="container">
          <div className="services-intro" data-reveal>
            <p className="label">Como fazemos</p>
            <h2>metodologia e pilares</h2>
          </div>
          <div className="cards-grid">
            <article className="service-card" data-reveal>
              <div className="icon-wrapper">
                <img className="card-icon" src="/icons/estrategia.svg" alt="" />
              </div>
              <h3>estratégia de comunicação processual aplicada à rotina real do judiciário</h3>
              <p className="body-md">Aplicada a rotina real do judiciário.</p>
            </article>
            <article className="service-card" data-reveal>
              <div className="icon-wrapper">
                <img className="card-icon" src="/icons/linguagem-simples.svg" alt="" />
              </div>
              <h3>linguagem simples</h3>
              <p className="body-md">
                redação clara, objetiva e concisa, de fácil visualização
              </p>
            </article>
            <article className="service-card" data-reveal>
              <div className="icon-wrapper">
                <img className="card-icon" src="/icons/organizacao.svg" alt="" />
              </div>
              <h3>organização das peças</h3>
              <p className="body-md">
                introdução, desenvolvimento e conclusão, visibilidade dos pontos relevantes,
                organização estética e identificação documental
              </p>
            </article>
            <article className="service-card" data-reveal>
              <div className="icon-wrapper">
                <img className="card-icon" src="/icons/narrativa.svg" alt="" />
              </div>
              <h3>narrativa dos fatos relevantes</h3>
              <p className="body-md">
                organização da informação com foco no que efetivamente importa para o
                julgamento
              </p>
            </article>
            <article className="service-card" data-reveal>
              <div className="icon-wrapper">
                <img className="card-icon" src="/icons/ux-juridico.svg" alt="" />
              </div>
              <h3>ux aplicado ao juridico</h3>
              <p className="body-md">
                consistência, visibilidade, restrição de informações e facilitação da tomada de decisão
              </p>
            </article>
            <article className="service-card" data-reveal>
              <div className="icon-wrapper">
                <img className="card-icon" src="/icons/experiencia-juiz.svg" alt="" />
              </div>
              <h3>experiência do juiz</h3>
              <p className="body-md">
                comunicação construída considerando o destinatário da informação, o volume de
                trabalho e a jornada de leitura processual
              </p>
            </article>
            <article className="service-card" data-reveal>
              <div className="icon-wrapper">
                <img className="card-icon" src="/icons/tomada-decisao.svg" alt="" />
              </div>
              <h3>tomada de decisão facilitada</h3>
              <p className="body-md">
                consistência e restrição de dados irrelevantes para gerar fluência cognitiva
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="solutions-section" id="solucoes">
        <div className="container">
          <div className="solutions-intro" data-reveal>
            <p className="label">Soluções</p>
            <h2>vamos simplificar juntos?</h2>
          </div>
          <div className="solutions-grid">
            <article className="solution-card solution-card-primary" data-reveal>
              <p className="chip">Para Equipes</p>
              <h3>Treinamento para escritórios</h3>
              <p className="body-md">
                Treinamentos voltados a equipes e departamentos jurídicos interessados em
                desenvolver uma comunicação mais clara, estratégica e acessível.
              </p>
              <a href="#" className="learn-more">Saiba mais</a>
            </article>
            <article className="solution-card solution-card-secondary" data-reveal>
              <p className="chip">One-on-One</p>
              <h3>Consultoria individual para advogados</h3>
              <p className="body-md">
                Acompanhamento individual com análise prática de peças, revisão de linguagem,
                organização das informações e adaptação da comunicação ao contexto
                contemporâneo do judiciário.
              </p>
              <a href="#" className="learn-more">Saiba mais</a>
            </article>
          </div>
        </div>
      </section>

      <section className="results-section" id="resultados">
        <div className="container results-content">
          <div className="results-title" data-reveal>
            <p className="label">Resultados</p>
            <h2>possíveis ganhos para escritórios e advogados</h2>
          </div>
          <div className="results-items">
            <div className="result-item" data-reveal>
              <span className="result-number">1</span>
              <p className="body-md">Melhoria na qualidade técnica da redação</p>
            </div>
            <div className="result-item" data-reveal>
              <span className="result-number">2</span>
              <p className="body-md">Comunicação mais acessível ao juiz</p>
            </div>
            <div className="result-item" data-reveal>
              <span className="result-number">3</span>
              <p className="body-md">Aumento da clareza e objetividade das peças</p>
            </div>
            <div className="result-item" data-reveal>
              <span className="result-number">4</span>
              <p className="body-md">Melhor organização da argumentação</p>
            </div>
            <div className="result-item" data-reveal>
              <span className="result-number">5</span>
              <p className="body-md">Redução de ruídos na leitura processual</p>
            </div>
            <div className="result-item" data-reveal>
              <span className="result-number">6</span>
              <p className="body-md">Fortalecimento da comunicação com clientes</p>
            </div>
            <div className="result-item" data-reveal>
              <span className="result-number">7</span>
              <p className="body-md">Adaptação às novas diretrizes de linguagem simples</p>
            </div>
            <div className="result-item" data-reveal>
              <span className="result-number">8</span>
              <p className="body-md">Desenvolvimento de uma comunicação jurídica mais limpa e clara</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-section" id="sobre">
        <div className="container about-content">
          <div className="about-image" data-reveal>
            <img src="/images/Thais-Mota-Vianna.webp" alt="Thais Mota Vianna" />
          </div>
          <div className="about-text" data-reveal>
            <p className="label">Sobre</p>
            <h2>Thais Mota Vianna</h2>
            <p className="body-md">
              Advogada e assistente de desembargador, atua há mais de {calculateYearsOfExperience()} anos na leitura e análise diária de
              recursos, petições e manifestações das partes.
            </p>
            <p className="body-md">
              Desenvolveu uma observação prática sobre como a forma de organização da informação interfere
              diretamente na compreensão dos processos e na comunicação entre advogados e o judiciário.
            </p>
            <p className="body-md">
              A partir dos conceitos da psicologia cognitiva, utiliza a análise do processamento de dados como
              ferramenta para garantir a eficácia da comunicação. Compreende que o cérebro humano busca reduzir o
              esforço mental diante de grandes volumes de informação. Assim, o controle da carga cognitiva e a
              promoção da fluência na leitura eliminam ruídos no caminho, garantindo que a mensagem saia do
              advogado e chegue intacta ao julgador, sem distorções e ruídos no processo de compreensão.
            </p>
            <p className="body-md">
              Trabalha com linguagem simples aplicada ao jurídico contencioso, experiência do juiz e comunicação
              estratégica no contexto contemporâneo do judiciário.
            </p>
          </div>
        </div>
      </section>

      <section className="text-image-section context-section" id="contexto">
        <div className="container context-stack">
          <div className="context-content" data-reveal>
            <p className="label">Contexto</p>
            <h2>o judiciário está mudando</h2>
            <p className="body-lg">
              o pacto nacional do judiciário pela linguagem simples estabelece o 
              compromisso de adotar linguagem simples, direta e compreensível na produção das decisões
              judiciais e na comunicação geral com a sociedade.
            </p>
            <p className="body-lg">
              a transformação tecnológica, a IA e o alto volume de informações têm acelerado a necessidade de comunicações mais claras, breves, objetivas e efetivas.
            </p>
          </div>
          {/*
          <img
            className="context-image"
            src="/images/tech-no-judiciario.webp"
            alt="Tecnologia aplicada ao judiciario"
          />
          */}
        </div>
      </section>

      <section className="cta-section" id="contato">
        <div className="container cta-card" data-reveal>
          <p className="label">Contato</p>
          <h2>vamos conversar?</h2>
          <p className="body-md">
            sonho com regras claras, palavras precisas e verdades na mesa
          </p>
          <div className="footer-links" aria-label="Canais de contato">
            <a className="footer-link-item" href="https://wa.me/5500000000000" aria-label="WhatsApp">
              <span className="footer-icon" aria-hidden="true">
                <img src="/icons/whatsapp-icon.svg" alt="WhatsApp" style={{ width: '24px', height: '24px' }} />
              </span>
              <span className="footer-link-label">WHATSAPP</span>
            </a>
            <a className="footer-link-item" href="mailto:contato@exemplo.com" aria-label="Email">
              <span className="footer-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" role="img">
                  <rect x="3.5" y="5.5" width="17" height="13" rx="2" fill="none" stroke="currentColor" strokeWidth="1.7" />
                  <path d="M4.5 7l7.5 6 7.5-6" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span className="footer-link-label">E-MAIL</span>
            </a>
            <a className="footer-link-item" href="#" aria-label="LinkedIn">
              <span className="footer-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" role="img">
                  <rect x="4" y="4" width="16" height="16" rx="3" fill="none" stroke="currentColor" strokeWidth="1.7" />
                  <path d="M8 10v6" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                  <circle cx="8" cy="8" r="1" fill="currentColor" />
                  <path d="M12 16v-3.2c0-1.3.9-2.2 2-2.2s2 .9 2 2.2V16" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span className="footer-link-label">LINKEDIN</span>
            </a>
            <a className="footer-link-item" href="#" aria-label="Google">
              <span className="footer-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" role="img">
                  <path d="M20 12.2c0 4.6-3.1 7.8-7.8 7.8a8 8 0 1 1 0-16c2.2 0 4 .8 5.4 2.1l-2.2 2.1c-.8-.8-1.9-1.3-3.2-1.3-2.8 0-5 2.2-5 5.1s2.2 5.1 5 5.1c2.4 0 3.9-1.4 4.2-3.3h-4.2v-2.6H20v1Z" fill="currentColor" />
                </svg>
              </span>
              <span className="footer-link-label">GOOGLE</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
