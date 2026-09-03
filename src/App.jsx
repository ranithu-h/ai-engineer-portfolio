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
          I am a computer science student focused on becoming an AI Engineer,
          with full stack development skills. I am interested in artificial
          intelligence, machine learning and building practical software.
        </p>

        <p>
          I enjoy turning ideas into working projects and exploring how AI can
          be used to solve real problems. My current work includes web
          development, machine learning and data driven applications.
        </p>

        <p>
          I am continuously building my technical skills through projects,
          coursework and hands-on experience, with the goal of creating useful
          and reliable AI systems.
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
          <a
            href="https://ranithu-h.github.io/SimultaneousCal/"
            target="_blank"
            rel="noreferrer"
          >
            Website
          </a>
        </article>

        <article>
          <img src={aimlImage} alt="AI and machine learning project" />
          <h3>AI and Machine Learning</h3>
          <p>
            A collection of projects exploring artificial intelligence,
            machine learning and data driven applications.
          </p>
          <a
            href="https://github.com/ranithu-h/project-01-biometric-data-analysis"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
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

        <form
          action="https://formspree.io/f/xwlkbqne"
          method="POST"
        >
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            required
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
          />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            required
          ></textarea>

          <button type="submit">Send Message</button>
        </form>

        <p>
          <a
            href="https://www.linkedin.com/in/ranithu-h/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </p>

        <p>
          <a
            href="https://github.com/ranithu-h"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
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