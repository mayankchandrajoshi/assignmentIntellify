"use client"

import { DataInterface } from '@/interfaces/dataInterface';
import React from 'react'
import { CartesianGrid, Legend, ResponsiveContainer, XAxis, YAxis,LineChart, Tooltip, Line } from 'recharts';

interface PropsInterface {
  data: DataInterface[]
}


const LineChartComponent:React.FC<PropsInterface> = ({data}) => {
    
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="2023" stroke="#8884d8" />
        <Line type="monotone" dataKey="2024" stroke="#82ca9d" />
      </LineChart>
  </ResponsiveContainer>
  )
}

export default LineChartComponent