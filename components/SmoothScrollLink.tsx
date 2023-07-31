import React from "react";

const SmoothScrollLink = ({ href, children, onClick }) => {
  const handleClick = (e) => {
    e.preventDefault();
    onClick();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <a href={href} onClick={handleClick} className="text-base font-normal lg:font-medium">
      {children}
    </a>
  );
};

export default SmoothScrollLink;