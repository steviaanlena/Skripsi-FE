const API_BASE = 'https://skripsi-be-production-3b92.up.railway.app'

export async function analyzeText(text) {
  try {
    const response = await fetch(`${API_BASE}/analyze`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text }),
    })
    
    if (!response.ok) {
      throw new Error('API request failed')
    }
    
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error calling API:', error)
    throw error
  }
}

export async function stemText(text) {
  try {
    const response = await fetch(`${API_BASE}/stem`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text }),
    })
    
    if (!response.ok) {
      throw new Error('API request failed')
    }
    
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error calling API:', error)
    throw error
  }
}