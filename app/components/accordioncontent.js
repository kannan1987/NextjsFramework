import React, { useState } from "react";

const CustomAccordionContent = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div>
      <div className="accordion-item ">
        <div
          className=" flex justify-between accordion-title "
          onClick={() => setIsActive(!isActive)}
        >
          <div>{title}</div>
          <div>{isActive ? "-" : "+"}</div>
        </div>
        {isActive && <div className="accordion-content">{content}</div>}
      </div>
    </div>
  );
};

export default CustomAccordionContent;
