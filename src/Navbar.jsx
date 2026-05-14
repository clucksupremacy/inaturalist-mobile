function Navbar() {
  return (
    <>
     {/* <div style={{ backgroundColor: '#eee', padding: '12px 16px' }}>
        <span style={{ color: '#74ac00', fontWeight: 'bold', fontSize: '18px' }}>
          iNaturalist
        </span>
      </div> */}
      <nav style={{ backgroundColor: '#eee', padding: '12px 16px' }}>
        <div className="logonav">
            <img src="src/assets/logo.svg" style={{ width: '121px', height: '22px' }} />
        </div>
        <div className="searchnav">searchnav</div>
        <div className="mainnav">mainnav</div>
        <div className="usernav">usernav</div>
      </nav>
    </>
  )
}

export default Navbar