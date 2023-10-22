// import { DayPicker } from "react-day-picker";
// import { format } from "date-fns";
// import "react-day-picker/dist/style.css";


// export default function Calendar({
//   selected,
//   setSelected,
//   dueDate,
//   setDueDate,
// }: {
//   selected: Date | undefined;
//   setSelected: React.Dispatch<React.SetStateAction<Date | undefined>>;
//   dueDate: Date | undefined;
//   setDueDate: React.Dispatch<React.SetStateAction<Date | undefined>>;
// }) {
//   let footer = <p>Please pick a day.</p>;
//   if (selected) {
//     footer = <p>You picked {format(selected, "PP")}.</p>;

//   };

  
 
//   return (
//     <>
//     <DayPicker
//       mode="single"
//       selected={selected}
//       onSelect={setSelected}
//       footer={footer}
//       fromDate={new Date()}
//     />

//     </>
//   );
// }
import { DayPicker } from "react-day-picker";
import { format, differenceInDays,startOfDay  } from "date-fns";
import "react-day-picker/dist/style.css";

type SelectSingleEventHandler = (date: Date | undefined) => void;

export default function Calendar({
  selected,
  setSelected,
  dueDate,
  setDueDate,
}: {
  selected: Date | undefined;
  setSelected: React.Dispatch<React.SetStateAction<Date | undefined>>;
  dueDate: number;
  setDueDate: React.Dispatch<React.SetStateAction<number>>;
}) {
  let footer = <p>Please pick a day.</p>;

  if (selected) {
    // const today = new Date();
    // const dayDifference = differenceInDays(selected, today);
    footer = (
      <p>
        You picked {format(selected, "PP")}. The difference is {dueDate} days.
      </p>
    );
  }

  // When a new date is selected, update the dueDate state
  const handleDateSelect: SelectSingleEventHandler = (date) => {
    setSelected(date);
    if (date) {
      const today = startOfDay(new Date()); // 현재 날짜의 시작
      const selectedDate = startOfDay(date); // 선택한 날짜의 시작
      const difference = differenceInDays(selectedDate, today);
  
      console.log(selectedDate);
      console.log(today);
  
      setDueDate(difference);
    } else {
      // If no date is selected, clear the dueDate
      setDueDate(0);
    }
  };

  return (
    <>
      <DayPicker
        mode="single"
        selected={selected}
        onSelect={handleDateSelect}
        footer={footer}
        fromDate={new Date()}
      />
    </>
  );
}


