/* eslint-disable jsx-a11y/anchor-is-valid */

const Header = ()=>{
    return (
        <div className="header-container">
          <header>
              <div>
           
              <img src='logo192.png' alt="" className="logo"/> 
              </div>
              <nav>
                  <ul className="primary-nav">
                      <li>
                          <a href="/">Home</a>
                      </li>

                      <li>
                          <a href="#">About</a>
                      </li>

                      <li>
                          <a href="#">Services</a>
                      </li>

                      <li>
                          <a href="#">Contact</a>
                      </li>
                  </ul>
              </nav>
             
          </header>
        </div>
    )
}


export default Header