import { Accordion, AccordionItem } from "@szhsin/react-accordion";
import styles from "./AccordionBar.module.css";
import { CaretDown, CaretUp, Eye, UsersThree } from "phosphor-react";
import { useState } from "react";

interface AccordionsData {
  id: number;
  header: string;
  content: string[];
}

export default function AccordionBar({ id, header, content }: AccordionsData) {
  const [toggle, setToggle] = useState(true);
  function handleToggleIcon() {
    setToggle(!toggle);
  }
  return (
    <Accordion allowMultiple>
      <AccordionItem
        key={id}
        header={
          <div className={styles.accordionButton}>
            {toggle ? (
              <strong onClick={handleToggleIcon}>
                {header} <CaretUp size={20} />{" "}
              </strong>
            ) : (
              <strong onClick={handleToggleIcon}>
                {header} <CaretDown size={20} />
              </strong>
            )}
          </div>
        }
        className={styles.accordion}
      >
        {content.map((content) => {
          return header === "Recently View" ? (
            <a key={content} href="#">
              <Eye />
              {content}
            </a>
          ) : (
            <a key={content} href="#">
              {content}
              <UsersThree />
            </a>
          );
        })}
      </AccordionItem>
    </Accordion>
  );
}
