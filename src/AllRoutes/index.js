import React from "react";
import PublicRoutes from "./AllRoutes";
import Layout from "../Components/Layout/index";
import { Navigate, Route, Routes } from "react-router-dom";
import HomeLayout from "../Components/Web/Layout/Index";
import LoginLayout from "../Components/Layout/index";
import Login from "../Components/Pages/Login/Login";
import Forgetpassword from "../Components/Pages/Forgetpassword/Forgetpassword.js";
import Mailcheck from "../Components/Pages/Checkmail/Checkmail.js";
import Newpassword from "../Components/Pages/Newpassword/Newpassword.js";
import Donepassword from "../Components/Pages/Donepassword/Donepassword.js";
import Selectrole from "../Components/Pages/Selectrole/Selectrole.js";
import Question from "../Components/Pages/Questions/Question.js";
import Stepone from "../Components/Pages/Signup/Stepone.js";
import Membership from "../Components/Pages/Membership/Membership.js";
import Carddetail from "../Components/Pages/Carddetail/Carddetail.js";
import Benefits from "../Components/Pages/Benefits/Benefits.js";
import Boardbenefits from "../Components/Pages/Benefits/Boardbenefits.js";
import Notification from "../Components/Pages/Notification/Notification";
import Boardmember from "../Components/Pages/BoardMember/Boardmember.js";
import Home from "../Components/Web/Pages/Home/Home.js";
import Network from "../Components/Web/Pages/Network/Network.js";
import Networkprofile from "../Components/Web/Pages/Networkprofile/Networkprofile.js";
import MyNotification from "../Components/Web/Pages/Notifications/MyNotification";
import Deal from "../Components/Web/Pages/Deal/Deal";
import Onsearch from "../Components/Web/Pages/Onsearch/Onsearch";
import Chat from "../Components/Web/Pages/Chat/Chat";
import Steptwo from "../Components/Pages/Signup/Steptwo";
import Stepthree from "../Components/Pages/Signup/Stepthree";
import Investorsignup from "../Components/Pages/Signup/Investorsignup";
import Fullpost from "../Components/Web/Pages/FullPost/Fullpost";
import Fullpostone from "../Components/Web/Pages/FullPost/Fullpostone";
import Agreement from "../Components/Web/Pages/FullPost/Agreement";
export default function index() {
  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      return (
        <Route
          path={prop.path}
          exact
          element={
            prop.path ? (
              <LoginLayout>
                <prop.component />
              </LoginLayout>
            ) : (
              <Navigate
                to={{
                  pathname: "/",
                  // state: { from: props.location },
                }}
              />
            )
          }
          key={key}
        />
      );
    });
  };
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate replace to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgetpassword" element={<Forgetpassword />} />
        <Route path="/mailcheck" element={<Mailcheck />} />
        <Route path="/newpassword" element={<Newpassword />} />
        <Route path="/donepassword" element={<Donepassword />} />
        <Route path="/selectrole" element={<Selectrole />} />
        <Route path="/questions" element={<Question />} />
        <Route path="/stepone" element={<Stepone />} />
        <Route path="/steptwo" element={<Steptwo />} />
        <Route path="/stepthree" element={<Stepthree />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/carddetail" element={<Carddetail />} />
        <Route path="/benefits" element={<Benefits />} />
        <Route path="/boardbenefits" element={<Boardbenefits />} />
        <Route path="/boardmember" element={<Boardmember />} />
        <Route path="/investorsignup" element={<Investorsignup />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/home" element={<Home />} />
        <Route path="/fullpost" element={<Fullpost />} />
        <Route path="/fullpostone" element={<Fullpostone />} />
        <Route path="/agreement" element={<Agreement />} />
        <Route path="/network" element={<Network />} />
        <Route path="/networkprofile" element={<Networkprofile />} />
        <Route path="/mynotification" element={<MyNotification />} />
        <Route path="/deal" element={<Deal />} />
        <Route path="/onsearch" element={<Onsearch />} />
        <Route path="/chat" element={<Chat />} />

        {getRoutes(PublicRoutes)}
      </Routes>
    </div>
  );
}
