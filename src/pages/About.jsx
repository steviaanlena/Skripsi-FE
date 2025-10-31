import './About.css'

function About() {
  const speechLevels = [
    {
      id: 'ngoko',
      icon: '🗣️',
      title: 'Ngoko Lugu',
      badge: 'Informal',
      description: 'The most casual form of Javanese, used among close friends, family members of equal or lower status, and in informal situations.',
      example: 'Aku mangan sega (I eat rice)',
      characteristics: ['Most common', 'Between friends', 'Casual']
    },
    {
      id: 'ngoko-alus',
      icon: '💬',
      title: 'Ngoko Alus',
      badge: 'Semi-formal',
      description: 'Ngoko vocabulary with some Krama words, showing respect while maintaining familiarity. Used when talking to elders in casual settings.',
      example: 'Aku nedha sega (I eat rice - more polite)',
      characteristics: ['Mixed level', 'To elders', 'Respectful']
    },
    {
      id: 'krama',
      icon: '🎭',
      title: 'Krama Lugu',
      badge: 'Formal',
      description: 'Formal language used to show respect. Common in formal situations, speaking to strangers, or people of higher social status.',
      example: 'Kula nedha sekul (I eat rice - formal)',
      characteristics: ['Formal', 'Respectful', 'Standard']
    },
    {
      id: 'krama-alus',
      icon: '👑',
      title: 'Krama Alus (Krama Inggil)',
      badge: 'Very Formal',
      description: 'The highest level of politeness, using honorific vocabulary. Used when speaking about or to people of very high status, or in very formal ceremonies.',
      example: 'Kula dhahar sekul (I eat rice - very formal)',
      characteristics: ['Highest respect', 'Ceremonial', 'Royal']
    }
  ]

  const comparisonData = [
    { english: 'I', ngoko: 'aku', ngokoAlus: 'aku', krama: 'kula', kramaAlus: 'kula' },
    { english: 'eat', ngoko: 'mangan', ngokoAlus: 'nedha', krama: 'nedha', kramaAlus: 'dhahar' },
    { english: 'rice', ngoko: 'sega', ngokoAlus: 'sega', krama: 'sekul', kramaAlus: 'sekul' },
    { english: 'go', ngoko: 'lunga', ngokoAlus: 'tindak', krama: 'tindak', kramaAlus: 'kesah' },
    { english: 'know', ngoko: 'ngerti', ngokoAlus: 'sumerep', krama: 'sumerep', kramaAlus: 'uninga' },
  ]

  return (
    <div className="about">
      <section className="about-hero">
        <div className="container">
          <h1 className="page-title">
            Understanding <span className="gradient-text">Javanese Language</span>
          </h1>
          <p className="page-subtitle">Explore the rich linguistic hierarchy of Basa Jawa</p>
        </div>
      </section>

      <section className="about-intro">
        <div className="container">
          <div className="intro-card">
            <div className="intro-icon">📚</div>
            <h2>About Javanese</h2>
            <p>
              Javanese (Basa Jawa) is spoken by over 80 million people, primarily in Central and East Java, Indonesia. 
              It's one of the most widely spoken languages in the world with a unique speech level system that reflects 
              social hierarchy and politeness. This sophisticated linguistic feature makes Javanese particularly interesting 
              for natural language processing and emotion detection.
            </p>
          </div>
        </div>
      </section>

      <section className="speech-levels">
        <div className="container">
          <h2 className="section-title">Speech Levels (Unggah-Ungguh)</h2>
          <p className="section-description">
            Javanese has a sophisticated system of speech levels that reflect social hierarchy and politeness.
          </p>
          
          <div className="levels-grid">
            {speechLevels.map((level) => (
              <div key={level.id} className="level-card">
                <div className={`level-header ${level.id}`}>
                  <div className="level-icon">{level.icon}</div>
                  <h3>{level.title}</h3>
                  <span className="level-badge">{level.badge}</span>
                </div>
                <div className="level-content">
                  <p className="level-description">{level.description}</p>
                  <div className="example-box">
                    <div className="example-label">Example:</div>
                    <p className="example-text">{level.example}</p>
                  </div>
                  <div className="characteristics">
                    {level.characteristics.map((char, index) => (
                      <span key={index} className="char-tag">{char}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="comparison">
        <div className="container">
          <div className="comparison-section">
            <h3 className="comparison-title">Quick Comparison</h3>
            <div className="comparison-table">
              <table>
                <thead>
                  <tr>
                    <th>English</th>
                    <th>Ngoko Lugu</th>
                    <th>Ngoko Alus</th>
                    <th>Krama Lugu</th>
                    <th>Krama Alus</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, index) => (
                    <tr key={index}>
                      <td>{row.english}</td>
                      <td>{row.ngoko}</td>
                      <td>{row.ngokoAlus}</td>
                      <td>{row.krama}</td>
                      <td>{row.kramaAlus}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
