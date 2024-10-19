"use client"

import { DataInterface } from "@/interfaces/dataInterface";
import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, ResponsiveContainer, Tooltip } from "recharts";

interface PropsInterface {
    data: DataInterface[]
}

const RadarChartComponent:React.FC<PropsInterface> = ({data}) => { 

    const radarData = data.map((entry) => ({
        sales: entry.name,
        A: entry[2023],
        B: entry[2024],
    }));

    return (
        <ResponsiveContainer width="100%" height="100%">
            <RadarChart data={radarData}>
                <PolarGrid />
                <PolarAngleAxis dataKey="sales" />
                <Radar name="2023" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                <Radar name="2o24" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
                <Tooltip />
            </RadarChart>
        </ResponsiveContainer>
    )
};

export default RadarChartComponent