import MonthSelector from "./MonthSelector"
import './Calendar.scss'
import { useAtom } from "jotai"
import { Months } from "../util/DateUtils"
import { monthAtom } from "../atoms"
import { useEffect, useState } from "react"

type Props = {}

export default function Calendar({}: Props) {
  const [month] = useAtom(monthAtom)
  const [days, setDays] = useState(0)

  useEffect(()=>{
    const monthDays = new Date(2024, month+1, 0).getDate()
    setDays(monthDays)
  },[month])

  return (
    <div className="calendar">
        <MonthSelector/>
        <div className="day-list">
          {Array(days).fill('').map((day, index)=><div key={day} className="day">{index+1}</div>)}
        </div>
    </div>
  )
}