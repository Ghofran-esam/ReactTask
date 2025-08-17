import Style from'./navbar.module.css'
function Navbar(){
return <nav className={`${Style.navbackground} navbar py-3 navbar-expand-lg nav-backgound fixed-top` }>
  <div className="container  me-4 ">
    <a className={`${Style.start} navbar-brand`} href="#">START BOOTSRTAP</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse bg-primary position-relative" id="navbarSupportedContent">
      <ul className={`${Style.list} navbar-nav me-auto ps-0 ms-0 mb-2 mb-lg-0  position-absolute start-50`}>
        <li className="nav-item">
          <a className={` ${Style.portflio} nav-link active ms-3 px-3 ` } aria-current="page" href="#">PORTFOLIO</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active ms-3" href="#">ABOUT</a>
        </li>
         <li className="nav-item">
          <a className="nav-link active ms-3" href="#">CONTACT</a>
        </li>
      </ul>
    </div>

  </div>
</nav>


}
export default Navbar;