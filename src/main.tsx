import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

function App() {
  return (
    <main>
      <header className="site-header">
        <div className="container nav-wrap">
          <a className="brand" href="#home">
            Thais Mota Vianna
          </a>
          <nav aria-label="Menu principal">
            <ul className="menu-list">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#como-fazemos">Como fazemos</a>
              </li>
              <li>
                <a href="#solucoes">Solucoes</a>
              </li>
              <li>
                <a href="#sobre">Sobre</a>
              </li>
              <li>
                <a href="#contato">Contato</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <section className="hero-section" id="home">
        <div className="container hero-grid">
          <div className="hero-content">
            <p className="label">Estrategia de comunicacao juridica</p>
            <h1>Estrategia de comunicacao processual, linguagem simples e experiencia do juiz</h1>
            <p className="body-lg">
              Treinamentos e consultorias para advogados e escritorios que desejam
              desenvolver uma comunicacao mais clara, objetiva e estrategica com o
              judiciario.
            </p>
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
          <div className="challenge-title-column">
            <p className="label">O desafio</p>
            <h2>O juiz consegue entender exatamente o que esta sendo pedido?</h2>
          </div>
          <div className="challenge-copy-column">
            <p className="body-lg challenge-copy">
              Muitas vezes, pecas juridicas focam excessivamente em doutrina e
              jurisprudencia, deixando os fatos e o pedido principal confusos ou perdidos em
              meio a paragrafos longos e linguagem rebuscada. Isso aumenta o custo cognitivo
              de quem le.
            </p>
            <p className="body-lg challenge-copy">
              Juizes e assessores lidam com um volume imenso de processos. Quando a peca nao
              e clara, o cerebro recorre a atalhos mentais, o que pode prejudicar a
              compreensao exata do direito do seu cliente.
            </p>
            <p className="body-lg challenge-copy">
              A fluencia cognitiva e essencial: quanto mais facil for processar a informacao,
              mais favoravel e verdadeira ela parecera, de modo que o juiz sinta seguranca na
              tomada de decisao.
            </p>
          </div>
        </div>
      </section>

      <section className="text-image-section context-section" id="contexto">
        <div className="container context-stack">
          <div className="context-content">
            <p className="label">Contexto</p>
            <h2>O judiciario esta mudando</h2>
            <p className="body-lg">
              O judiciario brasileiro esta passando por uma profunda transformacao
              tecnologica, com a implementacao de inteligencia artificial e sistemas que
              aceleram a tramitacao processual.
            </p>
            <p className="body-lg">
              O Pacto Nacional do Judiciario pela Linguagem Simples reforca a necessidade de
              uma comunicacao mais acessivel, direta e compreensivel para todos os atores do
              sistema de justica.
            </p>
          </div>
          <img
            className="context-image"
            src="/images/tech-no-judiciario.webp"
            alt="Tecnologia aplicada ao judiciario"
          />
        </div>
      </section>

      <section className="services-section" id="como-fazemos">
        <div className="container">
          <div className="services-intro">
            <p className="label">Como fazemos</p>
            <h2>Metodologia e pilares</h2>
            <span className="section-rule" aria-hidden="true" />
          </div>
          <div className="cards-grid">
            <article className="service-card">
              <div className="icon-wrapper">
                <img className="card-icon" src="/icons/estrategia.svg" alt="" />
              </div>
              <h3>Estrategia de comunicacao processual</h3>
              <p className="body-md">Aplicada a rotina real do judiciario.</p>
            </article>
            <article className="service-card">
              <div className="icon-wrapper">
                <img className="card-icon" src="/icons/linguagem-simples.svg" alt="" />
              </div>
              <h3>Linguagem simples</h3>
              <p className="body-md">
                Redacao clara, objetiva e concisa, de facil visualizacao.
              </p>
            </article>
            <article className="service-card">
              <div className="icon-wrapper">
                <img className="card-icon" src="/icons/organizacao.svg" alt="" />
              </div>
              <h3>Organizacao das pecas</h3>
              <p className="body-md">
                Introducao, desenvolvimento e conclusao, visibilidade dos pontos relevantes,
                organizacao estetica e identificacao documental.
              </p>
            </article>
            <article className="service-card">
              <div className="icon-wrapper">
                <img className="card-icon" src="/icons/narrativa.svg" alt="" />
              </div>
              <h3>Narrativa dos fatos relevantes</h3>
              <p className="body-md">
                Organizacao da informacao com foco no que efetivamente importa para o
                julgamento.
              </p>
            </article>
            <article className="service-card">
              <div className="icon-wrapper">
                <img className="card-icon" src="/icons/ux-juridico.svg" alt="" />
              </div>
              <h3>UX aplicado ao juridico</h3>
              <p className="body-md">
                Consistencia, visibilidade, restricao de informacoes e facilitacao da tomada
                de decisao.
              </p>
            </article>
            <article className="service-card">
              <div className="icon-wrapper">
                <img className="card-icon" src="/icons/experiencia-juiz.svg" alt="" />
              </div>
              <h3>Experiencia do juiz</h3>
              <p className="body-md">
                Comunicacao construida considerando o destinatario da informacao, o volume de
                trabalho e a jornada de leitura processual.
              </p>
            </article>
            <article className="service-card">
              <div className="icon-wrapper">
                <img className="card-icon" src="/icons/tomada-decisao.svg" alt="" />
              </div>
              <h3>Tomada de decisao facilitada</h3>
              <p className="body-md">
                Consistencia e restricao de dados irrelevantes para gerar fluencia cognitiva.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="solutions-section" id="solucoes">
        <div className="container">
          <div className="solutions-intro">
            <p className="label">Soluções</p>
            <h2>Vamos simplificar juntos?</h2>
          </div>
          <div className="solutions-grid">
            <article className="solution-card solution-card-primary">
              <p className="chip">Para Equipes</p>
              <h3>Treinamento para escritórios</h3>
              <p className="body-md">
                Treinamentos voltados a equipes e departamentos jurídicos interessados em
                desenvolver uma comunicação mais clara, estratégica e acessível.
              </p>
              <a href="#" className="learn-more">Saiba mais</a>
            </article>
            <article className="solution-card solution-card-secondary">
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
          <div className="results-title">
            <p className="label">Resultados</p>
            <h2>Possíveis ganhos para escritórios e advogados</h2>
          </div>
          <div className="results-items">
            <div className="result-item">
              <span className="result-number">1</span>
              <p className="body-md">Melhoria na qualidade técnica da redação</p>
            </div>
            <div className="result-item">
              <span className="result-number">2</span>
              <p className="body-md">Comunicação mais acessível ao juiz</p>
            </div>
            <div className="result-item">
              <span className="result-number">3</span>
              <p className="body-md">Aumento da clareza e objetividade das peças</p>
            </div>
            <div className="result-item">
              <span className="result-number">4</span>
              <p className="body-md">Melhor organização da argumentação</p>
            </div>
            <div className="result-item">
              <span className="result-number">5</span>
              <p className="body-md">Redução de ruídos na leitura processual</p>
            </div>
            <div className="result-item">
              <span className="result-number">6</span>
              <p className="body-md">Fortalecimento da comunicação com clientes</p>
            </div>
            <div className="result-item">
              <span className="result-number">7</span>
              <p className="body-md">Adaptação às novas diretrizes de linguagem simples</p>
            </div>
            <div className="result-item">
              <span className="result-number">8</span>
              <p className="body-md">Desenvolvimento de uma comunicação jurídica mais limpa e clara</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-section" id="sobre">
        <div className="container about-content">
          <div className="about-image">
            <img src="/images/Thais-Mota-Vianna.webp" alt="Thais Mota Vianna" />
          </div>
          <div className="about-text">
            <p className="label">Sobre</p>
            <h2>Thais Mota Vianna</h2>
            <p className="body-md">
              Advogada e assistente de desembargador, atua há mais de 13 anos na leitura e análise diária de
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

      <section className="cta-section" id="contato">
        <div className="container cta-card">
          <p className="label">Contato</p>
          <h2>Vamos agendar uma conversa</h2>
          <p className="body-md">
            Treinamentos e consultorias para desenvolver uma comunicacao processual mais
            estrategica e compreensivel.
          </p>
          <a className="primary-btn" href="mailto:contato@exemplo.com">
            Agendar a conversa
          </a>
        </div>
      </section>
      <footer className="site-footer">
        <div className="container">
          <p className="body-md">Thais Mota Vianna</p>
        </div>
      </footer>
    </main>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
