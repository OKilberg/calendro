import { useAtom } from "jotai"
import { yearAtom } from "../state/atoms"
import { yearOptions } from "../util/DateUtils"

type Props = {}

export default function YearSelector({}: Props) {
    const [year, setYear] = useAtom(yearAtom)
  return (
    <select value={year} onChange={e=>setYear(parseInt(e.target.value))}>
        {yearOptions().map(year => <option value={year}>{year.toString()}</option>)}
    </select>
  )
}