import MonthSelector from "./MonthSelector"
import './Calendar.scss'
import { useAtom } from "jotai"
import { monthAtom, yearAtom } from "../state/atoms"
import { useEffect, useMemo, useState } from "react"
import { getDateWeekday, getDateWeekdayInitials } from "../util/DateUtils"

type Props = {}

export default function Calendar({}: Props) {
  const [month] = useAtom(monthAtom)
  const [days, setDays] = useState(0)

  useEffect(()=>{
    const offsetMonth = month+1;
    const date: Date = new Date(2024, offsetMonth, 0); // Returns last day of previous month, therefore offset is required
    const monthDays: number = date.getDate()
    setDays(monthDays)
  },[month])

  return (
    <div className="calendar">
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
  const weekday = useMemo(
    ()=>getDateWeekdayInitials(year, month, dayNum, 2),
    [year, month, dayNum]
  )

  console.log(weekday)

  return (
    <li key={dayNum} className="day">
      {[weekday,dayNum].join(' ')}
    </li>
  )
}