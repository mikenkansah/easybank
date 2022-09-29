import firstpic from "../assets/icon-budgeting.svg";
import secondpic from "../assets/icon-api.svg";
import thirdpic from "../assets/icon-onboarding.svg";
import firstimage from '../assets/image-restaurant.jpg';
import secondimage from '../assets/image-plane.jpg';
import thirdimage from '../assets/image-currency.jpg';
import fourthimage from '../assets/image-confetti.jpg';


//populate the whyChoose page with these informations
const info = [
  {
    id: 1,
    img: firstpic,
    heading: "Online banking",
    body: "Lorem ipsum dolor sit, am consectetur adipisicing elit. Minus explicabo ex deleniti possimus consectetur tempora dolorem eligendi repellat culpa dignissimos?",
  },
  {
    id: 2,
    img: secondpic,
    heading: "Simple Budgeting",
    body: "Lorem ipsum dolor sit, am consectetur adipisicing elit. Minus explicabo ex deleniti possimus consectetur tempora dolorem eligendi repellat culpa dignissimos?",
  },
  {
    id: 3,
    img: thirdpic,
    heading: "Faste Onboarding",
    body: "Lorem ipsum dolor sit, am consectetur adipisicing elit. Minus explicabo ex deleniti possimus consectetur tempora dolorem eligendi repellat culpa dignissimos?",
  },
  {
    id: 4,
    img: thirdpic,
    heading: "Open API",
    body: "Lorem ipsum dolor sit, am consectetur adipisicing elit. Minus explicabo ex deleniti possimus consectetur tempora dolorem eligendi repellat culpa dignissimos?",
  }
];

//populate the latest article page with the latest articles
const infoarticles = [
  {
    id: 1,
    img: firstimage,
    small: 'By Claire Robinson',
    heading: "",
    body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto illo eaque cum saepe, quaerat quidem. Optio fuga quis illum est.",
  },
  {
    id: 2,
    img: secondimage,
    small: 'By Claire Robinson',
    heading: "Recieve any money with no stress",
    body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto illo eaque cum saepe, quaerat quidem. Optio fuga quis illum est.",
  },
  {
    id: 3,
    img: thirdimage,
    small: 'By Claire Robinson',
    heading: "Recieve money in any currency with no stress",
    body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto illo eaque cum saepe, quaerat quidem. Optio fuga quis illum est.",
  },
  {
    id: 4,
    img: fourthimage,
    small: 'By Claire Robinson',
    heading: "Recieve any money with no stress",
    body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto illo eaque cum saepe, quaerat quidem. Optio fuga quis illum est.",
  },
]

export default info;
export {infoarticles};