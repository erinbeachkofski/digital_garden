import { useEffect, useRef } from "react";
import PlantImg from "./assets/plant.png";

type MemoryCardProps = {
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  show: boolean;
};

export const MemoryCard = ({ show, setShow }: MemoryCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const cardBackgroundRef = useRef<HTMLDivElement>(null);
  const memoryText =
    "Big baking day! OMG I made blueberry flaxseed oatmeal muffins… but I forgot the blueberries!!!! So I made a blueberry compote instead and was able to salvage the muffins (they were honestly really good - not too sweet). ";
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      console.log(event.target);
      if (
        cardBackgroundRef.current &&
        cardBackgroundRef.current.contains(event.target as Node) &&
        cardRef.current &&
        !cardRef.current.contains(event.target as Node)
      ) {
        setShow(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [cardRef, cardBackgroundRef, setShow]);

  return (
    <div
      className={`absolute top-0 left-0 flex items-center justify-center w-full h-full transition-opacity duration-200 ${
        show
          ? "opacity-100 z-10 pointer-events-auto"
          : "opacity-0 z-0 pointer-events-none"
      }`}
    >
      <div
        ref={cardBackgroundRef}
        className="absolute top-0 left-0 flex items-center justify-center w-full h-full bg-zinc-100"
        style={{ backgroundColor: "rgba(63, 63, 70, 0.25)" }} // Use RGBA for transparency
      >
        <div
          ref={cardRef}
          className="flex flex-col h-auto px-6 py-6 shadow-lg w-72 rounded-xl bg-amber-50"
        >
          <div className="flex flex-row justify-between">
            <text className="text-xl text-zinc-700">
              {new Date(Date.now()).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </text>
            <img src={PlantImg} alt="plant" className="h-14" />
          </div>
          <div className="pt-10">
            <text className="text-md text-zinc-700">{memoryText}</text>
          </div>
        </div>
      </div>
    </div>
  );
};
