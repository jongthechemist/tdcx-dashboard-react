import React from 'react'
import PropTypes from 'prop-types'
import { ResponsivePie } from '@nivo/pie'
import { useAccent } from '../helpers/hooks'

export const getColor = (accent) => (args) => {
  if (args?.id === 'completed' || args?.data?.id === 'completed') return accent
  return 'transparent'
}

export const Pie = ({ count, total }) => {
  const data = React.useMemo(
    () => [
      { id: 'completed', label: 'Completed Tasks', value: count },
      { id: 'pending', label: 'Pending', value: total - count }
    ],
    [count, total]
  )
  const accent = useAccent()
  return (
    <ResponsivePie
      data={data}
      margin={{
        top: 10,
        bottom: 10,
        right: 20,
        left: 20
      }}
      colors={[accent, '#E8ECEC']}
      radialLabel={'label'}
      radialLabelsLinkHorizontalLength={0}
      radialLabelsTextColor={getColor(accent)}
      radialLabelsLinkColor={getColor(accent)}
      enableSlicesLabels={false}
    />
  )
}
Pie.propTypes = {
  count: PropTypes.number,
  total: PropTypes.number
}
