import PlantImg from "./assets/plant.png";

export const Plant = () => {
  const randomXOffset = Math.random() * 40;
  const randomYOffset = Math.random() * 40;
  console.log(`${randomXOffset}, ${randomYOffset}`);
  const dynamicClassName = `w-10 h-10 sm:w-16 sm:h-16 relative hover:scale-150 sm:hover:scale-110 transform transition-transform duration-300 ease-in-out`;

  return (
    <div
      className={`${dynamicClassName}`}
      style={{ left: `${randomXOffset}%`, top: `${randomYOffset}%` }}
    >
      {/* <img src="https://emojicdn.elk.sh/🌱" alt="plant" /> */}
      <img src={PlantImg} alt="plant" />
    </div>
  );
};
