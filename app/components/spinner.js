"use client";
// import { Spinner } from "flowbite-react";
const CustomSpinner = ({ color, size }) => {
  return size === "sm" ? (
    <div className="container mx-auto w-full ">
      <div className=" mx-10  w-5 h-5 border-t-transparent border-solid animate-spin border-red-400 rounded-full border-2 "></div>
    </div>
  ) : size === "md" ? (
    <div className="container mx-auto w-full ">
      <div className=" mx-10  w-7 h-7 border-t-transparent border-solid animate-spin  rounded-full border-2 "></div>
    </div>
  ) : (
    <div className="container mx-auto w-full ">
      <div className=" mx-10  w-9 h-9 border-t-transparent border-solid animate-spin  rounded-full  border-2 "></div>
    </div>
  );
};

export default CustomSpinner;
