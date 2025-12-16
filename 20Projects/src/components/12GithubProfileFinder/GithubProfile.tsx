import { useEffect, useState } from "react";

interface GithubUser {
  name: string;
  avatar_url: string;
  followers: number;
  following: number;
  public_repos: number;
  bio: string;
  html_url: string;
}

export default function GithubUserFinder() {
  const [username, setUsername] = useState<string>("devrahulll");
  const [data, setData] = useState<GithubUser | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  async function fetchProfile(): Promise<void> {
    if (!username.trim()) return;

    setLoading(true);
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) {
        alert("No user found ❌");

        setUsername("devrahulll");
        setLoading(false);
        setUsername("");

        return;
      }

      const result: GithubUser = await response.json();

      setData(result);
      setUsername("");
      setLoading(false);
    } catch (error) {
      console.error("Error in fetching Profile ", error);
      setLoading(false);
    }
  }

  function handleClick() {
    fetchProfile();
  }

  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <div className="min-h-screen bg-black p-10 text-center text-white">
      <div className="mb-5 cursor-pointer">
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="cursor-pointer rounded-lg bg-gray-800 px-8 py-2 text-lg placeholder:text-gray-400 active:ring-2 active:ring-white"
          type="text"
          placeholder="username"
        />
        <button
          onClick={handleClick}
          className={`ml-4 cursor-pointer rounded-lg bg-teal-800 px-8 py-2 text-lg hover:scale-100 hover:bg-teal-900 active:scale-95`}
        >
          {loading ? "Searching..." : "🔍Search"}
        </button>
      </div>
      <div className="mx-auto h-[600px] w-[500px] rounded-md bg-gray-800 p-8 shadow-md">
        <div className="mb-8 flex items-center justify-center">
          <img
            className="h-50 w-50 rounded-full border-2 border-white"
            src={data?.avatar_url}
            alt="image"
          />
        </div>
        <div className="relative mx-auto max-w-[350px] text-left font-mono text-lg">
          <h2 className="mb-4 text-center text-2xl font-bold">
            Name: <span>{data?.name}</span>
          </h2>
          <p className="mb-1">
            Following: <span className="text-teal-200">{data?.following}</span>
          </p>
          <p className="mb-1">
            Followers: <span className="text-teal-200">{data?.following}</span>
          </p>
          <p className="mb-1">
            Public Repo:{" "}
            <span className="text-teal-200">{data?.public_repos}</span>
          </p>
          <p className="mb-1">
            Bio : <span>{data?.bio}</span>
          </p>
          <button className="abosolute bottom-6 left-1/2 mt-3 w-[85%] cursor-pointer rounded-lg bg-green-700 px-6 py-2 text-xl font-semibold shadow-lg hover:bg-green-600">
            <a href={data?.html_url} target="_blank">
              Check Profile
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
