export default function Keahlian() {
  const skills = ["HTML5", "CSS3", "JavaScript (ES6+)", "ReactJS", "Vite", "Git/GitHub"];

  return (
    <div className="keahlian-utama">
      <h4>Keahlian Utama</h4>
      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
        {skills.map((skill, index) => (
          <span key={index} style={{
            background: '#646cff',
            color: 'white',
            padding: '5px 10px',
            borderRadius: '15px',
            fontSize: '0.8rem'
          }}>
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}