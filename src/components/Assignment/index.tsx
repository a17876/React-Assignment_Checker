import styles from "./assignment.module.css";
import { TbTrash } from "react-icons/tb";
import React from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import { format } from "date-fns";

export function Assignment({
  assignmentList,
  setAssignmentList,
  checkedAssignment,
  setCheckedAssignment,

}: {
  assignmentList: string[];
  checkedAssignment: boolean[];
  setAssignmentList: React.Dispatch<React.SetStateAction<string[]>>;
  setCheckedAssignment: React.Dispatch<React.SetStateAction<boolean[]>>;

}) {
  function handleDeleteAssignment(index: number): void {
    const updatedAssignmentList = [...assignmentList];
    updatedAssignmentList.splice(index, 1);
    setAssignmentList(updatedAssignmentList);

    const updatedCheckedAssignment = [...checkedAssignment];
    updatedCheckedAssignment.splice(index, 1);
    setCheckedAssignment(updatedCheckedAssignment);
    
  }

  function handleCheckAssignment(index: number): void {
    const updatedCheckedAssignment = [...checkedAssignment]; 
    updatedCheckedAssignment[index] = !updatedCheckedAssignment[index]; 
    setCheckedAssignment(updatedCheckedAssignment);
    }

  return (
    <>
    
      {assignmentList.map((assignment, index) => (
        <div className={styles.assignment}>
          <button
            className={styles.checkContainer}
            onClick={() => handleCheckAssignment(index)}
          >
            {" "}
            {checkedAssignment[index] === (true) ? <BsCheckCircleFill /> : <div />}
          </button>

          <p
            className={checkedAssignment[index] === (true)? styles.textCompleted : ""}
          >
            {assignment}
          </p>

          <button
            className={styles.deleteButton}
            onClick={() => handleDeleteAssignment(index)}
          >
            <TbTrash size={20} />
          </button>
        </div>
      ))}
    </>
  );
      }
