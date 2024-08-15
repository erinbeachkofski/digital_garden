import { useEffect, useRef } from "react";

type MemoryCardProps = {
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  show: boolean;
};

export const MemoryCard = ({ show, setShow }: MemoryCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const cardBackgroundRef = useRef<HTMLDivElement>(null);

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
          className="shadow-lg w-72 h-96 rounded-xl bg-amber-50"
        />
      </div>
    </div>
  );
};
