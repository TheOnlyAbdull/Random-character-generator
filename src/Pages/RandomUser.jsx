import BgLayout from "../Component/BgLayout";
import Header from "../Component/Header";
import Profile from "../Component/Profile";
import BackStory from "../Component/BackStory";
// import { getDetails } from "../service/apiRandomUser";
// import { useLoaderData, useRevalidator } from "react-router-dom";
import { createContext, useEffect, useState } from "react";
import ProfileFilter from "../Component/ProfileFilter";
import { getDetails } from "../service/apiRandomUser";

export const ProfileContext = createContext();

function RandomUser() {
  const [age, setAge] = useState("Random");
  const [country, setCountry] = useState("Random");
  const [gender, setGender] = useState("Random");
  const [isLoading, setIsloading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [backStory, setBackStory] = useState("");


  const [profileData, setProfileData] = useState({
    disAge: "",
    disCountry: "",
    disGender: "",
    disName: "",
    disDOB: "",
    disAddress: "",
  });

  //Generate random age,
  // function getRandomAge(min) {
  //   const results = Math.floor(Math.random() * (min + 15 - min + 1) + min);
  //   // setAge(getRandomAge(Number(min)));
  //   setAge(results);
  //   // console.log(age)
  //   return results;
  // }

  async function fetchDetails() {
    // const data = await getDetails(age, gender, country);
    setErrorMsg(false);
    setIsloading(true);
    setBackStory("");

    try {
      const data = await getDetails(age, gender, country);
      if (data === "Error") {
        setErrorMsg("Error fetching data 😪");
        console.log("Error fetching data");
      } else {
        const res = data.results[0];
        console.log(res);
        setProfileData((prevData) => ({
          ...prevData,
          disAge: res.dob.age + " years",
          disCountry: res.location.country,
          disGender: res.gender,
          disName: `${res.name.first} ${res.name.last}`,
          disDOB: res.dob.date,
          disAddress: `${res.location.street.number} ${res.location.street.name}`,
        }));
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setErrorMsg('Something went wrong 😪');
    } finally {
      setIsloading(false);
    }
  }

  
  // console.log(profileData)
  useEffect(() => {
    fetchDetails();
  }, []);


  return (
    <ProfileContext.Provider
      value={{
        age,
        setAge,
        country,
        setCountry,
        gender,
        setGender,
        profileData,
        isLoading,
        errorMsg,
        fetchDetails,
        setBackStory,
        backStory
      }}
    >
      <BgLayout>
        <Header />
        <ProfileFilter />

        <div className="py-4 lg:flex md:mx-32">
          {/* <Profile results={results} age={age} /> */}
          <Profile />
          <BackStory />
        </div>
      </BgLayout>
    </ProfileContext.Provider>
  );
}

// const gen = "boy";

// export async function loader() {
//   const {} = useContext(ProfileContext);
//   const profile = await getDetails(gen);
//   return profile;
// }

export default RandomUser;
