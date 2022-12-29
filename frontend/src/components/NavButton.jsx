const NavButton = ({text}) => {
  return (
    <button className="bg-navbtn text-white hover:bg-darkbtn focus:ring-4 focus:outline-none focus:ring-navbtn font-medium rounded-lg text-base px-6 py-3.5 text-center">{text}</button>
  )
}

export default NavButton