const API = "https://randomuser.me//api";

var requestOptions = {
  method: "GET",
  redirect: "follow",
};
// export async function getDetails(age, gender, country) {
export async function getDetails() {
    // let query = "";

    // if (gender !== "Random") {
    //   query += `&gender=${gender}`;
    // }
    // if (country !== "Random") {
    //   query += `&nat=${country}`;
    // }

  const res = await fetch(
    `${API}`,
    requestOptions
  );
  if (!res.ok) throw Error("Could not fetch data");
  const data = await res.json();
  console.log(data)
  return data;
}
