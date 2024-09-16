import React from "react";

import styles from "../styles/Output.module.css";

export const Output = ({ output, input }) => {
  return (
    <React.Fragment>
      <ul className={styles.suggestions}>
        {output.length !== 0 ? (
          output.map((content, index) => {
            const regex = new RegExp(input, "gi");
            const contentName = content.name.replace(
              regex,
              `<span style="background:yellow;text-transform:uppercase">${input}</span>`
            );
            const contentYear = content.year.replace(
              regex,
              `<span style="background:yellow;text-transform:uppercase">${input}</span>`
            );
            return (
              <li key={index}>
                <span dangerouslySetInnerHTML={{ __html: contentName }}></span>
                <span dangerouslySetInnerHTML={{ __html: contentYear }}></span>
              </li>
            );
          })
        ) : (
          <>
            <li>Check for a Movie/Series/Anime</li>
            <li>or i haven't watched yet</li>
          </>
        )}
      </ul>
    </React.Fragment>
  );
};
