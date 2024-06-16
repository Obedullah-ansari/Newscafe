import  logo from "../../assets/newspaper.png"

function Heronav() {
  return <>
  <nav className="navbar navbar-expand-lg bg-body-tertiary "
   data-bs-theme="dark"
  >
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><img  style={{width :"2.5rem"}} src={logo} alt="" /> NewsCafe</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link active" aria-current="page" href="#hero">Home</a>
        <a className="nav-link" href="#services">services</a>
        <a className="nav-link" href="#contact">contact us</a>
      
      </div>
    </div>
  
  </div>
</nav>
  </>;
}

export default Heronav;
