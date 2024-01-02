import { Accordion } from "react-accessible-accordion";

const Forecast = () => {
  return (
    <div>
      <label className="title">Daily</label>
      <Accordion allowZeroExpanded></Accordion>
    </div>
  );
};

export default Forecast;
