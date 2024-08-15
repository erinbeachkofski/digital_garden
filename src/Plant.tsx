import PlantImg from "./assets/plant.png";

type PlantProps = {
  setShowCard: React.Dispatch<React.SetStateAction<boolean>>;
  showCard: boolean;
};

export const Plant = ({ setShowCard, showCard }: PlantProps) => {
  const randomXOffset = Math.random() * 40;
  const randomYOffset = Math.random() * 40;
  const dynamicClassName = `w-10 h-10 sm:w-16 sm:h-16 relative hover:scale-150 sm:hover:scale-110 transform transition-transform duration-300 ease-in-out`;

  return (
    <div>
      <div
        className={`${dynamicClassName}`}
        style={{ left: `${randomXOffset}%`, top: `${randomYOffset}%` }}
        onClick={() => {
          setShowCard(!showCard);
        }}
      >
        <img src={PlantImg} alt="plant" />
      </div>
    </div>
  );
};
