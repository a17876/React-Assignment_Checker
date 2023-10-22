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
      const today = startOfDay(new Date()); 
      const selectedDate = startOfDay(date); 
      const difference = differenceInDays(selectedDate, today);
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


