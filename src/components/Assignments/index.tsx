import { Assignment } from "../Assignment";
import styles from "./assignments.module.css";

export function Assignments({
  assignmentList,
  setAssignmentList,
  checkedAssignment,
  setCheckedAssignment,
  dueDate,
  setDueDate
}: {
  assignmentList: string[];
  setAssignmentList: React.Dispatch<React.SetStateAction<string[]>>;
  checkedAssignment: boolean[];
  setCheckedAssignment: React.Dispatch<React.SetStateAction<boolean[]>>;
  dueDate: number;
  setDueDate: React.Dispatch<React.SetStateAction<number>>;
}) {
  const listLength = assignmentList.length;
  const checkListLength = checkedAssignment.length;
  return (
    <section className={styles.assignments}>
      <header className={styles.header}>
        <div>
          <p>Created Assignments</p>
          <span>{listLength}</span>
        </div>

        <div>
          <p className={styles.textPurple}>Completed Assignments</p>
          <span>{checkListLength} of {listLength}</span>
        </div>
      </header>

      <div className={styles.list}>
        <Assignment
          assignmentList={assignmentList}
          setAssignmentList={setAssignmentList}
          checkedAssignment={checkedAssignment}
          setCheckedAssignment={setCheckedAssignment}
        />
      </div>
    </section>
  );
}
