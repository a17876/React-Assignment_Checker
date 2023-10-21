import { Header } from "./components/Header";
import { Assignments } from "./components/Assignments";
import { useState } from "react";


function App() {
  const [assignmentList, setAssignmentList] = useState<string[]>([]);
  const [checkedAssignment, setCheckedAssignment] = useState<boolean[]>([]);


  return (
    <>
      <Header
        assignmentList={assignmentList}
        setAssignmentList={setAssignmentList}
        checkedAssignment={checkedAssignment}
        setCheckedAssignment={setCheckedAssignment}
     
      />
      <Assignments
        assignmentList={assignmentList}
        setAssignmentList={setAssignmentList}
        checkedAssignment={checkedAssignment}
        setCheckedAssignment={setCheckedAssignment}
        
      />
    </>
  );
}

export default App;
