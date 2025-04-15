import { GoogleGenAI } from "@google/genai";
import { useContext, useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";
import { ProfileContext } from "../Pages/RandomUser";

function BackStory() {
  // const [backStory, setBackStory] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  const { profileData, backStory, setBackStory } = useContext(ProfileContext);

  const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY });

  const askGemini = async () => {
    setIsLoading(true);
    setErrorMsg(null);
    try {
      const response = await ai.models.generateContent({
        model: "gemini-2.0-flash-lite",
        contents:
          "Provide a backstory in simple and understandable words from this profile, based on personal character, that is not more than 100 words; you don't have to include the profile data anymore :" + JSON.stringify(profileData),
      });
      console.log(response.text);
      setBackStory(response.text);
      setErrorMsg(null);
    } catch (error) {
      console.error("Error:", error);
      setErrorMsg("Error fetching data 😪");
    } finally {
      setIsLoading(false);
    }
  };

  function handleGenerateBackStory() {
    setBackStory("");
    askGemini();
  }

  return (
    // <div className="border-2 mb-0 border-purple-500 rounded-2xl p-6 m-4 bg-slate-800 shadow-lg md:w-6/12">
    <div className="border-2 mb-0 lg:w-6/12 border-purple-500 rounded-2xl p-6 m-4 bg-slate-800 shadow-lg">
      <p className="text-center font-bold text-2xl text-purple-400 mb-4">
        AI back story 🤖
      </p>
      {isLoading ? (
        <div className="w-full text-center flex justify-center items-center">
          <ClipLoader color="#ffffff" size={50} />
        </div>
      ) : backStory.length > 1 ? (
        <div className="text-gray-300 leading-relaxed">{backStory}</div>
      ) : (
        <button
          onClick={() => handleGenerateBackStory()}
          className=" border-2 border-gray-300 cursor-pointer text-white rounded-lg mx-auto block px-8 py-2 font-semibold bg-purple-700"
        >
          {errorMsg ? "Retry 🛠️" : "GENERATE ❔"}
        </button>
      )}
    </div>
  );
}

export default BackStory;
