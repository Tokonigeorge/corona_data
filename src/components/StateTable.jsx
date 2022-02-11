import StateCard from "./StateCard";

const StateTable = () => {
  return (
    <div className="mt-8 w-full">
      <p className="font-bold text-purple-700 text-2xl">States Affected</p>
      <div className="w-full overflow-x-scroll mt-4 md:overflow-x-hidden bg-white rounded-md">
        <div className="flex items-center w-w100 md:w-full justify-between gap-x-4 p-2.5 text-sm">
          <CellText text="State" />
          <CellText text="Confirmed Cases" />
          <CellText text="Cases on Admission" />
          <CellText text="Discharged" />
          <CellText text="Death" />
        </div>
        <StateCard />
        <StateCard />
        <StateCard />
        <StateCard />
        <StateCard />
      </div>
    </div>
  );
};

export const CellText = ({ text }) => {
  return <div className="sm:w-1/5 text-center">{text}</div>;
};

export default StateTable;
