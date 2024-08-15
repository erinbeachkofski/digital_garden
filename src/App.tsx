import { memo, useState } from "react";
import { MemoryCard } from "./MemoryCard";
import { Plant } from "./Plant";

const PlantBox = () => {
  // TODO: remove placeholder plants
  const plantElements = [];
  for (let i = 0; i < 11; i++) {
    plantElements.push(<Plant />);
  }

  // Calculate the number of columns
  const numCols = Math.ceil(Math.sqrt(plantElements.length));
  const gridColsClasses: { [key: number]: string } = {
    1: "grid-cols-1",
    2: "grid-cols-2",
    3: "grid-cols-3",
    4: "grid-cols-4",
    5: "grid-cols-5",
    6: "grid-cols-6",
    7: "grid-cols-7",
    8: "grid-cols-8",
    9: "grid-cols-9",
    10: "grid-cols-10",
    11: "grid-cols-11",
    12: "grid-cols-12",
  };
  const gridColsClass = gridColsClasses[numCols] || "grid-cols-1";

  return (
    <div
      className={`w-3/4 h-1/3 sm:w-1/3 sm:h-1/2 grid ${gridColsClass} gap-4`}
    >
      {plantElements}
    </div>
  );
};

const MemoizedPlantBox = memo(PlantBox);

export const App = () => {
  const [showCard, setShowCard] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <MemoryCard show={showCard} />
        <div className="flex flex-col w-screen h-screen bg-amber-50">
          <div className="w-full h-auto px-3 py-3 text-3xl text-start text-lime-800">
            erin's garden
          </div>
          <div className="flex items-center justify-center flex-grow">
            <MemoizedPlantBox />
          </div>
          <div className="w-full h-auto px-3 py-3 text-end text-lime-800 text-md">{`cultivating silly simplicity :)`}</div>
        </div>
        <button onClick={() => setShowCard(!showCard)}>Show card</button>
      </header>
    </div>
  );
};

export default App;
