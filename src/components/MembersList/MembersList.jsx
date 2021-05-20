import React from "react";
import MemberListItem from "./MemebersListItem/MembersListItem";
import styles from "./MembersList.module.scss";

const MembersList = ({ members }) => {
  return (
    <div className={styles.memberList}>
      {members.map((item, index) => {
        if (index % 2 === 0) {
          return <MemberListItem {...item} even={true} key={index} />;
        } else {
          return <MemberListItem {...item} key={index} />;
        }
      })}
    </div>
  );
};

export default MembersList;
