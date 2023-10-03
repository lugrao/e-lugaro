import styles from "./PersonalInfo.module.css";
import Image from "next/image";
import profilePic from "public/e.webp";
import { personalInfoList } from "app/components/personalInfoList";

export function PersonalInfo(props) {
  return (
    <div className={styles.personal_info_container} {...props}>
      <Image
        className={styles.profile_picture}
        src={profilePic}
        alt="Picture of Ezequiel"
        width={150}
        height={150}
        placeholder="blur"
      />
      <h1>Ezequiel Lúgaro</h1>
      <p className={styles.job_title}>Web Developer</p>
      <ul className={styles.link_list}>
        {personalInfoList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
