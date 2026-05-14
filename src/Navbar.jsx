function Navbar() {
  return (
    <>
      <nav style={{ backgroundColor: '#eee', padding: '12px 16px' }}>
        <div className="logonav">
            <img src="src/assets/logo.svg" style={{ width: '121px', height: '22px' }} />
        </div>
        <div className="searchnav">searchnav</div>
        <div className="mainnav">mainnav</div>
        <div className="usernav">usernav</div>
        <div>
            <i className="fa-solid fa-bars" style={{ color: 'rgb(0, 0, 0)' }}></i>
        </div>
      </nav>
    </>
  )
}

export default Navbar