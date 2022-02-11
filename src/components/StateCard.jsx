import { CellText } from "./StateTable";

const StateCard = ({ name }) => {
  return (
    <div className="flex items-center justify-between text-sm  w-w100 md:w-full gap-x-4 p-2.5 border-t border-grey-400">
      <CellText text={"Name"} />
      <CellText text={"20000"} />
      <CellText text={"1000"} />
      <CellText text={"50000"} />
      <CellText text={"2000"} />
    </div>
  );
};

export default StateCard;
