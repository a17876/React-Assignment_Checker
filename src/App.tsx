import { Header } from "./components/Header";
import { Assignments } from "./components/Assignments";
import { useState } from "react";


function App() {
  const [assignmentList, setAssignmentList] = useState<string[]>([]);
  const [checkedAssignment, setCheckedAssignment] = useState<boolean[]>([]);
  const [dueDate, setDueDate] = useState<number>(0);


  return (
    <>
      <Header
        assignmentList={assignmentList}
        setAssignmentList={setAssignmentList}
        checkedAssignment={checkedAssignment}
        setCheckedAssignment={setCheckedAssignment}
        dueDate={dueDate}
        setDueDate={setDueDate}
     
      />
      <Assignments
        assignmentList={assignmentList}
        setAssignmentList={setAssignmentList}
        checkedAssignment={checkedAssignment}
        setCheckedAssignment={setCheckedAssignment}
        dueDate={dueDate}
        setDueDate={setDueDate}
        
      />
    </>
  );
}

export default App;
