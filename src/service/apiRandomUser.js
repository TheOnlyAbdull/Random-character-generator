const API = "https://randomuser.me//api?";

var requestOptions = {
  method: "GET",
  redirect: "follow",
};
export async function getDetails(age, gender='female', country='US') {
    let query = "";

    if (age !== "Random") {
      query += `?age=${age}`;
    }
    if (gender !== "Random") {
      query += `&gender=${gender}`;
    }
    if (country !== "Random") {
      query += `&nat=${country}`;
    }

  const res = await fetch(
    `${API}${query}`,
    requestOptions
  );
  if (!res.ok) throw Error("Could not fetch data");
  const data = await res.json();
  return data;
}
