import { useState, useEffect } from 'react'

function TaxonHeader() {
  const [taxon, setTaxon] = useState(null)

  useEffect(() => {
    fetch('https://api.inaturalist.org/v2/taxa/4328?fields=all')
      .then(res => res.json())
      .then(data => setTaxon(data.results[0]))
  }, [])

  if (!taxon) return <div>Loading...</div>

  return (
    <div style={{ maxWidth: '480px', margin: '0 auto' }}>
    
      {/* Content */}
      <div style={{ padding: '16px' }}>
        <h1 style={{ fontSize: '24px', fontWeight: 'bold' }}>
          {taxon.preferred_common_name}
        </h1>
        <h2 style={{ fontStyle: 'italic', fontWeight: 'normal', fontSize: '15px', marginTop: '4px', color: '#666' }}>
          {taxon.name}
        </h2>
      </div>
    </div>
  )
}

export default TaxonHeader