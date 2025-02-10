
function Profile({results}) {
    const data = results[0];
  return (
    <div className="w-full p-10 font-semibold text-xl md:w-6/12">
      <div className="w-full">
        <p className="mb-4">
          <span className=" w-5/12 inline-block text-purple-400">Name:</span>
          <span className="text-white">{data.name.first} {data.name.last}</span>
        </p>
        <p className="mb-4">
          <span className=" w-5/12 text-purple-400 inline-block">Age:</span>
          <span className="text-white">{data.dob.age} years</span>
        </p>
        <p className="mb-4">
          <span className="w-5/12 text-purple-400 inline-block">Gender:</span>
          <span className="text-white">{data.gender}</span>
        </p>
      </div>
      <div className="w-full">
        <p className="mb-4">
          <span className=" w-5/12 text-purple-400 inline-block">D.O.B:</span>
          <span className="text-white">{data.dob.date.slice(0, 10)}</span>
        </p>
        <p className="mb-4">
          <span className="w-5/12 text-purple-400 inline-block">Country:</span>
          <span className="text-white">{data.location.country}</span>
        </p>
        <p className="mb-4">
          <span className="w-5/12 text-purple-400 inline-block">
            Address:
          </span>
          <span className="text-white">{data.location.street.number} {data.location.street.name}</span>
        </p>
      </div>
    </div>
  );
}

export default Profile;
