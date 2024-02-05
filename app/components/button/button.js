import React from "react";
import classnames from "classnames";
import CustomSpinner from "../spinner";

const CustomButton = ({
  bgColor,
  size,
  textColor,
  isLoading,
  text,
  handleClick,
  spinnerSize,
  spinnerColor,
}) => {
  return (
    <button
      type="submit"
      value="Submit"
      className={classnames(
        `font-light py-2 px-2 rounded-lg shrink-0 min-w-28 min-h-10 w-full `,
        {
          "text-xs": size === "sm",
          "text-xl": size === "lg",
        }
      )}
      style={{
        backgroundColor: `${bgColor}`,
        color: `${textColor}`,
        textAlign: "center",
      }}
      onClick={handleClick}
    >
      {isLoading ? (
        <div className="container mx-auto w-full flex justify-center items-center ">
          <div className=" w-6 h-6 border-t-transparent border-solid animate-spin border-red-400 rounded-full border-2 "></div>
        </div>
      ) : (
        text
      )}
    </button>
  );
};

export default CustomButton;
