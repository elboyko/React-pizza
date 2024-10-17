import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = () => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={260}
    height={500}
    viewBox="0 0 260 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="124" cy="110" r="110" />
    <rect x="226" y="267" rx="0" ry="0" width="1" height="0" />
    <rect x="0" y="237" rx="10" ry="10" width="250" height="27" />
    <rect x="0" y="393" rx="10" ry="10" width="90" height="27" />
    <rect x="105" y="385" rx="25" ry="25" width="145" height="45" />
    <rect x="0" y="278" rx="0" ry="0" width="250" height="85" />
  </ContentLoader>
);

export default Skeleton;
