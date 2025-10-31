import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Javanese Emotion Detection</h4>
            <p>AI-powered emotion analysis for Javanese language text</p>
          </div>
          <div className="footer-section">
            <h4>Technology</h4>
            <ul>
              <li>
                <a 
                  href="https://pypi.org/project/javanese-stemmer/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  javanese-stemmer
                </a>
              </li>
              <li>BERT Model</li>
              <li>React + Vite</li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Resources</h4>
            <ul>
              <li><a href="/about">About Javanese</a></li>
              <li><a href="/demo">Try Demo</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Javanese Emotion Detection. Built with ❤️ for Basa Jawa</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
