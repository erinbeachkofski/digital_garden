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

  return <div className={`grid ${gridColsClass} gap-4`}>{plantElements}</div>;
};

export const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <div className="flex-col w-screen h-screen bg-white-100">
          <div className="w-full text-3xl font-bold text-center text-emerald-800">
            Welcome to erin's garden!
          </div>
          <div className="w-full font-bold text-center text-emerald-800 text-md">{`cultivating silly simplicity :)`}</div>
          <div className="flex items-center justify-center h-full bg-emerald-50">
            <PlantBox />
          </div>
        </div>
      </header>
    </div>
  );
};

export default App;
