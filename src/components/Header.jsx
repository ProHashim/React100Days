/* eslint-disable jsx-a11y/anchor-is-valid */

const Header = () => {
    const disclaimer = document.getElementById("disclaimer")
    disclaimer.addEventListener("click", function () {

    })
    return (
        <div className="header-container">
            <header>
                <div>

                    <img src='logo192.png' alt="" className="logo" />
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

                        <li style={{
                            background: "#54B7D3",
                            padding: "5px 10px",
                            borderRadius: "10px"
                        }}
                            id="disclaimer">
                            <a href="#">Disclaimer</a>
                        </li>
                    </ul>
                </nav>

            </header>
        </div>
    )
}


export default Header