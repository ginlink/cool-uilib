import React, { useCallback } from 'react'
import styled from 'styled-components/macro'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import { DateRangePicker, DateRange } from 'react-date-range'

import { addDays } from 'date-fns'
import { useState } from 'react'

export default function RangeDatePicker() {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: 'selection',
    },
  ])

  return (
    <DateRange
      onChange={(item: any) => 123}
      editableDateInputs={false}
      moveRangeOnFirstSelection={false}
      months={2}
      ranges={state}
      direction="horizontal"
    />
  )
}
