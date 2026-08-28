import simcalImage from './assets/simcal.png'
import aimlImage from './assets/aiml.png'

function App() {
  return (
    <main>
      <header>
        <h1>Ranithu</h1>
        <p>AI Engineer with full stack development skills.</p>

        <nav>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section id="about">
        <h2>About</h2>
        <p>
          I am a computer science student interested in artificial intelligence,
          machine learning and full stack development. I enjoy building
          practical software projects and learning how AI systems work.
        </p>
      </section>

      <section id="projects">
        <h2>Projects</h2>

        <article>
          <img src={simcalImage} alt="SimultaneousCal project" />
          <h3>SimultaneousCal</h3>
          <p>
            A web based tool created to help students solve simultaneous
            equations more easily.
          </p>
          <a href="https://github.com/ranithu-h" target="_blank">
            GitHub
          </a>
        </article>

        <article>
          <img src={aimlImage} alt="AI and machine learning project" />
          <h3>AI and Machine Learning</h3>
          <p>
            A collection of projects exploring artificial intelligence,
            machine learning and data driven applications.
          </p>
        </article>
      </section>

      <section id="future">
        <h2>Future Work</h2>
        <p>
          This section will be expanded with future projects, technical
          articles and capstone work.
        </p>
      </section>

      <section id="contact">
        <h2>Contact</h2>

        <p>
          <a href="https://www.linkedin.com/" target="_blank">
            LinkedIn
          </a>
        </p>

        <p>
          <a href="https://github.com/ranithu-h" target="_blank">
            GitHub
          </a>
        </p>

        <p>
          <a href="#">
            CV
          </a>
        </p>

        <p>
          <a href="#">
            Booking
          </a>
        </p>
      </section>

      <footer>
        <p>© 2026 Ranithu</p>
      </footer>
    </main>
  )
}

export default App