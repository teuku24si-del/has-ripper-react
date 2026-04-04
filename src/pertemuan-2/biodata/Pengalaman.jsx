export default function Pengalaman() {
  const projects = [
    { title: "Portofolio Pribadi", tech: "React, Vite" },
    { title: "Aplikasi Todo List", tech: "JavaScript, HTML/CSS" }
  ];

  return (
    <div className="pengalaman-singkat" style={{ margin: '20px 0' }}>
      <h4>Proyek Terbaru</h4>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {projects.map((proj, index) => (
          <li key={index} style={{ marginBottom: '10px' }}>
            <strong>{proj.title}</strong> - <small style={{ color: '#888' }}>({proj.tech})</small>
          </li>
        ))}
      </ul>
    </div>
  );
}