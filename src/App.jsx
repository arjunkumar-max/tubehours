import { useState } from "react";

function App() {

  const [currentHours, setCurrentHours] = useState("");
  const [avgHours, setAvgHours] = useState("");
  const [videosPerWeek, setVideosPerWeek] = useState("");
  const [expiringHours, setExpiringHours] = useState("0");

  const [videosNeeded, setVideosNeeded] = useState(null);
  const [weeksNeeded, setWeeksNeeded] = useState(null);
  const [remainingHours, setRemainingHours] = useState(null);

  const [error, setError] = useState("");

  const calculateMonetization = () => {

    if (
      currentHours === "" ||
      avgHours === "" ||
      videosPerWeek === ""
    ) {
      setError("Please fill all fields");
      return;
    }

    if (
      Number(currentHours) <= 0 ||
      Number(avgHours) <= 0 ||
      Number(videosPerWeek) <= 0
    ) {
      setError("Values must be greater than 0");
      return;
    }

    setError("");

    const remaining =
      4000 - Number(currentHours) + Number(expiringHours);

    const videos =
      Math.ceil(remaining / Number(avgHours));

    const weeks =
      Math.ceil(videos / Number(videosPerWeek));

    setRemainingHours(remaining);
    setVideosNeeded(videos);
    setWeeksNeeded(weeks);
  };

  return (

    <div className="min-h-screen bg-black text-white">

      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-5 border-b border-gray-800">

        <h1 className="text-2xl font-bold text-red-500">
          PSR VLOGS TRACKER
        </h1>

        <button className="bg-red-500 px-5 py-2 rounded-lg hover:bg-red-600">
          Start Now
        </button>

      </nav>

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center mt-20 px-6">

        <h1 className="text-5xl font-bold max-w-4xl leading-tight">
          Know When Your YouTube Channel
          Will Get Monetized
        </h1>

        <p className="text-gray-400 mt-6 text-lg max-w-2xl">
          Calculate how many videos and watch hours you need
          to reach YouTube monetization faster.
        </p>

      </div>

      {/* Calculator */}
      <div className="max-w-2xl mx-auto mt-16 bg-gray-900 p-8 rounded-2xl shadow-lg">

        <h2 className="text-3xl font-bold mb-8 text-center">
          Monetization Calculator
        </h2>

        <div className="space-y-6">

          {/* Current Watch Hours */}
          <div>

            <label className="block mb-2 text-gray-300">
              Current Watch Hours
            </label>

            <input
              type="text"
              placeholder="Enter current watch hours"
              value={currentHours}
              onChange={(e) => setCurrentHours(e.target.value)}
              className="w-full p-4 rounded-lg bg-black border border-gray-700 focus:outline-none focus:border-red-500"
            />

          </div>

          {/* Avg Watch Hours */}
          <div>

            <label className="block mb-2 text-gray-300">
              Average Watch Hours Per Video
            </label>

            <input
              type="text"
              placeholder="Enter average watch hours"
              value={avgHours}
              onChange={(e) => setAvgHours(e.target.value)}
              className="w-full p-4 rounded-lg bg-black border border-gray-700 focus:outline-none focus:border-red-500"
            />

          </div>

          {/* Videos Per Week */}
          <div>

            <label className="block mb-2 text-gray-300">
              Videos Uploaded Per Week
            </label>

            <input
              type="text"
              placeholder="Videos uploaded weekly"
              value={videosPerWeek}
              onChange={(e) => setVideosPerWeek(e.target.value)}
              className="w-full p-4 rounded-lg bg-black border border-gray-700 focus:outline-none focus:border-red-500"
            />

          </div>

          {/* Expiring Dropdown */}
          <div>

            <label className="block mb-2 text-gray-300">
              Estimated Monthly Expiring Watch Hours
            </label>

            <select
              value={expiringHours}
              onChange={(e) => setExpiringHours(e.target.value)}
              className="w-full p-4 rounded-lg bg-black border border-gray-700 focus:outline-none focus:border-red-500"
            >
              <option>0</option>
              <option>10</option>
              <option>20</option>
              <option>30</option>
              <option>40</option>
              <option>50</option>
              <option>75</option>
              <option>100</option>
            </select>

          </div>

          {/* Error Message */}
          {error && (
            <div className="bg-red-500/20 border border-red-500 text-red-400 p-4 rounded-lg">
              {error}
            </div>
          )}

          {/* Button */}
          <button
            onClick={calculateMonetization}
            className="w-full bg-red-500 py-4 rounded-xl text-lg font-semibold hover:bg-red-600"
          >
            Calculate Monetization
          </button>

        </div>

      </div>

      {/* Results */}
      {videosNeeded !== null && (

        <div className="max-w-4xl mx-auto mt-12 px-6">

          <h2 className="text-4xl font-bold text-center mb-10">
            Your Monetization Prediction
          </h2>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-6">

            {/* Remaining Hours */}
            <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800 text-center">

              <h3 className="text-gray-400 mb-3">
                Remaining Hours
              </h3>

              <p className="text-4xl font-bold text-red-500">
                {remainingHours}
              </p>

            </div>

            {/* Videos Needed */}
            <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800 text-center">

              <h3 className="text-gray-400 mb-3">
                Videos Needed
              </h3>

              <p className="text-4xl font-bold text-red-500">
                {videosNeeded}
              </p>

            </div>

            {/* Weeks Needed */}
            <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800 text-center">

              <h3 className="text-gray-400 mb-3">
                Weeks Needed
              </h3>

              <p className="text-4xl font-bold text-red-500">
                {weeksNeeded}
              </p>

            </div>

          </div>

          {/* Progress Bar */}
          <div className="mt-12 bg-gray-900 p-8 rounded-2xl border border-gray-800">

            <div className="flex justify-between mb-4">

              <span className="text-gray-400">
                Monetization Progress
              </span>

              <span className="text-red-500 font-bold">
                {currentHours} / 4000 Hours
              </span>

            </div>

            <div className="w-full bg-gray-800 h-5 rounded-full overflow-hidden">

              <div
                className="bg-red-500 h-5"
                style={{
                  width: `${(currentHours / 4000) * 100}%`
                }}
              >
              </div>

            </div>

          </div>

        </div>

      )}

    </div>

  );
}

export default App;