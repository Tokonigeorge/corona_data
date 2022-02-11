import StateCard from "./StateCard";
import { useSelector } from "react-redux";

const StateTable = () => {
  const data = useSelector((state) => state.data);
  const _data = data?.data?.data?.states;

  return (
    <div className="mt-8 w-full">
      <p className="font-bold text-purple-700 text-2xl">States Affected</p>
      <div className="w-full overflow-x-scroll mt-6 md:overflow-x-hidden bg-white rounded-md">
        <div className="flex items-center w-w100 md:w-full justify-between gap-x-4 px-2.5 py-3 text-sm">
          <CellText text="State" />
          <CellText text="Confirmed Cases" />
          <CellText text="Cases on Admission" />
          <CellText text="Discharged" />
          <CellText text="Death" />
        </div>
        {_data.map((i, indx) => {
          return (
            <StateCard
              key={i._id + indx}
              state={i.state}
              confirmedCases={i.confirmedCases}
              admissions={i.casesOnAdmission}
              discharged={i.discharged}
              death={i.death}
            />
          );
        })}
      </div>
    </div>
  );
};

export const CellText = ({ text, style }) => {
  return <div className={`sm:w-1/5 text-center ${style}`}>{text}</div>;
};

export default StateTable;
