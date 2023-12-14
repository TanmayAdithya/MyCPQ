import logo from '../assets/MyCPQ Logo.png';
import HeroBtn from '../components/HeroBtn';

const LandingPage = () => {
  return (
    <div id="hero" className="flex flex-1 flex-col items-center">
      {/* Navbar */}
      <nav className="flex w-full justify-between box-border px-24 py-6 items-center">
        <a href="/">
          <img className="w-16 object-cover" src={logo} />
        </a>
        <div className="flex justify-center items-center">
          <HeroBtn title="GitHub" />
        </div>
      </nav>
      {/* Heading */}
      <div className="flex flex-col flex-1 justify-center items-center mt-24">
        <p className="my-6 drop-shadow-xl font-custom text-gray-600">
          An Open Source CPQ Software To Manage Your Business In A Heart Beat{' '}
        </p>
        <div className="flex flex-col justify-center items-center mb-8">
          <span className="text-8xl font-custom font-medium">
            Precision in Every Pixel,
          </span>
          <span className="text-8xl  font-custom font-medium">
            Excellence in Every Quote
          </span>
        </div>
        <HeroBtn title="Dashboard" />
      </div>
    </div>
  );
};

export default LandingPage;
