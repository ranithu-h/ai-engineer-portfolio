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
          I am a Computer Science and AI student focused on becoming an AI Engineer,
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
       <a
  href="https://internship.flyrank.ai/verify?id=FR-D1-6E00C-80AB8&first_name=Ranithu"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Verify Ranithu's FlyRank AI Internship credential FR-D1-6E00C-80AB8"
  style={{
    boxSizing: "border-box",
    margin: "0",
    padding: "18px",
    border: "1px solid rgba(255,255,255,0.1)",
    background: "#051F21",
    textDecoration: "none",
    fontFamily: "-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif",
    fontStyle: "normal",
    lineHeight: "1.25",
    textTransform: "none",
    float: "none",
    WebkitFontSmoothing: "antialiased",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: "184px",
    height: "184px",
    borderRadius: "20px",
    boxShadow: "0 1px 2px rgba(0,0,0,0.35)"
  }}
>
  <span
    style={{
      margin: "0",
      padding: "0",
      border: "0",
      background: "none",
      color: "inherit",
      fontWeight: "400",
      fontStyle: "normal",
      letterSpacing: "normal",
      textTransform: "none",
      textDecoration: "none",
      whiteSpace: "normal",
      float: "none",
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between"
    }}
  >
    <svg
      width="34"
      height="34"
      viewBox="0 0 96 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
      style={{
        display: "block",
        flex: "none",
        opacity: "1",
        transform: "none",
        maxWidth: "none"
      }}
    ><rect width="96" height="96" rx="22" fill="#54E399" /><path d="M28.2354 74.2202V67.9039C29.6419 68.4369 31.3724 68.7055 33.4311 68.7055C35.3235 68.7055 36.8153 68.2396 37.8979 67.3079C38.9805 66.3762 39.9566 64.8695 40.8218 62.792L42.6887 58.3139L29.8976 29.2879C35.0038 29.2879 39.6028 32.3307 41.5294 36.9893L47.0746 50.3985L56.0126 28.6038C57.9221 23.9452 62.5168 20.894 67.6187 20.894L50.0795 63.5936C48.4556 67.5933 46.5205 70.5102 44.2743 72.3484C42.0281 74.1867 39.1169 75.1058 35.5451 75.1058C32.6212 75.1058 30.1875 74.812 28.2354 74.2244V74.2202Z" fill="#051F21" /></svg>
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
      style={{
        display: "block",
        flex: "none",
        opacity: "1",
        transform: "none",
        maxWidth: "none"
      }}
    ><circle cx="12" cy="12" r="10" stroke="#54E399" strokeWidth="1.5" /><path d="M7.9 12.3l2.8 2.8 5.4-5.8" stroke="#54E399" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
  </span>
  <span
    style={{
      margin: "0",
      padding: "0",
      border: "0",
      background: "none",
      color: "inherit",
      fontWeight: "400",
      fontStyle: "normal",
      letterSpacing: "normal",
      textTransform: "none",
      textDecoration: "none",
      whiteSpace: "normal",
      float: "none",
      display: "flex",
      flexDirection: "column",
      gap: "5px"
    }}
  >
    <span
      style={{
        margin: "0",
        padding: "0",
        border: "0",
        background: "none",
        color: "rgba(255,255,255,0.55)",
        fontWeight: "700",
        fontStyle: "normal",
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        textDecoration: "none",
        whiteSpace: "normal",
        float: "none",
        fontFamily: "ui-monospace,SFMono-Regular,Menlo,Consolas,monospace",
        fontSize: "8.5px"
      }}
    >FlyRank AI Internship</span>
    <span
      style={{
        margin: "0",
        padding: "0",
        border: "0",
        background: "none",
        color: "#FFFFFF",
        fontWeight: "600",
        fontStyle: "normal",
        letterSpacing: "-0.01em",
        textTransform: "none",
        textDecoration: "none",
        whiteSpace: "normal",
        float: "none",
        fontSize: "14px",
        lineHeight: "1.3"
      }}
    >Backend AI Engineering</span>
  </span>
  <span
    style={{
      margin: "0",
      padding: "0",
      border: "0",
      background: "none",
      color: "inherit",
      fontWeight: "400",
      fontStyle: "normal",
      letterSpacing: "normal",
      textTransform: "none",
      textDecoration: "none",
      whiteSpace: "normal",
      float: "none",
      display: "flex",
      flexDirection: "column",
      gap: "5px",
      paddingTop: "12px",
      borderTop: "1px solid rgba(255,255,255,0.1)"
    }}
  >
    <span
      style={{
        margin: "0",
        padding: "0",
        border: "0",
        background: "none",
        color: "#54E399",
        fontWeight: "400",
        fontStyle: "normal",
        letterSpacing: "normal",
        textTransform: "none",
        textDecoration: "none",
        whiteSpace: "normal",
        float: "none",
        fontFamily: "ui-monospace,SFMono-Regular,Menlo,Consolas,monospace",
        fontSize: "10.5px"
      }}
    >FR-D1-6E00C-80AB8</span>
    <span
      style={{
        margin: "0",
        padding: "0",
        border: "0",
        background: "none",
        color: "rgba(255,255,255,0.55)",
        fontWeight: "400",
        fontStyle: "normal",
        letterSpacing: "normal",
        textTransform: "none",
        textDecoration: "none",
        whiteSpace: "normal",
        float: "none",
        fontSize: "11.5px"
      }}
    >Verify credential ↗</span>
  </span>
</a>
      </footer>
    </main>
  )
}

export default App