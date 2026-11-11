import { useState } from "react";
import "./App.css";
import { NAV_ITEMS } from "./data";
import NavButton from "./components/NavButton";
import HomeSection from "./components/HomeSection";
import ProjectsSection from "./components/ProjectsSection";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";

function App() {
  const [active, setActive] = useState("home");
  const [isDark, setIsDark] = useState(() => window.matchMedia("(prefers-color-scheme: dark)").matches);

  function renderThemeToggle() {
    return (
      <button
        className="theme-toggle"
        type="button"
        onClick={() => setIsDark((current) => !current)}
        aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
        aria-pressed={isDark}
      >
        <span aria-hidden="true">{isDark ? "☀" : "☾"}</span>
        <span>{isDark ? "Light" : "Dark"} mode</span>
      </button>
    );
  }

  function renderSection() {
    if (active === "home") return <HomeSection goTo={setActive} />;
    if (active === "projects") return <ProjectsSection />;
    if (active === "about") return <AboutSection />;
    if (active === "contact") return <ContactSection />;
    return null;
  }

  return (
    <div className={`app${isDark ? " theme-dark" : " theme-light"}`}>
      <aside className="rail">
        <div>
          <div className="brand">
            <div className="mark">D</div>
            <div>
              <div className="brand-name">Damianne</div>
              <div className="brand-role">IT Student · CLSU</div>
            </div>
          </div>
          <nav className="nav">
            {NAV_ITEMS.map((item) => (
              <NavButton key={item.id} item={item} active={active === item.id} onSelect={setActive} />
            ))}
          </nav>
          {renderThemeToggle()}
        </div>
      </aside>

      <div>
        <div className="topnav">
          <div className="brand">
            <div className="mark">D</div>
            <div className="brand-name">Damianne</div>
          </div>
          {renderThemeToggle()}
        </div>
        <div className="topnav-scroll">
          {NAV_ITEMS.map((item) => (
            <NavButton key={item.id} item={item} active={active === item.id} onSelect={setActive} />
          ))}
        </div>

        <main key={active} className="section-enter">{renderSection()}</main>
      </div>
    </div>
  );
}

export default App;
