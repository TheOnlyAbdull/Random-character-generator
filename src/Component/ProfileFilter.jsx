import { useContext } from "react";
import { ProfileContext } from "../Pages/RandomUser";

function ProfileFilter() {
  const { age, setAge, country, setCountry, gender, setGender, fetchDetails } = useContext(ProfileContext);
//   console.log(age)


  return (
    <div className="flex justify-center text-center gap-4 flex-wrap my-4 mt-6 px-4">
      <div>
        <label className="text-white mr-3" htmlFor="age">
          Age-range:
        </label>
        <select
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="rounded py-1 text-gray-800 bg-gray-200"
          name="age"
          disabled='true'
        >
          <option value="Random">Random</option>
          <option value={20}>20-35</option>
          <option value={35}>35-55</option>
          <option value={55}>55-70</option>
          <option value={70}>70-85</option>
        </select>
      </div>
      <div>
        <label className="text-white mr-3" htmlFor="gender">
          Gender:
        </label>
        <select
          onChange={(e) => setCountry(e.target.value)}
          className="rounded py-1 text-gray-800 bg-gray-200"
          name="gender"
          value={gender}
          disabled='true'
        >
          <option value="Random">Random</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
      <div>
        <label className="text-white mr-3" htmlFor="continent">
          Country:
        </label>
        <select
          className="rounded py-1 text-base text-gray-800 bg-gray-200"
          name="country"
          onChange={(e) => setGender(e.target.value)}
          value={country}
          disabled='true'
        >
          <option value="Random">Random</option>
          <option value="AU">Australia</option>
          <option value="BR">Brazil</option>
          <option value="CA">Canada</option>
          <option value="CH">Switzerland</option>
          <option value="DE">Germany</option>
          <option value="DK">Denmark</option>
          <option value="ES">Spain</option>
          <option value="FI">Finland</option>
          <option value="FR">France</option>
          <option value="GB">United Kingdom</option>
          <option value="IE">Ireland</option>
          <option value="IN">India</option>
          <option value="IR">Iran</option>
          <option value="MX">Mexico</option>
          <option value="NL">Netherlands</option>
          <option value="NO">Norway</option>
          <option value="NZ">New Zealand</option>
          <option value="RS">Serbia</option>
          <option value="TR">Turkey</option>
          <option value="UA">Ukraine</option>
          <option value="US">United States</option>
        </select>
      </div>
      <div>
        <button
          onClick={() => {
            fetchDetails();
          }}
          className="border-2 border-gray-300 text-white cursor-pointer rounded-lg px-4 py-1 font-semibold bg-purple-700 text-base"
        >
          Re-generate 🔃
        </button>
      </div>
    </div>
  );
}

export default ProfileFilter;
