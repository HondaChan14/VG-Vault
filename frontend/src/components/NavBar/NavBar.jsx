import NavButton from "../NavButton"

const NavBar = () => {
  return (
    <nav>
      <div className="navbar fixed bg-background py-5 px-8">

        {/* NavBar Logo */}
        <div className="flex-1">
          <a className="btn btn-circle"><img src="./images/logo.png" alt="Website logo of a controller" /></a>
        </div>

        {/* Sub Buttons */}
        <div>
          <ul className="flex space-x-4 px-1">
            <li><NavButton text="Sign In" /></li>
            <li><NavButton text="Sign Up" /></li>
          </ul>
        </div>

      </div>
    </nav>
  )
}

export default NavBar