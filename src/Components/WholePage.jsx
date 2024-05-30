import Page from "./Page";
import Btn from "./Btn";
import Intro from "./Intro";
import { Link } from "react-router-dom";
import { useState } from "react";
const WholePage = () => {
  const [formData, setFormData] = useState({});

  const handleSave = (data) => {
    setFormData({ ...formData, ...data });
    localStorage.setItem("formData", JSON.stringify({ ...formData, ...data }));
  };
  return (
    <div>
      <Intro />
      <div className="flex-wrap px-[100px] md:flex gap-x-[300px] justify-center md:grid-row-4 bg-slate-300 pt-6 pb-1">
        <Page Name={"Mean : "} onSave={handleSave} />
        <Page Name={"Std : "} onSave={handleSave} />
        <Page Name={"Min : "} onSave={handleSave} />
        <Page Name={"25% : "} onSave={handleSave} />
        <Page Name={"50% : "} onSave={handleSave} />
        <Page Name={"75% : "} onSave={handleSave} />
        <Page Name={"Max : "} onSave={handleSave} />
        <Page Name={"Sum of Power Peak : "} onSave={handleSave} />
        <Page Name={"Monthly AVG : "} onSave={handleSave} />
        <Page Name={"hourly Variability : "} onSave={handleSave} />
        <Page Name={"Off Peak hour : "} onSave={handleSave} />
        <Page Name={"Peak hour: "} onSave={handleSave} />
        <Page Name={"Total Power Consume : "} onSave={handleSave} />
        <Page Name={"It's entropy: "} onSave={handleSave} />
        
      </div>
      <div></div>
      <div>
        <Link to="/OtherPage">
          <Btn />
        </Link>
      </div>
    </div>
  );
};

export default WholePage;
