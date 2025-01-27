import BgLayout from "../Component/BgLayout";
import Header from "../Component/Header";

function RandomUser() {
  return (
    <BgLayout height='h-full'>
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
          <select className="rounded py-1 text-gray-800 bg-gray-200" name="gender">
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
            <button className="border-2 border-gray-300 text-white rounded-lg px-4 py-1 font-semibold bg-purple-700 text-base">Generate 🤖</button>
        </div>
      </div>

      <div className="py-4">
        <div className="w-full p-10 font-semibold text-xl">
          <div className="w-full">
            <p className="mb-4">
              <span className=" w-5/12 inline-block text-purple-400">
                Name:
              </span>
              <span className="text-white">Salaudeen Abdullah</span>
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
        <div className="border-2 mb-0 border-purple-500 rounded-2xl p-6 m-6 bg-slate-800 shadow-lg">
          <p className="text-center font-bold text-2xl text-purple-400 mb-4">AI back story 🤖</p>
          <div className="text-gray-300 leading-relaxed">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here, content
            here, making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for lorem ipsum will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like).
          </div>
        </div>
      </div>
    </BgLayout>
  );
}

export default RandomUser;
