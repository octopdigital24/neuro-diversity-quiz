import React from "react";

const Result = ({ score, handleReset }) => {
  return (
    <div className="">
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
                <p className="p-6 text-center text-xl font-medium">
                  {score.EI}
                </p>
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
                <p className="p-6 text-center text-xl font-medium">
                  {score.EC}
                </p>
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
                <p className="p-6 text-center text-xl font-medium">
                  {score.EA}
                </p>
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
              <p className="bg-yellow-500 text-white p-3 text-center">
                Overall
              </p>
              <p className="p-6 text-center text-xl font-medium">
                {score.WI +
                  score.WC +
                  score.WA +
                  score.EI +
                  score.EC +
                  score.EA}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-between my-10 max-w-screen-lg  mx-auto">
        <div className="w-60">
          <p className="uppercase text-center text-orange-500 font-bold">
            Sensory Impact
          </p>
          <div className="border rounded-lg overflow-hidden">
            <p className="bg-orange-500 text-white p-3 text-center">
              Sensory Impact
            </p>
            <p className="p-6 text-center text-xl font-medium">{score.SI}</p>
          </div>
        </div>
        <button
          onClick={handleReset}
          className="bg-indigo-500 text-white px-4 py-2 rounded-md  h-12"
        >
          Try Again
        </button>
      </div>

      {/* Graph Section */}
      <div className="py-16 max-w-screen-lg mx-auto">
        <div className="py-16 max-w-screen-lg mx-auto space-y-16">
          <div className="grid grid-cols-1 gap-4">
            {/* Social Inclusion section */}
            <div>
              <p className="text-xl font-semibold mb-4 ">Social Inclusion</p>

              {/* Graph container */}
              <div className="grid grid-cols-6 items-center gap-4">
                {/* Labels */}
                <div className="col-span-1">
                  <p className="text-right">Expressed</p>
                </div>

                {/* Expressed Bar */}
                <div className="col-span-5">
                  <div className="relative h-10 bg-gray-200 rounded overflow-hidden">
                    <div
                      className="absolute top-0 left-0 h-full bg-orange-500"
                      style={{ width: `${score.EI}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Wanted Section */}
              <div className="grid grid-cols-6 items-center gap-4 mt-4">
                {/* Labels */}
                <div className="col-span-1">
                  <p className="text-right">Wanted</p>
                </div>

                {/* Wanted Bar */}
                <div className="col-span-5">
                  <div className="relative h-10 bg-gray-200 rounded overflow-hidden">
                    <div
                      className="absolute top-0 left-0 h-full bg-blue-500"
                      style={{ width: `${score.WI}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {/* Decision Making section */}
            <div>
              <p className="text-xl font-semibold mb-4">Decision Making</p>

              {/* Graph container */}
              <div className="grid grid-cols-6 items-center gap-4">
                {/* Labels */}
                <div className="col-span-1">
                  <p className="text-right">Expressed</p>
                </div>

                {/* Expressed Bar */}
                <div className="col-span-5">
                  <div className="relative h-10 bg-gray-200 rounded overflow-hidden">
                    <div
                      className="absolute top-0 left-0 h-full bg-orange-500"
                      style={{ width: `${score.EC}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Wanted Section */}
              <div className="grid grid-cols-6 items-center gap-4 mt-4">
                {/* Labels */}
                <div className="col-span-1">
                  <p className="text-right">Wanted</p>
                </div>

                {/* Wanted Bar */}
                <div className="col-span-5">
                  <div className="relative h-10 bg-gray-200 rounded overflow-hidden">
                    <div
                      className="absolute top-0 left-0 h-full bg-blue-500"
                      style={{ width: `${score.WC}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {/* Acceptance section */}
            <div>
              <p className="text-xl font-semibold mb-4">Acceptance</p>

              {/* Graph container */}
              <div className="grid grid-cols-6 items-center gap-4">
                {/* Labels */}
                <div className="col-span-1">
                  <p className="text-right">Expressed</p>
                </div>

                {/* Expressed Bar */}
                <div className="col-span-5">
                  <div className="relative h-10 bg-gray-200 rounded overflow-hidden">
                    <div
                      className="absolute top-0 left-0 h-full bg-orange-500"
                      style={{ width: `${score.EA}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Wanted Section */}
              <div className="grid grid-cols-6 items-center gap-4 mt-4">
                {/* Labels */}
                <div className="col-span-1">
                  <p className="text-right">Wanted</p>
                </div>

                {/* Wanted Bar */}
                <div className="col-span-5">
                  <div className="relative h-10 bg-gray-200 rounded overflow-hidden">
                    <div
                      className="absolute top-0 left-0 h-full bg-blue-500"
                      style={{ width: `${score.WA}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {/* Sensory Impact section */}
            <div>
              <p className="text-xl font-semibold mb-4">Sensory Impact</p>

              {/* Graph container */}
              <div className="grid grid-cols-6 items-center gap-4">
                {/* Labels */}
                <div className="col-span-1">
                  <p className="text-right">Sensory Impact</p>
                </div>

                {/* Expressed Bar */}
                <div className="col-span-5">
                  <div className="relative h-10 bg-gray-200 rounded overflow-hidden">
                    <div
                      className="absolute top-0 left-0 h-full bg-orange-500"
                      style={{ width: `${score.EA}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
