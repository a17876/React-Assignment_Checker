import React, { useState } from "react";
import styles from "./header.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { uppercase } from "../../helpers/stringHelpers";
import { AiFillCalendar } from "react-icons/ai";
import Calendar from "../Calendar";
import { format } from 'date-fns';

export function Header({
  assignmentList,
  setAssignmentList,
  checkedAssignment,
  setCheckedAssignment,
  dueDate,
  setDueDate,
  dueDateList,
  setDueDateList,
}: {
  assignmentList: string[];
  setAssignmentList: React.Dispatch<React.SetStateAction<string[]>>;
  checkedAssignment: boolean[];
  setCheckedAssignment: React.Dispatch<React.SetStateAction<boolean[]>>;
  dueDate: number;
  setDueDate: React.Dispatch<React.SetStateAction<number>>;
  dueDateList: number[];
  setDueDateList: React.Dispatch<React.SetStateAction<number[]>>;
}) {
  const [assignment, setAssignment] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [isCalendarClicked, setIsCalendarClicked] = useState(false);
  const [selected, setSelected] = useState<Date | undefined>();

  const handleCalendar = () => {
    setIsCalendarClicked(!isCalendarClicked);
  };

  const handleAssignmentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newAssignment = e.target.value;
    setAssignment(newAssignment);
    // Check if the input is empty and update the button's disabled state
    setIsButtonDisabled(newAssignment.trim() === "");
  };

  const handleCreateClick = () => {
    // Handle the creation of the assignment here
    if (assignment.trim() !== "") {
      // Create the assignment or update your state as needed
      setAssignment("");
      setIsButtonDisabled(true);
      setAssignmentList([...assignmentList, assignment]);
      setCheckedAssignment([...checkedAssignment, false]);
      setDueDateList([...dueDateList, dueDate]);
    }
  };

  return (
    <header className={styles.header}>
      <h1>{uppercase("bcit")} Assignment Tracker</h1>
     
      <form className={styles.newAssignmentForm}>
        <input
          placeholder="Add a new assignment"
          type="text"
          value={assignment}
          onChange={handleAssignmentChange}
        />
        <div className={styles.calendarContainer}>
        {selected ? <p className={styles.date}>{format(selected, "MM/dd/yyyy")}</p> : <div />}
          <AiFillCalendar
            className={isCalendarClicked ? styles.calendar : styles.calendarOff}
            onClick={handleCalendar}
          />
        </div>
        <button
          onClick={handleCreateClick}
          disabled={isButtonDisabled} // Disable the button if isButtonDisabled is true
        >
          Create <AiOutlinePlusCircle size={20} />
        </button>
      </form>

      {isCalendarClicked ? (
        <Calendar
          selected={selected}
          setSelected={setSelected}
          dueDate={dueDate}
          setDueDate={setDueDate}
          isCalendarClicked={isCalendarClicked}
          setIsCalendarClicked={setIsCalendarClicked}
        />
      ) : (
        <div />
      )}
      
      
    </header>
  );
}
