import React from 'react'
import { ResponsivePie } from '@nivo/pie'

export const Pie = ({ count, total }) => {
  const data = React.useMemo(
    () => [
      { id: 'completed', label: 'Completed Tasks', value: count },
      { id: 'pending', label: 'Pending', value: total - count }
    ],
    [count, total]
  )
  return (
    <ResponsivePie
      data={data}
      margin={{
        top: 10,
        bottom: 10,
        right: 20,
        left: 20
      }}
      colors={['#5285EC', '#E8ECEC']}
      radialLabel={({ id, label }) => {
        if (id === 'completed')
          return (
            <>
              <tspan x={0}>Completed</tspan>
              <tspan x={0} dy={12}>
                Tasks
              </tspan>
            </>
          )
      }}
      radialLabelsLinkHorizontalLength={0}
      radialLabelsTextColor={'#5285EC'}
      radialLabelsLinkColor={({ data }) => {
        if (data.id === 'completed') return '#5285EC'
        return 'transparent'
      }}
      enableSlicesLabels={false}
    />
  )
}
