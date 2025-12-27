import { useState } from 'react'
import { analyzeText } from '../services/api'
import './Demo.css'

function Demo() {
  const [inputText, setInputText] = useState('')
  const [loading, setLoading] = useState(false)
  const [results, setResults] = useState(null)

  const examples = [
    { text: 'Aku seneng banget hari iki!', emotion: 'happy', emoji: '😊' },
    { text: 'Aku sedih banget kancaku lunga', emotion: 'sad', emoji: '😢' },
    { text: 'Aku mangkel banget awakmu ngono!', emotion: 'angry', emoji: '😠' },
    { text: 'Aku wedi ndelok pilem horor', emotion: 'fear', emoji: '😨' },
  ]

  const emotionConfig = {
    happy: { emoji: '😊', name: 'Happy (Seneng)', color: '#FFB84D' },
    sad: { emoji: '😢', name: 'Sad (Susah)', color: '#6B7280' },
    angry: { emoji: '😠', name: 'Angry (Nesu)', color: '#EF4444' },
    fear: { emoji: '😨', name: 'Fear (Wedi)', color: '#8B5CF6' }
  }

  const neutralConfig = {
    emoji: '😐',
    name: 'Neutral',
    color: '#9CA3AF'
  }

  const detectNeutral = (scores) => {
    const values = Object.values(scores)
    const max = Math.max(...values)
    const min = Math.min(...values)
    const difference = max - min
    
    if (difference < 15) {
      return true
    }
    
    if (max < 35) {
      return true
    }
    
    return false
  }

  const handleAnalyze = async () => {
    if (!inputText.trim()) {
      alert('Please enter some Javanese text!')
      return
    }

    setLoading(true)
    setResults(null)

    try {
      const data = await analyzeText(inputText)
      
      const cleanScores = {
        happy: Number((data.scores.happy || 0).toFixed(2)),
        sad: Number((data.scores.sad || 0).toFixed(2)),
        angry: Number((data.scores.angry || 0).toFixed(2)),
        fear: Number((data.scores.fear || 0).toFixed(2))
      }
      

      const isNeutral = detectNeutral(cleanScores)
      
      if (isNeutral) {
        setResults({
          original: data.original,
          stemmed: data.stemmed,
          emotion: 'neutral',
          scores: cleanScores,
          isNeutral: true
        })
      } else {
        setResults({
          original: data.original,
          stemmed: data.stemmed,
          emotion: data.emotion,
          scores: cleanScores,
          confidence: data.confidence,
          isNeutral: false
        })
      }
    } catch (error) {
      console.error('Error analyzing text:', error)
      alert('An error occurred while analyzing the text. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleExampleClick = (exampleText) => {
    setInputText(exampleText)
  }

  const handleClear = () => {
    setInputText('')
    setResults(null)
  }

  return (
    <div className="demo">
      <section className="demo-hero">
        <div className="container">
          <h1 className="page-title">
            Try <span className="gradient-text">Emotion Detection</span>
          </h1>
          <p className="page-subtitle">Test our AI-powered Javanese emotion detection system</p>
        </div>
      </section>

      <section className="demo-section">
        <div className="container">
          <div className="demo-container">
            <div className="demo-card">
              <div className="demo-header">
                <h2>Enter Javanese Text</h2>
                <p>Type or paste your Javanese text below (any speech level)</p>
              </div>

              <div className="demo-input-section">
                <textarea
                  className="demo-textarea"
                  placeholder="Example: Aku seneng banget oleh hadiah saka kancaku..."
                  rows="6"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                />

                <div className="demo-actions">
                  <button onClick={handleAnalyze} className="btn btn-primary btn-large" disabled={loading}>
                    <span className="btn-icon">🔍</span>
                    {loading ? 'Analyzing...' : 'Analyze Emotion'}
                  </button>
                  <button onClick={handleClear} className="btn btn-secondary">
                    Clear
                  </button>
                </div>

                <div className="example-texts">
                  <p className="example-texts-label">Try these examples:</p>
                  <div className="example-chips">
                    {examples.map((example, index) => (
                      <button
                        key={index}
                        className="example-chip"
                        onClick={() => handleExampleClick(example.text)}
                      >
                        {example.emoji} {example.emotion.charAt(0).toUpperCase() + example.emotion.slice(1)}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {loading && (
                <div className="loading-state">
                  <div className="spinner"></div>
                  <p>Analyzing your text...</p>
                </div>
              )}

              {results && !loading && (
                <div className="results-section">
                  {/* Stemming Results */}
                  <div className="result-card">
                    <h3 className="result-title">
                      <span className="result-icon">📝</span>
                      Stemming Results
                    </h3>
                    <p className="result-info">
                      Using <code>javanese-stemmer</code> library
                    </p>
                    <div className="stemming-display">
                      <div className="text-box">
                        <div className="text-box-label">Original:</div>
                        <div className="text-box-content">{results.original}</div>
                      </div>
                      <div className="arrow-down">↓</div>
                      <div className="text-box">
                        <div className="text-box-label">Stemmed:</div>
                        <div className="text-box-content">{results.stemmed}</div>
                      </div>
                    </div>
                  </div>

                  {/* Emotion Detection Results */}
                  <div className="result-card">
                    <h3 className="result-title">
                      <span className="result-icon">🎭</span>
                      Emotion Detection Results
                    </h3>
                    <p className="result-info">Using fine-tuned BERT model</p>

                    <div className="emotion-result">
                      <div className="primary-emotion">
                        <div className="primary-emotion-emoji">
                          {results.isNeutral ? neutralConfig.emoji : emotionConfig[results.emotion]?.emoji}
                        </div>
                        <div className="primary-emotion-text">
                          <div className="primary-emotion-label">Detected Emotion</div>
                          <div className="primary-emotion-name">
                            {results.isNeutral ? neutralConfig.name : emotionConfig[results.emotion]?.name}
                          </div>
                          <div className="primary-emotion-confidence">
                            {results.confidence}% confidence
                          </div>
                          {results.isNeutral && (
                            <div className="neutral-note">
                              <small style={{ color: '#6B7280', marginTop: '0.5rem', display: 'block' }}>
                                (Emotions are too similar to determine a clear emotion)
                              </small>
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="emotion-bars">
                        {/* CRITICAL: Only iterate over emotionConfig keys (4 emotions only) */}
                        {Object.keys(emotionConfig).map((emotion) => {
                          const score = results.scores[emotion] || 0
                          return (
                            <div key={emotion} className="emotion-bar-item">
                              <div className="emotion-bar-label">
                                <span>
                                  {emotionConfig[emotion].emoji} {emotionConfig[emotion].name}
                                </span>
                                <span>{score}%</span>
                              </div>
                              <div className="emotion-bar-track">
                                <div
                                  className="emotion-bar-fill"
                                  style={{
                                    width: `${score}%`,
                                    background: `linear-gradient(90deg, ${emotionConfig[emotion].color}, ${emotionConfig[emotion].color}dd)`,
                                  }}
                                ></div>
                              </div>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Technology Info */}
                  <div className="tech-info">
                    <h4>🔧 Technology Stack:</h4>
                    <ul>
                      <li>
                        <strong>Stemmer:</strong> <code>javanese-stemmer</code> - Custom
                        morphological analyzer for Javanese
                      </li>
                      <li>
                        <strong>Model:</strong> Fine-tuned BERT for Javanese emotion
                        classification
                      </li>
                      <li>
                        <strong>Languages:</strong> Supports all Javanese speech levels (Ngoko &
                        Krama)
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Demo