import { Plant } from "./Plant";

export const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <div className="w-screen h-screen bg-yellow-900">
          <div className="w-full text-3xl font-bold text-center text-green-600">
            Welcome to erin's garden!
          </div>
          <div className="w-full font-bold text-center text-green-600 text-md">{`cultivating silly simplicity :)`}</div>
          <Plant />
        </div>
      </header>
    </div>
  );
};

export default App;
