"use client";
import { useState } from "react";
import CustomButton from "./components/button/button";
import CustomTag from "./components/tags";
import CustomAccordion from "./components/accordion";
import CustomAvatar from "./components/avatar";
import ButtonWithNotification from "./components/button/notificationbutton";
import ProfileCard from "./components/card/profilecard";
import FloatingTextFieldWithBorder from "./components/textfields/floatingtextfield_bd";
import FloatingTextField from "./components/textfields/floatingtextfield";
import * as yup from "yup";
import CustomInput from "./components/textfields/input";
import Login from "./auth/login/page";
import Signup from "./auth/signup/page";
import List from "./htmlelements/list";
import Border from "./htmlelements/border";
import Shadow from "./htmlelements/shadow";
import Gradient from "./htmlelements/gradient";
import BackgroundImage from "./htmlelements/bacgroundimage";
export default function Home() {
  const accordionData = [
    {
      title: "Section 1",
      content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
      laborum cupiditate possimus labore, hic temporibus velit dicta earum
      suscipit commodi eum enim atque at? Et perspiciatis dolore iure
      voluptatem.`,
    },
    {
      title: "Section 2",
      content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia veniam
      reprehenderit nam assumenda voluptatem ut. Ipsum eius dicta, officiis
      quaerat iure quos dolorum accusantium ducimus in illum vero commodi
      pariatur? Impedit autem esse nostrum quasi, fugiat a aut error cumque
      quidem maiores doloremque est numquam praesentium eos voluptatem amet!
      Repudiandae, mollitia id reprehenderit a ab odit!`,
    },
    {
      title: "Section 3",
      content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
      quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
      dolor ut sequi minus iste? Quas?`,
    },
  ];
  return (
    <div className="w-full h-full flex">
      {/* <div className="title">Title</div>
      <div className="subtitle  bg-slate-500 text-center">Sub title</div>
      <h1>Header</h1>
      <di className="selection:bg-red-600 hover:bg-yellow-600 ">
        Selected Line:<span className="hover:bg-green-600">Hai iam kannan</span>
      </di>
      <List />
      <Border />
      <Shadow />
      <Gradient /> */}

      <div className="grid grid-cols-2">
        <div className="">
          <BackgroundImage
            child={<div className=""></div>}
            size={"100vh"}
            image={
              "https://cdn.pixabay.com/photo/2023/04/13/17/49/dare-7923106_1280.jpg"
            }
          />
        </div>

        <div className="">
          <div className="h-screen flex justify-center items-center">
            <Login />
          </div>
        </div>
      </div>
    </div>
  );
}
