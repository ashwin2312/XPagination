// import './App.css'

import { useEffect, useState } from "react";
import BasicTable from "./components/BasicTable";

function App() {
  const [membersData, setMembersData] = useState([]);
  const API =
    "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json";

  const getMembersData = async () => {
    try {
      const response = await fetch(API);
      const data = await response.json();
      // console.log("data:: ", data);
      setMembersData(...data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getMembersData();
  }, []);

  return (
    <>
      <div>
        <BasicTable />
      </div>
    </>
  );
}

export default App;
