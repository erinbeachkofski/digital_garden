export const Plant = () => {
  const randomXOffset = Math.random() * 50;
  const randomYOffset = Math.random() * 50;
  console.log(`${randomXOffset}, ${randomYOffset}`);
  const dynamicClassName = `w-10 h-10 bg-emerald-800 relative`;

  return (
    <div
      className={`${dynamicClassName}`}
      style={{ left: `${randomXOffset}%`, top: `${randomYOffset}%` }}
    ></div>
  );
};
