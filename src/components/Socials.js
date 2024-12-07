import React from "react";

import {
  ImFacebook,
  ImTwitter,
  ImPinterest,
  ImInstagram,
  ImYoutube,
} from "react-icons/im";

const socialsIcon = [
  { icon: <ImFacebook />, href: "http://www.facebook.com" },
  { icon: <ImTwitter />, href: "http://www.twitter.com" },
  { icon: <ImPinterest />, href: "http://www.pinterest.com" },
  { icon: <ImInstagram />, href: "http://www.instagram.com" },
  { icon: <ImYoutube />, href: "http://www.youtube.com" },
];

const Socials = () => {
  return (
    <div className="hidden xl:flex ml-24">
      <ul className="flex gap-x-4">
        {socialsIcon.map((item, index) => (
          <li key={index}>
            <a href={item.href} target="_blank">
              {item.icon}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Socials;
