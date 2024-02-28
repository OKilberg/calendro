import { useAtom } from "jotai"
import { Months, isMonth } from "../util/DateUtils"
import './Calendar.scss'
import { monthAtom } from "../atoms"
import { useConditionalClassName } from "../util/ClassName"

type Props = {}

export default function MonthSelector({ }: Props) {
  return (
    <nav>
      <ul className="month-selector">
        {Months.map((month, index)=><Month month={month} num={index}/>)}
      </ul>
    </nav>
  )
}

function Month({month, num}: {month: string, num: number}) {
  const [selectedMonth, setMonth] = useAtom(monthAtom)

  const className = useConditionalClassName(isMonth(selectedMonth, month), "active","month","combine")

  return (
    <li key={num} className={className} onClick={()=>setMonth(num)}>
      {month}
    </li>
  )
}