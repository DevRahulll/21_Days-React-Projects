import { useEffect, useState } from "react";

interface dataprops {
  name: string;
  avatar: string;
}

export default function GithubUserFinder() {
  const [username, setUsername] = useState<string>("devrahulll");
  const [data, setData] = useState<dataprops[]>();

  async function fetchProfile() {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      const result = await response.json();
      console.log("result", result.avatar_url);
      setData(result);
      setUsername("");
    } catch (error) {
      console.error("Error in fetching Profile ", error);
    }
  }

  useEffect(() => {
    fetchProfile();
  }, []);

  console.log("Data: ", data);

  return (
    <div className="min-h-screen bg-black p-10 text-center text-white">
      <div className="mb-5">
        <input type="text" placeholder="username" />
        <button>🔍Search</button>
      </div>
      <div className="mx-auto h-[600px] w-[500px] rounded-md bg-gray-800 p-8 shadow-md">
        <div className="">
          {/* <img src={data.avatar_url} alt="image" /> */}
        </div>
        <div className="">
          <h2 className="">Hello</h2>
          <p>Following</p>
          <p>Followers</p>
          <p>Public Repo:</p>
        </div>
      </div>
    </div>
  );
}
