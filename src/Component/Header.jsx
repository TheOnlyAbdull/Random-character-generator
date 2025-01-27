import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="text-center">
      <Link to="/">
        <p className="mt-12 text-3xl font-normal px-4 py-2 my-5 inline-block rounded-2xl border-2 text-gray-200">
         <span>❔</span>RANDOM
        </p>
      </Link>
    </div>
  );
}

export default Header;
