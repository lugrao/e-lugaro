import { PersonalInfo } from "components/PersonalInfo"
import { Tools } from "components/Tools"
import { Projects } from "components/Projects"

export default function Home() {
  return (
    <>
      <div css={{ display: "flex" }}>
        <PersonalInfo css={{ width: "50%" }} />
        <div css={{ height: "100vh", width: "50%", overflow: "scroll" }}>
          <Tools />
          <Projects />
        </div>
      </div>
    </>
  )
}
