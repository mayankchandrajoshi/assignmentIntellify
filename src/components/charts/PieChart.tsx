"use client"

import { DataInterface } from '@/interfaces/dataInterface';
import React from 'react'
import { Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';

interface PropsInterface {
  data: DataInterface[]
}
const PieChartComponent:React.FC<PropsInterface> = ({data}) => {

  const pieData = [
    { name: '2023', value: data.reduce((acc, item) => acc + item[2023], 0) },
    { name: '2024', value: data.reduce((acc, item) => acc + item[2024], 0) },
  ];

  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie data={pieData} dataKey="value" nameKey="name" fill="#8884d8" label />
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  )
}


export default PieChartComponent