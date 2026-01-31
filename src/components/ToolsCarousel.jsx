export function ToolsCarouselGrid() {
  const tools = [
    { name: "React", subtitle: "UI Library", icon: "devicon-react-original" },
    { name: "Vite", subtitle: "Build Tool", icon: "devicon-vitejs-plain" },
    {
      name: "Bootstrap",
      subtitle: "UI Framework",
      icon: "devicon-bootstrap-plain",
    },
    { name: "Node.js", subtitle: "Runtime", icon: "devicon-nodejs-plain" },
    {
      name: "Python",
      subtitle: "Scripting / Data",
      icon: "devicon-python-plain",
    },
    { name: "MySQL", subtitle: "Database", icon: "devicon-mysql-plain" },
    { name: "Git", subtitle: "Version Control", icon: "devicon-git-plain" },
    {
      name: "Azure DevOps",
      subtitle: "CI/CD",
      icon: "devicon-azuredevops-plain",
    },
    {
      name: "Salesforce",
      subtitle: "CRM Platform",
      icon: "devicon-salesforce-plain",
    },
    {
      name: "JavaScript",
      subtitle: "Language",
      icon: "devicon-javascript-plain",
    },
    { name: "HTML5", subtitle: "Markup", icon: "devicon-html5-plain" },
    { name: "CSS3", subtitle: "Styling", icon: "devicon-css3-plain" },
  ];

  // Make groups of 6 => each group renders as a 2x3 grid "page"
  const chunk = (arr, size) =>
    Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
      arr.slice(i * size, i * size + size),
    );

  const pages = chunk(tools, 6);
  const loopPages = [...pages, ...pages]; // duplicate for seamless scroll

  return (
    <section
      id="tools"
      className="tools-grid-strip"
      aria-label="Tools carousel"
    >
      <div className="tools-grid-strip__fade tools-grid-strip__fade--left" />
      <div className="tools-grid-strip__fade tools-grid-strip__fade--right" />

      <div className="tools-grid-strip__track">
        {loopPages.map((page, pageIdx) => (
          <div className="tools-grid-page" key={`page-${pageIdx}`}>
            {page.map((t) => (
              <div
                key={t.name}
                className="tool-tile tool-tile--compact"
                title={t.name}
              >
                <div className="tool-tile__icon">
                  <i className={t.icon} aria-hidden="true" />
                </div>
                <div className="tool-tile__text">
                  <div className="tool-tile__name">{t.name}</div>
                  <div className="tool-tile__sub">{t.subtitle}</div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
