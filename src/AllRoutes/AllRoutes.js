import Login from "../Components/Pages/Login/Login";
import Forgetpassword from "../Components/Pages/Forgetpassword/Forgetpassword.js";
import Mailcheck from "../Components/Pages/Checkmail/Checkmail.js";
import Newpassword from "../Components/Pages/Newpassword/Newpassword.js";
import Donepassword from "../Components/Pages/Donepassword/Donepassword.js";
import Selectrole from "../Components/Pages/Selectrole/Selectrole.js";
import Question from "../Components/Pages/Questions/Question.js";
import Investor from "../Components/Pages/Investor/Investor.js";
import Membership from "../Components/Pages/Membership/Membership.js";
import Carddetail from "../Components/Pages/Carddetail/Carddetail.js";
import Benefits from "../Components/Pages/Benefits/Benefits.js";
import Notification from "../Components/Pages/Notification/Notification";
import Home from "../Components/Web/Pages/Home/Home.js";
import Network from "../Components/Web/Pages/Network/Network.js";
import Boardbenefits from "../Components/Pages/Benefits/Boardbenefits.js";
import Boardmember from "../Components/Pages/BoardMember/Boardmember.js";
import Networkprofile from "../Components/Web/Pages/Networkprofile/Networkprofile";
import MyNotification from "../Components/Web/Pages/Notifications/MyNotification";
import Deal from "../Components/Web/Pages/Deal/Deal";
import Onsearch from "../Components/Web/Pages/Onsearch/Onsearch";
const PublicRoutes = [
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/forgetpassword",
    name: "Forgetpassword",
    component: Forgetpassword,
  },
  {
    path: "/mailcheck",
    name: "Mailcheck",
    component: Mailcheck,
  },
  {
    path: "/newpassword",
    name: "Newpassword",
    component: Newpassword,
  },
  {
    path: "/donepassword",
    name: "Donepassword",
    component: Donepassword,
  },
  {
    path: "/selectrole",
    name: "Selectrole",
    component: Selectrole,
  },
  {
    path: "/questions",
    name: "Question",
    component: Question,
  },
  {
    path: "/investor",
    name: "Investor",
    component: Investor,
  },
  {
    path: "/membership",
    name: "Membership",
    component: Membership,
  },

  {
    path: "/carddetail",
    name: "Carddetail",
    component: Carddetail,
  },
  {
    path: "/benefits",
    name: "Benefits",
    component: Benefits,
  },
  {
    path: "/boardbenefits",
    name: "Boardbenefits",
    component: Boardbenefits,
  },
  {
    path: "/boardmember",
    name: "Boardmember",
    component: Boardmember,
  },
  {
    path: "/notification",
    name: "Notification",
    component: Notification,
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/network",
    name: "Network",
    component: Network,
  },
  {
    path: "/networkprofile",
    name: "Networkprofile",
    component: Networkprofile,
  },
  {
    path: "/mynotification",
    name: "MyNotification",
    component: MyNotification,
  },
  {
    path: "/deal",
    name: "Deal",
    component: Deal,
  },
  {
    path: "/onsearch",
    name: "Onsearch",
    component: Onsearch,
  },
];

export default PublicRoutes;

export const PrivateRoutes = [];
