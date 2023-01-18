import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="w-[1200px] flex fixed top-3 flex-row items-center justify-between">
      <Link className="flex justify-start items-center" to="/">
        <img className="w-20 h-full mr-8 object-cover" src={logo} alt="" />
        <h1 className="text-4xl font-bold text-white mt-3">PhotoChain</h1>
      </Link>

      {/* Only display when connected to wallet: Replace false with connected state */}

      {false ? (
        <button className="bg-white py-1.5 px-4 rounded-full glow-on-hover">
          <p className="text-transparent tracking-wider text-lg font-semibold">
            Disconnect
          </p>
        </button>
      ) : (
        ""
      )}
    </div>
  );
};

export default Header;
