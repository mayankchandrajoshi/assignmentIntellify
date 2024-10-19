"use client";

import { DataInterface } from '@/interfaces/dataInterface';
import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

interface PropsInterface {
    data : DataInterface[]
}

const BarGraph: React.FC<PropsInterface> = ({ data }) => {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="2023" fill="#8884d8" />
                <Bar dataKey="2024" fill="#82ca9d" />
            </BarChart>
        </ResponsiveContainer>
    );
}

export default BarGraph;
