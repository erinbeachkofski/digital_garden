export const Plant = () => {
  const randomXOffset = Math.random() * 100;
  const randomYOffset = Math.random() * 100;
  const dynamicClassName = `absolute top-${randomYOffset} left-${randomXOffset} "w-10 h-10 bg-emerald-800`;
  return <div className="w-10 h-10 bg-emerald-800"></div>;
};
