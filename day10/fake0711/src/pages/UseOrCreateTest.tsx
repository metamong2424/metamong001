import { Title, Avatar } from "../components";
import * as D from "../data";
import { useOrCreate } from "./useOrCreate";

export default function CreateOrUseTest() {
  //prettier-ignore
  // 코드를 완성

  const headText = useOrCreate<string[]>("headTexts", () => ['NO','NAME','JOB TITLE','EMAIL ADDRESS']);

  const users = useOrCreate<D.IUser[]>("users", () => D.makeArray(100).map(D.makeRandomUser[]));

  const head = useOrCreate<'head', ()=> HeadText.map(text +> <th key={text}><text></th>

  const user = useOrCreate<D.IUser[]>("users", () => D.makeArray(100).map(D.makeRandomUser[]));
  
  
  
  return (
    <div className="m5-4">
      <Title>CreateOrUseTest</Title>
      <div className="overflow-x-auto mt-4 p-4">
        <table className="table table-zebra table-compact w-full">
          <thead>
            <tr>{head}</tr>
          </thead>
          <tbody>{body}</tbody>
        </table>
      </div>
    </div>
  )
}
