const testData = {
  age: [18, 25],
  gender: "male",
  continent: "africa",
};

function Profile() {
  return (
    <div className="w-full p-10 font-semibold text-xl md:w-6/12">
      <div className="w-full">
        <p className="mb-4">
          <span className=" w-5/12 inline-block text-purple-400">Name:</span>
          <span className="text-white">Johnathan Doe</span>
        </p>
        <p className="mb-4">
          <span className=" w-5/12 text-purple-400 inline-block">Age:</span>
          <span className="text-white">21 years</span>
        </p>
        <p className="mb-4">
          <span className="w-5/12 text-purple-400 inline-block">Gender:</span>
          <span className="text-white">Male</span>
        </p>
      </div>
      <div className="w-full">
        <p className="mb-4">
          <span className=" w-5/12 text-purple-400 inline-block">D.O.B:</span>
          <span className="text-white">12/11/2004</span>
        </p>
        <p className="mb-4">
          <span className="w-5/12 text-purple-400 inline-block">Country:</span>
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
  );
}

export default Profile;
