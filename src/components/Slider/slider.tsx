import { useState } from "react";

const RangeSlider = () => {
  const [rangeval, setRangeval] = useState<any | null>(null);

  return (
    <div>
      <input type="range" className="slider" min="199" max="3999" onChange={(event) => setRangeval(event.target.value)} />
      <h4>The range value is {rangeval}</h4>
    </div>
  );
};

export default RangeSlider;
