import {
  Eye,
  PencilLine,
  UserCircle,
  UserSquare,
  UsersFour,
} from "phosphor-react";
import { Accordion, AccordionItem } from "@szhsin/react-accordion";

import { Avatar } from "../Avatar/Avatar";
import styles from "./Sidebar.module.css";
import AccordionBar from "../Accordion/AccordionBar";

const accordionsData = [
  {
    id: 1,
    header: "Recently Viewed",
    content: ["#ReactCommunity", "#NextJS", "#Typescript", "#Javascript"],
  },
  {
    id: 2,
    header: "Groups",
    content: [
      "Best React Community",
      "Developers Front-End",
      "Developer React",
      "Bugs And Errors",
    ],
  },
];

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1592609931095-54a2168ae893?auto=format&fit=crop&q=40&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <div className={styles.profile}>
        <Avatar imageUrl="https://github.com/santozxy.png" />
        <strong>Monnuery Júnior</strong>
        <span>FrontEnd Developer</span>
      </div>

      <div className={styles.editProfile}>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </div>
      <div className={styles.followers}>
        <div className={styles.followersContent}>
          <strong>
            Followers <UserCircle />
          </strong>
          <span>5984 </span>
        </div>
        <div className={styles.followersContent}>
          <strong>
            Following <UserCircle />
          </strong>
          <span>999</span>
        </div>
      </div>
      <div className={styles.accordionContainer}>
        {accordionsData.map((item) => {
          return (
            <AccordionBar
              id={item.id}
              header={item.header}
              content={item.content}
            />
          );
        })}
      </div>
    </aside>
  );
}
