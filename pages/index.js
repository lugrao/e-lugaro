import { PersonalInfo } from "components/PersonalInfo"
import { Tools } from "components/Tools"
import { Projects } from "components/Projects"

export default function Home() {
  return (
    <>
      <div css={{ display: "flex", justifyContent: "space-evenly" }}>
        <PersonalInfo />
        <div>
          <Tools />
          <Projects />
        </div>
      </div>
    </>
  )
}
