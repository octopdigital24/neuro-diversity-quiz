import React from "react";

const Result = ({ score, handleReset }) => {
  return (
    <div className="space-y-3 grid grid-cols-1 max-w-screen-lg mx-auto">
      <h2 className="text-2xl font-bold text-center mb-6">Your Scores</h2>

      {/* Row 1 */}
      <div className="flex relative w-full">
        <p className="-rotate-90 absolute top-1/2  right-[97%] font-bold text-green-500">
          EXPRESSED
        </p>
        <div className="grid grid-cols-4 gap-3 w-full">
          <div>
            <p className="uppercase text-center text-blue-500 font-bold">
              Social Inclusion
            </p>
            <div className="border rounded-lg overflow-hidden">
              <p className="bg-gray-200 p-3 text-center">
                Expressed Social Inclusion
              </p>
              <p className="p-6 text-center text-xl font-medium">{score.EI}</p>
            </div>
          </div>
          <div>
            <p className="uppercase text-center text-cyan-500 font-bold">
              Decision Making
            </p>
            <div className="border rounded-lg overflow-hidden">
              <p className="bg-gray-200 p-3 text-center">
                Expressed Decision Making
              </p>
              <p className="p-6 text-center text-xl font-medium">{score.EC}</p>
            </div>
          </div>
          <div>
            <p className="uppercase text-center text-slate-500 font-bold">
              Acceptance
            </p>
            <div className="border rounded-lg overflow-hidden">
              <p className="bg-gray-200 p-3 text-center">
                Expressed Acceptance
              </p>
              <p className="p-6 text-center text-xl font-medium">{score.EA}</p>
            </div>
          </div>
          <div>
            <br />
            <div className="border rounded-lg overflow-hidden">
              <p className="bg-green-500 text-white p-3 text-center">
                Total Expressed Behavior
              </p>
              <p className="p-6 text-center text-xl font-medium">
                {score.EI + score.EC + score.EA}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Row 2 */}

      <div className="flex relative">
        <p className="-rotate-90 absolute top-1/2  right-[98.5%] text-purple-500 font-bold">
          WANTED
        </p>
        <div className="grid grid-cols-4 gap-3 w-full">
          <div className="border rounded-lg overflow-hidden">
            <p className="bg-gray-200 p-3 text-center">
              Wanted Social Inclusion
            </p>
            <p className="p-6 text-center text-xl font-medium">{score.WI}</p>
          </div>

          <div className="border rounded-lg overflow-hidden">
            <p className="bg-gray-200 p-3 text-center">
              Wanted Decision Making
            </p>
            <p className="p-6 text-center text-xl font-medium">{score.WC}</p>
          </div>

          <div className="border rounded-lg overflow-hidden">
            <p className="bg-gray-200 p-3 text-center">Wanted Acceptance</p>
            <p className="p-6 text-center text-xl font-medium">{score.WA}</p>
          </div>

          <div className="border rounded-lg overflow-hidden">
            <p className="bg-purple-500 text-white p-3 text-center">
              Total Wanted Behavior
            </p>
            <p className="p-6 text-center text-xl font-medium">
              {score.WI + score.WC + score.WA}
            </p>
          </div>
        </div>
      </div>

      {/* Row 3 */}
      <div className="flex relative">
        <div className="grid grid-cols-4 gap-3 w-full">
          <div className="border rounded-lg overflow-hidden">
            <p className="bg-blue-500 text-white p-3 text-center">
              Total For Social Inclusion
            </p>
            <p className="p-6 text-center text-xl font-medium">
              {score.WI + score.EI}
            </p>
          </div>

          <div className="border rounded-lg overflow-hidden">
            <p className="bg-cyan-500 text-white p-3 text-center">
              Total For Decision Making
            </p>
            <p className="p-6 text-center text-xl font-medium">
              {score.WC + score.EC}
            </p>
          </div>

          <div className="border rounded-lg overflow-hidden">
            <p className="bg-slate-500 p-3 text-center text-white">
              Total For Acceptance
            </p>
            <p className="p-6 text-center text-xl font-medium">
              {score.WA + score.EA}
            </p>
          </div>

          <div className="border rounded-lg overflow-hidden">
            <p className="bg-orange-500 text-white p-3 text-center">Overall</p>
            <p className="p-6 text-center text-xl font-medium">
              {score.WI + score.WC + score.WA + score.EI + score.EC + score.EA}
            </p>
          </div>
        </div>
      </div>
      <button
        onClick={handleReset}
        className="bg-indigo-500 text-white px-4 py-2 rounded-md"
      >
        Try Again
      </button>
    </div>
  );
};

export default Result;
