import { Link } from "react-router-dom";
import Header from "../Component/Header";
import BgLayout from "../Component/BgLayout";

function HomePage() {
  return (
    <BgLayout>
      <Header />
      <div className="px-5 text-center h-v my-8 mb-32 text-gray-300 md:w-7/12 md:mx-auto">
        <h1 className="text-5xl md:text-6xl">
          Unleash your imagination with random characters
        </h1>
        <h2 className="text-lg mt-8 md:text-xl">
          Generate unique character in an instant, with captivating back
          stories. Perfect anyone looking for a spark of creativity 🤖
        </h2>
        <button className="my-12 border-2 border-gray-300 cursor-pointer text-white rounded-lg inline-block px-8 py-2 font-semibold bg-purple-700">
          <Link to="RandomUser">Generate👨‍💻</Link>
        </button>
      </div>

      {/* <p className="text-center text-black font-medium">by TheOnlyAbdull ❤️</p> */}
    </BgLayout>
  );
}

export default HomePage;
