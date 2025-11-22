import { useState } from 'react'
import { stemText } from '../services/api'
import './Stemmer.css'

function Stemmer() {
  const [inputText, setInputText] = useState('')
  const [loading, setLoading] = useState(false)
  const [results, setResults] = useState(null)

  const examples = [
    'Aku mlaku ing dalan',
    'Dheweke lagi mangan sega',
    'Bocah kuwi seneng dolanan bal',
    'Wong-wong padha ngomong basa Jawa',
  ]

  const handleStem = async () => {
    if (!inputText.trim()) {
      alert('Please enter some Javanese text!')
      return
    }

    setLoading(true)
    setResults(null)

    try {
      const data = await stemText(inputText)
      
      setResults({
        original: data.original,
        stemmed: data.stemmed,
        words: data.words || []  // Array of {original, stemmed} pairs
      })
    } catch (error) {
      console.error('Error stemming text:', error)
      alert('An error occurred while stemming the text. Please try again.')
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
    <div className="stemmer">
      <section className="stemmer-hero">
        <div className="container">
          <h1 className="page-title">
            <span className="gradient-text">Javanese Stemmer</span> Tester
          </h1>
          <p className="page-subtitle">Test the javanese-stemmer library with dictionary validation</p>
        </div>
      </section>

      <section className="stemmer-section">
        <div className="container">
          <div className="stemmer-container">
            <div className="stemmer-card">
              <div className="stemmer-header">
                <h2>Enter Javanese Text</h2>
                <p>Type or paste your Javanese text to see stemming results</p>
              </div>

              <div className="stemmer-input-section">
                <textarea
                  className="stemmer-textarea"
                  placeholder="Example: Aku mlaku ing dalan..."
                  rows="6"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                />

                <div className="stemmer-actions">
                  <button onClick={handleStem} className="btn btn-primary btn-large" disabled={loading}>
                    <span className="btn-icon">🔍</span>
                    {loading ? 'Stemming...' : 'Stem Text'}
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
                        onClick={() => handleExampleClick(example)}
                      >
                        {example}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {loading && (
                <div className="loading-state">
                  <div className="spinner"></div>
                  <p>Stemming your text...</p>
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
                      Using <code>javanese-stemmer</code> with dictionary validation
                    </p>
                    <div className="stemming-display">
                      <div className="text-box">
                        <div className="text-box-label">Original Text:</div>
                        <div className="text-box-content">{results.original}</div>
                      </div>
                      <div className="arrow-down">↓</div>
                      <div className="text-box">
                        <div className="text-box-label">Stemmed Text:</div>
                        <div className="text-box-content">{results.stemmed}</div>
                      </div>
                    </div>
                  </div>

                  {/* Word-by-Word Analysis */}
                  {results.words && results.words.length > 0 && (
                    <div className="result-card">
                      <h3 className="result-title">
                        <span className="result-icon">📊</span>
                        Word-by-Word Analysis
                      </h3>
                      <div className="word-analysis">
                        {results.words.map((word, index) => (
                          <div key={index} className="word-item">
                            <div className="word-original">{word.original}</div>
                            <div className="word-arrow">→</div>
                            <div className="word-stemmed">{word.stemmed}</div>
                            {word.original.toLowerCase() === word.stemmed.toLowerCase() && (
                              <span className="word-badge unchanged">No change</span>
                            )}
                            {word.original.toLowerCase() !== word.stemmed.toLowerCase() && (
                              <span className="word-badge changed">Stemmed</span>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Technology Info */}
                  <div className="tech-info">
                    <h4>🔧 How It Works:</h4>
                    <ul>
                      <li>
                        <strong>Library:</strong> <code>javanese-stemmer</code> - Morphological analyzer for Javanese
                      </li>
                      <li>
                        <strong>Dictionary:</strong> Validates stems against 1,870+ Javanese root words
                      </li>
                      <li>
                        <strong>Affixes:</strong> Handles prefixes, suffixes, and infixes
                      </li>
                      <li>
                        <strong>Smart Fallback:</strong> Returns original word if no valid stem found
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

export default Stemmer