// NAVIGATION
export const NAV_LINKS = [
  { href: "/fundflit", key: "how_fundflit_work", label: "How Fundflit Work?" },
  { href: "/about", key: "about", label: "About" },
  { href: "/campaigns", key: "campaigns", label: "Campaigns" },
  { href: "/contact", key: "contact_us", label: "Contact Us" },
];

// FEATURES SECTION
export const FEATURES = [
  {
    title: "Real maps can be offline",
    icon: "/map.svg",
    variant: "green",
    description:
      "We provide a solution for you to be able to use our application when climbing, yes offline maps you can use at any time there is no signal at the location",
  },
  {
    title: "Set an adventure schedule",
    icon: "/calendar.svg",
    variant: "green",
    description:
      "Schedule an adventure with friends. On holidays, there are many interesting offers from Hilink. That way, there's no more discussion",
  },
  {
    title: "Technology using augment reality",
    icon: "/tech.svg",
    variant: "green",
    description:
      "Technology uses augmented reality as a guide to your hiking trail in the forest to the top of the mountain. Already supported by the latest technology without an internet connection",
  },
  {
    title: "Many new locations every month",
    icon: "/location.svg",
    variant: "orange",
    description:
      "Lots of new locations every month, because we have a worldwide community of climbers who share their best experiences with climbing",
  },
];

// FOOTER SECTION
export const FOOTER_LINKS = [
  {
    title: "Learn More",
    links: ["About Fundflit", "Privacy Policy", "Contact Us", "Jobs"],
  },
  {
    title: "Our Community",
    links: ["Discord", "Hacking Club", "Pragmatic Builders"],
  },
];

export const FOOTER_CONTACT_INFO = {
  title: "Contact Us",
  links: [
    { label: "Mobile Contact", value: "123-456-7890" },
    { label: "Email Address", value: "support@fundflit.com" },
  ],
};

export const SOCIALS = {
  title: "Social Links",
  links: [
    "/assets/instagram.svg",
    "/assets/twitter.svg",
    "/assets/youtube.svg",
  ],
};

export const appImages = [
  {
    id: 1,
    image: "assets/image-1.jpeg",
    text: "Help Build a School",
  },
  {
    id: 2,
    image: "assets/image-2.jpeg",
    text: "Help Build a Healthcare center",
  },
  {
    id: 3,
    image: "assets/image-3.jpeg",
    text: "Help Arumbe Village",
  },
];

export const faqItems = [
  {
    id: 1,
    question: "What is your name?",
    answer:
      "My name is John Doe. My name is John Doe.My name is John Doe.My name is John Doe.My name is John Doe",
  },
  {
    id: 2,
    question: "Where are you from?",
    answer: "I am from New York",
  },
  {
    id: 3,
    question: "What is your favorite color?",
    answer: "My favorite color is blue",
  },
  {
    id: 4,
    question: "How do you spend your weekends?",
    answer: "I enjoy hiking and reading",
  },
];

export const features = [
  {
    imgURL: "/assets/truck-fast.svg",
    label: "Free shipping",
    subtext: "Enjoy seamless shopping with our complimentary shipping service.",
  },
  {
    imgURL: "/assets/shield-tick.svg",
    label: "Secure Payment",
    subtext:
      "Experience worry-free transactions with our secure payment options.",
  },
  {
    imgURL: "/assets/shield-tick.svg",
    label: "Secure Payment",
    subtext:
      "Experience worry-free transactions with our secure payment options.",
  },
  {
    imgURL: "/assets/support.svg",
    label: "Love to help you",
    subtext: "Our dedicated team is here to assist you every step of the way.",
  },
];

// About page Our number section
export const numbers = [
  {
    value: 120 + "m",
    title: "Cool feature title"
  },
  {
    value: 10 + ".000",
    title: "Cool feature title"
  },
  {
    value: 240,
    title: "Cool feature title"
  },
]

// About page teams section
export const members = [
  {
    id: 1,
    imgUrl: "/assets/about-img1.jpeg",
    name: "Michael Scott",
    position: "General Manager"
  },
  {
    id: 2,
    imgUrl: "/assets/about-img2.jpeg",
    name: "Michael Scott",
    position: "General Manager"
  },
  {
    id: 3,
    imgUrl: "/assets/about-img3.png",
    name: "Michael Scott",
    position: "General Manager"
  },
  {
    id: 4,
    imgUrl: "/assets/about-img4.png",
    name: "Michael Scott",
    position: "General Manager"
  },
]

// About page our values section
export const values = [
  {
    imgUrl: "/assets/about-img4.png",
    value: "We are commited.",
    detail: "Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. "
  },
  {
    imgUrl: "/assets/about-img2.jpeg",
    value: "We are responsible.",
    detail: "Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. "
  },
  {
    imgUrl: "/assets/about-img3.png",
    value: "We aim for progress.",
    detail: "Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. "
  },
]

// About page our misson section
export const missions = [
  {
    highlight: "commited.",
    detail: "Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. "
  },
  {
    highlight: "responsible.",
    detail: "Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. Handshake infographic mass market crowdfunding iteration. Handshake infographic mass market crowdfunding iteration. "
  },
]


// contact page form inputs
export const inputItems = [
  {
      id: "name",
      label: "Your Name",
      type: "text",
      imgUrl: "/assets/Icon_name.svg",
      placeholder: "Your Name",
  },
  {
      id: "email",
      label: "Mail",
      type: "email",
      imgUrl: "/assets/Icon-Mail.svg",
      placeholder: "Your Email",
      pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  }
]

// contact page hotline
import { BsFillTelephoneFill } from "react-icons/bs";
import { TiLocation } from "react-icons/ti";
import { TbMailFilled } from "react-icons/tb";
import { RiFacebookLine } from "react-icons/ri";
import { TfiTwitter } from "react-icons/tfi";
import { PiInstagramLogo } from "react-icons/pi";

export const contactItems = {
  direct : [
    {
      imgUrl: BsFillTelephoneFill,
      info: "+234 8679 273 690",
    },
    {
      imgUrl: TbMailFilled,
      info: "support@fundflit.co",
    },
    {
      imgUrl: TiLocation,
      info: "103 Street, Grove Ave, QLD",
    }
  ],
  socilaMedia: [
    {
      imgUrl: RiFacebookLine,
      link: "/"
    },
    {
      imgUrl: TfiTwitter,
      link: "/"
    },
    {
      imgUrl: PiInstagramLogo,
      link: "/"
    }
  ]
}