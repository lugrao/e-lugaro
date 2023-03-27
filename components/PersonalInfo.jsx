/** @jsxImportSource @emotion/react */
import Image from "next/image"
import profilePic from "public/e.webp"
import { personalInfoList } from "components/personalInfoList"

export function PersonalInfo(props) {
  return (
    <div css={{ textAlign: "center", alignSelf: "center" }} {...props}>
      <Image
        src={profilePic}
        alt="Picture of Ezequiel"
        width={150}
        height={150}
        css={{ borderRadius: "50%" }}
      />
      <h1>Ezequiel Lúgaro</h1>
      <p css={{ fontWeight: "bold", fontSize: 20 }}>Web Developer</p>
      <ul css={{ listStyle: "none", margin: 0, padding: 0 }}>
        {personalInfoList.map((item, index) => (
          <li css={{ height: 35 }} key={index}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}
