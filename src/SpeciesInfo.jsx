import { useState, useEffect } from 'react'

function SpeciesInfo() {
  const [taxon, setTaxon] = useState(null)

  useEffect(() => {
    fetch('https://api.inaturalist.org/v2/taxa/4328?fields=all')
      .then(res => res.json())
      .then(data => setTaxon(data.results[0]))
  }, [])

  if (!taxon) return <div>Loading...</div>

  const iucnStatus = taxon.conservation_statuses?.find(
    s => s.authority === 'IUCN Red List'
  )

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
        <img 
          src={taxon.default_photo?.medium_url} 
          alt={taxon.preferred_common_name}
          style={{ width: '100%', borderRadius: '8px', marginTop: '12px' }}
        />
        <p style={{ marginTop: '16px', lineHeight: '1.6', fontSize: '15px' }}>
          {taxon.wikipedia_summary}
        </p>
        {iucnStatus && (
          <div style={{ marginTop: '16px', padding: '10px 14px', backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
            <strong>Conservation status:</strong> {iucnStatus.status}
          </div>
        )}
      </div>
  
    </div>
  )
}

export default SpeciesInfo