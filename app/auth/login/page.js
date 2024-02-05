"use client";
import { useState } from "react";
import * as yup from "yup";
import CustomButton from "@/app/components/button/button";
import CustomInput from "@/app/components/textfields/input";
export default function Login() {
  var [clickStatus, setClickStatus] = useState(true);
  var [username, setUserName] = useState();
  var [password, setPassword] = useState();

  const userSchema = yup.object().shape({
    // name can not be an empty string so we will use the required function
    // username: yup.string().required(),
    // lastName: yup.string(),
    // email can not be an empty string so we will use the required function
    userName: yup.string().email().required(),
    // password can not be an empty string so we will use the required function. Also, we have used the `min` function to set the minimum length of the password. Yup passwords by default handle the conditions of at least one upper case, at least one lower case, and at least one special character in the password
    password: yup.string().min(8).required(),
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
        userName: username,
        password: password,
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
      <form className="container mx-auto rounded-lg shadow-2xl overflow-hidden p-6 space-y-3 bg-white">
        <h2 className="text-xl font-bold text-left text-gray-700">
          Signin to our platform
        </h2>
        <div className="text-gray-600 text-md font-bold">Username</div>
        <CustomInput
          label="Username"
          placeholder={"Username"}
          type={"text"}
          onChange={(e) => {
            setUserName(e.target.value);
            console.log(username);
          }}
        />
        <div className="text-gray-600 text-md font-bold">Password</div>
        <CustomInput
          label="Password"
          placeholder={"Password"}
          type={"password"}
          onChange={(e) => {
            setPassword(e.target.value);
            console.log(username);
          }}
        />
        <div className="flex justify-between">
          <div className="flex  items-ceneter gap-2">
            <input type="checkbox" className="w-4 h-4 focus:ring-2"></input>
            <div className="text-xs  font-medium text-gray-600 ">
              Remember me
            </div>
          </div>

          <a className="text-xs text-cyan-600 hover:underline">
            Reset Password
          </a>
        </div>
        <div className=" flex max-w-52 max-h-20 ">
          <CustomButton
            text={"Login"}
            isLoading={clickStatus}
            handleClick={validateForm}
            bgColor="#5F9EA0"
            size="sm"
            textColor="white"
            spinnerSize={"sm"}
            spinnerColor={"white"}
          ></CustomButton>
        </div>
        <div className="flex justify-between">
          <label className="text-sm tranlate-y-0 font-medium text-gray-600 ">
            Not Registered?
          </label>

          <a className="text-sm text-cyan-600 hover:underline">
            Create Account
          </a>
        </div>
      </form>
    </div>
  );
}
