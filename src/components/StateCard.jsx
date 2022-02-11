import { CellText } from "./StateTable";

const StateCard = ({
  state,
  confirmedCases,
  admissions,
  discharged,
  death,
}) => {
  return (
    <div className="flex items-center justify-between text-sm  w-w100 md:w-full md:gap-x-4 p-2.5 border-t border-grey-400">
      <CellText text={state} />
      <CellText text={confirmedCases} />
      <CellText text={admissions} />
      <CellText text={discharged} style="text-blue-500" />
      <CellText text={death} style="text-red-500" />
    </div>
  );
};

export default StateCard;
