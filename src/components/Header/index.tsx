import React, { useState } from "react";
import styles from "./header.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { uppercase } from "../../helpers/stringHelpers";
import { AiFillCalendar } from "react-icons/ai";
import Calendar from "../Calendar";


export function Header({
  assignmentList,
  setAssignmentList,
  checkedAssignment,
  setCheckedAssignment,
 
}: {
  assignmentList: string[];
  setAssignmentList: React.Dispatch<React.SetStateAction<string[]>>;
  checkedAssignment:boolean[];
  setCheckedAssignment:React.Dispatch<React.SetStateAction<boolean[]>>;

}) {
  const [assignment, setAssignment] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [isCalendarClicked, setIsCalendarClicked] = useState(false);

  const handleCalendar = () => {
    setIsCalendarClicked(!isCalendarClicked);
    console.log(isCalendarClicked)
  }

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
      console.log("Creating assignment:", assignment);
      setAssignment("");
      setIsButtonDisabled(true);
      setAssignmentList([...assignmentList, assignment]);
      setCheckedAssignment([...checkedAssignment, false]);
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
        <AiFillCalendar className={isCalendarClicked ? styles.calendar : styles.calendarOff} onClick={handleCalendar}/>
        </div>
        <button
          onClick={handleCreateClick}
          disabled={isButtonDisabled} // Disable the button if isButtonDisabled is true
        >
          Create <AiOutlinePlusCircle size={20} />
        </button>
      </form>

      {isCalendarClicked ? <Calendar  /> : <div />}
    </header>
  );
}
