import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-background"></div>
        <div className="container hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Emotion Detection in
              <span className="gradient-text"> Javanese Language</span>
            </h1>
            <p className="hero-subtitle">
              Discover emotions in traditional Javanese text using advanced AI and NLP technology
            </p>
            <p className="hero-description">
              Powered by BERT model and comprehensive Javanese stemmer based on the 1979 Javanese morphology guidebook.
            </p>
            <div className="hero-buttons">
              <Link to="/demo" className="btn btn-primary btn-large">
                <span className="btn-icon">🔍</span>
                Try Demo
              </Link>
              <Link to="/about" className="btn btn-secondary btn-large">
                Learn More
              </Link>
            </div>
          </div>
          <div className="hero-image">
            <div className="floating-card">
              <div className="card-emoji">😊</div>
              <div className="card-text">Seneng (Happy)</div>
            </div>
            <div className="floating-card delay-1">
              <div className="card-emoji">😢</div>
              <div className="card-text">Susah (Sad)</div>
            </div>
            <div className="floating-card delay-2">
              <div className="card-emoji">😠</div>
              <div className="card-text">Nesu (Angry)</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2 className="section-title">Why explore our website?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🤖</div>
              <h3>AI-Powered</h3>
              <p>Fine-tuned BERT model specifically trained for Javanese emotion detection</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📝</div>
              <h3>Advanced Stemming</h3>
              <p>Using javanese-stemmer library with comprehensive morphological rules</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h3>High Accuracy</h3>
              <p>Trained on authentic Javanese text across all speech levels</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Fast Processing</h3>
              <p>Real-time emotion analysis with instant results</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <div className="cta-card">
            <h2>Ready to Try?</h2>
            <p>Experience the power of AI-driven Javanese emotion detection</p>
            <Link to="/demo" className="btn btn-primary btn-large">
              Get Started
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
