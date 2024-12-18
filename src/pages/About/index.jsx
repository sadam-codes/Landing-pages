import React, { useState } from "react";
import Navbar2 from "../../components/Landingpage1/Navbar2";
import InputText  from "../About/InputText";
import Sideaccordian from "./DynamicAccordian";
const DynamicAccordian = () => {
  const [tableData, setTableData] = useState([{ name: "Subject" }]);

  return (
    <div style={{ background: "whitesmoke" }}>
      <div className="border">
        <Navbar2 pricingScreen />
      </div>
      <InputText tableData={tableData} setTableData={setTableData} />
      <Sideaccordian tableData={tableData} />
    </div>
  );
};
export default DynamicAccordian;
