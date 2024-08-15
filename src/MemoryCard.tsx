type MemoryCardProps = {
  show: boolean;
};

export const MemoryCard = ({ show }: MemoryCardProps) => {
  return (
    <div
      className={`absolute top-0 left-0 flex items-center justify-center w-full h-full transition-opacity duration-200 ${
        show ? "opacity-100 z-10" : "opacity-0 z-0"
      }`}
    >
      <div className="w-72 h-96 rounded-xl bg-cyan-700"></div>
      <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full bg-zinc-700 opacity-15" />
    </div>
  );
};
