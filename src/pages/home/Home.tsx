// import { Button } from "@/components/ui/button";

import { Button } from "@/components/ui/button";

const CardCustom = () => {
  return (
    <div className="max-w rounded overflow-hidden shadow-lg">
      <img
        className="w-full"
        src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
        alt="Sunset in the mountains"
      />
      <div className="px-6 py-4 text-left">
        <div className="font-bold text-xl mb-2">
          Lorem ipsum dolor sit, amet consec adipisicing.
        </div>
        <p className="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #photography
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #travel
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #winter
        </span>
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <div>
      {/* first */}
      <div className="mb-10">
        <div className="grid grid-cols-7 gap-4">
          <div className="col-span-4">
            <img
              className="w-full rounded"
              src="https://plus.unsplash.com/premium_photo-1661962309696-c429126b237e?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="thumb"
            />
          </div>
          <div className="col-span-3">
            <div className="h-100 flex items-center">
              <div className="grid grid-cols-1 gap-4 my-auto text-left">
                <h1 className="text-3xl font-bold">
                  Welcome to{" "}
                  <span className="text-cyan-500">Tran Trung Nguyen</span>
                </h1>
                <div className="text-lg font-base border-4 border-transparent border-l-cyan-500 pl-3">
                  Learn to use{" "}
                  <span className="font-medium">
                    Building Information Modeling
                  </span>{" "}
                  methodology in a practical way and change the face of the
                  construction industry.
                </div>
                <div>
                  <Button variant={"destructive"}>Start now !!!</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* news */}
      <h1 className="text-4xl font-bold text-left mb-3">Newest articles</h1>
      <div className="grid grid-cols-3 gap-4">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="...">
            <CardCustom />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
