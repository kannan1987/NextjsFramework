"use client";
import { useState } from "react";
import * as yup from "yup";
import CustomButton from "@/app/components/button/button";
import CustomInput from "@/app/components/textfields/input";
export default function Signup() {
  var [clickStatus, setClickStatus] = useState(true);
  var [name, setName] = useState();
  var [email, setEmail] = useState();
  var [phone, setPhone] = useState();

  const userSchema = yup.object().shape({
    // name can not be an empty string so we will use the required function
    // username: yup.string().required(),
    // lastName: yup.string(),
    // email can not be an empty string so we will use the required function
    name: yup.string().required(),
    email: yup.string().email().required(),
    // password can not be an empty string so we will use the required function. Also, we have used the `min` function to set the minimum length of the password. Yup passwords by default handle the conditions of at least one upper case, at least one lower case, and at least one special character in the password
    phone: yup.string().min(10).required(),
    // age: yup.string(),
    // mobile: yup.string(),
  });

  async function validateForm(e) {
    // creating a form data object
    if (clickStatus) {
      setClickStatus(false);
      let dataObject = {
        // firstName: firstName,
        // lastName: lastName,
        // email: email,
        name: name,
        email: email,
        phone: phone,
        // age: age,
        // mobile: mobile,
      };

      // validating this dataObject concerning Yup userSchema

      const isValid = await userSchema.isValid(dataObject);

      if (isValid) {
        alert("Form is Valid");
      } else {
        alert("Form is Invalid");
      }
      e.preventDefault();
    } else {
      setClickStatus(true);
      e.preventDefault();
    }
  }
  return (
    <div>
      <form className="max-w-md mx-auto rounded-lg shadow-2xl overflow-hidden p-6 space-y-3">
        <h2 className="text-xl font-bold text-left text-gray-700">
          Sigup to our platform
        </h2>
        <div className="text-gray-600 text-md font-bold">Name</div>
        <CustomInput
          label="Name"
          placeholder={"Name"}
          type={"text"}
          onChange={(e) => {
            setName(e.target.value);
            console.log(username);
          }}
        />
        <div className="text-gray-600 text-md font-bold">Email</div>
        <CustomInput
          label="Email"
          placeholder={"Email"}
          type={"email"}
          onChange={(e) => {
            setEmail(e.target.value);
            console.log(username);
          }}
        />
        <div className="text-gray-600 text-md font-bold">Phone Number</div>
        <CustomInput
          label="Password"
          placeholder={""}
          type={"text"}
          onChange={(e) => {
            setPhone(e.target.value);
            console.log(username);
          }}
        />

        <div className="container mx:auto flex justify-center items-center ">
          <CustomButton
            text={"Signup"}
            isLoading={clickStatus}
            handleClick={validateForm}
            bgColor="#5F9EA0"
            size="sm"
            textColor="white"
            spinnerSize={"sm"}
            spinnerColor={"white"}
          ></CustomButton>
        </div>
      </form>
    </div>
  );
}
