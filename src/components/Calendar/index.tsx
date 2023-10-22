import { DayPicker } from "react-day-picker";
import { format, differenceInDays,startOfDay  } from "date-fns";
import "react-day-picker/dist/style.css";
import styles from "./calendar.module.css";

type SelectSingleEventHandler = (date: Date | undefined) => void;

export default function Calendar({
  selected,
  setSelected,
  dueDate,
  setDueDate,
  isCalendarClicked,
  setIsCalendarClicked,
  showDate,
  setShowDate
}: {
  selected: Date | undefined;
  setSelected: React.Dispatch<React.SetStateAction<Date | undefined>>;
  dueDate: number;
  setDueDate: React.Dispatch<React.SetStateAction<number>>;
  isCalendarClicked: boolean;
  setIsCalendarClicked: React.Dispatch<React.SetStateAction<boolean>>;
  showDate: Date | undefined;
  setShowDate: React.Dispatch<React.SetStateAction<Date | undefined>>;
}) {
  let footer = <p>Please pick a day.</p>;

  if (selected) {
    footer = (
      <p>
        You picked {format(selected, "PP")}.
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
    setIsCalendarClicked(false)
    setShowDate(selected);
  };

  return (
    <>
      <DayPicker
        className={styles.dayPickerContainer}
        mode="single"
        selected={selected}
        onSelect={handleDateSelect}
        footer={footer}
        fromDate={new Date()}
      />
    </>
  );
}


