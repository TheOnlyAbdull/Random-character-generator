import BgLayout from "../Component/BgLayout";
import Header from "../Component/Header";

function RandomUser() {
  return (
    <BgLayout height="">
      <Header />
      <div className="flex justify-center text-center gap-4 flex-wrap my-4 mt-6 px-4">
        <div>
          <label className="text-white mr-3" htmlFor="age">
            Age-range:
          </label>
          <select className="rounded py-1 text-gray-800 bg-gray-200" name="age">
            <option value="18-25">18-25</option>
            <option value="25-45">25-45</option>
            <option value="45-65">45-65</option>
            <option value="65-70">65-70</option>
          </select>
        </div>
        <div>
          <label className="text-white mr-3" htmlFor="gender">
            Gender:
          </label>
          <select
            className="rounded py-1 text-gray-800 bg-gray-200"
            name="gender"
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div>
          <label className="text-white mr-3" htmlFor="continent">
            Continent:
          </label>
          <select
            className="rounded py-1 text-base text-gray-800 bg-gray-200"
            name="continent"
          >
            <option value="africa">Africa</option>
            <option value="antarctica">Antarctica</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="north-america">North America</option>
            <option value="oceania">Oceania</option>
            <option value="south-america">South America</option>
          </select>
        </div>
        <div>
          <button className="border-2 border-gray-300 text-white rounded-lg px-4 py-1 font-semibold bg-purple-700 text-base">
            Re-generate 🔃
          </button>
        </div>
      </div>

      <div className="py-4 md:flex md:mx-32">
        <div className="w-full p-10 font-semibold text-xl md:w-6/12">
          <div className="w-full">
            <p className="mb-4">
              <span className=" w-5/12 inline-block text-purple-400">
                Name:
              </span>
              <span className="text-white">Johnathan Doe</span>
            </p>
            <p className="mb-4">
              <span className=" w-5/12 text-purple-400 inline-block">Age:</span>
              <span className="text-white">21 years</span>
            </p>
            <p className="mb-4">
              <span className="w-5/12 text-purple-400 inline-block">
                Gender:
              </span>
              <span className="text-white">Male</span>
            </p>
          </div>
          <div className="w-full">
            <p className="mb-4">
              <span className=" w-5/12 text-purple-400 inline-block">
                D.O.B:
              </span>
              <span className="text-white">12/11/2004</span>
            </p>
            <p className="mb-4">
              <span className="w-5/12 text-purple-400 inline-block">
                Country:
              </span>
              <span className="text-white">Nigeria</span>
            </p>
            <p className="mb-4">
              <span className="w-5/12 text-purple-400 inline-block">
                Occupation:
              </span>
              <span className="text-white">Developer</span>
            </p>
          </div>
        </div>
        <div className="border-2 mb-0 border-purple-500 rounded-2xl p-6 m-4 bg-slate-800 shadow-lg md:w-6/12">
          <p className="text-center font-bold text-2xl text-purple-400 mb-4">
            AI back story 🤖
          </p>
          <div className="text-gray-300 leading-relaxed">
            I’m Johnathan Doe, a 21-year-old developer from Nigeria. Born on
            December 11, 2004, I grew up fascinated by technology, spending
            countless nights coding and breaking things just to fix them again.
            My passion led me to build projects that solve real-world problems.
            When I’m not behind a screen, I’m exploring new ideas, gaming, or
            debating tech trends with friends. Every line of code I write brings
            me closer to shaping the future.
          </div>
        </div>
      </div>
    </BgLayout>
  );
}

export default RandomUser;
