const API = "https://randomuser.me//api";

var requestOptions = {
  method: "GET",
  redirect: "follow",
};

export async function getDetails() {
  let data;
   
  const res = await fetch(
    `${API}`,
    requestOptions
  );
  if (!res.ok) {
    data = 'Error'
    throw Error("Could not fetch data");
  }else{
  data = await res.json();
  }
  console.log(data)
  return data;
}
