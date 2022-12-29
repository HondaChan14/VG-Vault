import NavButton from "./NavButton";

const Hero = ({hero, alt}) => {
  return (
    <div className="hero min-h-screen ">
      <img className="xl:w-1/2 opacity-50" src={hero} alt={alt} />
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-6xl xl:text-8xl font-black text-primary outline-white">VG Vault</h1>
      <p className="mb-5 text-3xl font-bold">Keep track of your collection of nostalgia.</p>
      <NavButton text="Get Started" />
    </div>
  </div>
</div>
  )
}

export default Hero