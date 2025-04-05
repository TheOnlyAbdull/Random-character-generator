import { useContext } from "react";
import { ProfileContext } from "../Pages/RandomUser";
import ClipLoader from "react-spinners/ClipLoader";

function Profile() {
  const { profileData, isLoading } = useContext(ProfileContext);
  return (
    <>
      {isLoading ? (
        <div className="w-full md:w-6/12 flex justify-center items-center">
          <ClipLoader color="#ffffff" size={50} />
        </div>
      ) : (
        <div className="w-full p-10 font-semibold text-xl md:w-6/12">
          <div className="w-full">
            <p className="mb-4">
              <span className=" w-5/12 inline-block text-purple-400">
                Name:
              </span>
              {/* <span className="text-white">{data.name.first} {data.name.last}</span> */}
              <span className="text-white">{profileData.disName}</span>
            </p>
            <p className="mb-4">
              <span className=" w-5/12 text-purple-400 inline-block">Age:</span>
              {/* <span className="text-white">{data.dob.age ? data.dob.age : age} years</span> */}
              <span className="text-white">{profileData.disAge}</span>
            </p>
            <p className="mb-4">
              <span className="w-5/12 text-purple-400 inline-block">
                Gender:
              </span>
              {/* <span className="text-white">{data.gender}</span> */}
              <span className="text-white capitalize">
                {profileData.disGender}
              </span>
            </p>
          </div>
          <div className="w-full">
            <p className="mb-4">
              <span className=" w-5/12 text-purple-400 inline-block">
                D.O.B:
              </span>
              {/* <span className="text-white">{data.dob.date.slice(0, 10)}</span> */}
              <span className="text-white">
                {profileData.disDOB.slice(0, 10)}
              </span>
            </p>
            <p className="mb-4">
              <span className="w-5/12 text-purple-400 inline-block">
                Country:
              </span>
              {/* <span className="text-white">{data.location.country}</span> */}
              <span className="text-white">{profileData.disCountry}</span>
            </p>
            <p className="mb-4">
              <span className="w-5/12 text-purple-400 inline-block">
                Address:
              </span>
              {/* <span className="text-white">{data.location.street.number} {data.location.street.name}</span> */}
              <span className="text-white">{profileData.disAddress}</span>
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default Profile;
