"use client";
import { useState } from "react";
import * as yup from "yup";
import CustomButton from "@/app/components/button/button";
import CustomInput from "@/app/components/textfields/input";
export default function SetPassword() {
  var [clickStatus, setClickStatus] = useState(true);
  var [userName, setUserName] = useState();
  var [password, setPassword] = useState();
  var [confirmPassword, setConfirmPassword] = useState();

  const userSchema = yup.object().shape({
    // name can not be an empty string so we will use the required function
    // username: yup.string().required(),
    // lastName: yup.string(),
    // email can not be an empty string so we will use the required function

    userName: yup.string().email().required(),
    // password can not be an empty string so we will use the required function. Also, we have used the `min` function to set the minimum length of the password. Yup passwords by default handle the conditions of at least one upper case, at least one lower case, and at least one special character in the password
    password: yup.string().required(),
    confirmPassword: yup.string().required(),
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
        userName: userName,
        password: password,
        confirmPassword: confirmPassword,
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
        <h2 className="text-xl font-bold text-center text-gray-700">
          Confirm Password
        </h2>

        <div className="text-gray-600 text-md font-bold">Username</div>
        <CustomInput
          label="Username"
          placeholder={"Email"}
          type={"email"}
          onChange={(e) => {
            setUserName(e.target.value);
            console.log(userName);
          }}
        />
        <div className="text-gray-600 text-md font-bold">Password</div>
        <CustomInput
          label="Password"
          placeholder={""}
          type={"password"}
          onChange={(e) => {
            setPassword(e.target.value);
            console.log(password);
          }}
        />
        <div className="text-gray-600 text-md font-bold">Confirm Password</div>
        <CustomInput
          label="Password"
          placeholder={""}
          type={"password"}
          onChange={(e) => {
            setConfirmPassword(e.target.value);
            console.log(confirmPassword);
          }}
        />

        <div className="container mx:auto flex justify-center items-center ">
          <CustomButton
            text={"Set Password"}
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
