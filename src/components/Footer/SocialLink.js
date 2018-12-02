import React from "react";

const SocialLink = ({ url, fontAwesomeIconName, ...props }) => (
  <a
    target="_blank"
    rel="noopener noreferrer"
    href={`${url}`}
    className="btn-social btn-outline"
  >
    <i className={`fa fa-fw fa-${fontAwesomeIconName}`} />
  </a>
);

export default SocialLink;
