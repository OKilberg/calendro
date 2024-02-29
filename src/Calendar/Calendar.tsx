import MonthSelector from "./MonthSelector"
import './calendar.scss'
import { useAtom } from "jotai"
import { monthAtom, yearAtom } from "../state/atoms"
import { useEffect, useMemo, useState } from "react"
import { getDateWeekdayInitials } from "../util/dateUtils"
import YearSelector from "./YearSelector"

type Props = {}

export default function Calendar({}: Props) {
  const [month] = useAtom(monthAtom)
  const [year] = useAtom(yearAtom)
  const [days, setDays] = useState(0)

  useEffect(()=>{
    const offsetMonth = month+1;
    const date: Date = new Date(year, offsetMonth, 0); // Returns last day of previous month, therefore offset is required
    const monthDays: number = date.getDate()
    setDays(monthDays)
  },[month, year])

  return (
    <div className="calendar">
        <YearSelector/>
        <MonthSelector/>
        <div className="day-list">
          {Array(days).fill('').map((_day, index)=><DateItem dayNum={index+1}/>)}
        </div>
    </div>
  )
}

function DateItem({dayNum}:{dayNum: number}){
  const [month] = useAtom(monthAtom)
  const [year] = useAtom(yearAtom)

  const weekday = useMemo(//Memo here is probably overkill but I wanted to try using it
    ()=>getDateWeekdayInitials(year, month, dayNum, 2),
    [year, month, dayNum]
  )

  return (
    <li key={dayNum} className="day">
      {[weekday,dayNum].join(' ')}
    </li>
  )
}