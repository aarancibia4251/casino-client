import React from "react";

interface Props {
  link;
}

const SidebarNavSubItem = ({ link }: Props) => {
  return (
    <li>
      <a>{link.title} </a>
    </li>
  );
};

export default SidebarNavSubItem;
