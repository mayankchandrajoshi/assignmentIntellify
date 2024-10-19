"use client"

import React, { useEffect } from 'react';
import BarGraph from '@/components/charts/BarGraph';
import LineChartComponent from '@/components/charts/LineChart';
import PieChartComponent from '@/components/charts/PieChart';
import RadarChartComponent from '@/components/charts/RadarChart';
import { DataInterface } from '@/interfaces/dataInterface';
import { supabase } from '@/lib/supabaseClient';

const Dashboard = () => {
  const [ data,setData ] = React.useState<DataInterface[]>([]);
  const  [ isLoading, setLoading ] = React.useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from('Sales').select('*');

      console.log(data);
      
      if (error) {
        alert(error.message);
      } else {
        setData(data as DataInterface[]);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center font-[family-name:var(--font-geist-sans)] bg-background p-5 gap-5'>
      <h1 className='text-3xl text-center font-bold'>Dashboard</h1>
      {isLoading?<div className='flex-1 h-full w-full bg-slate-800 flex justify-center items-center'>
        <h2 className="text-2xl text-center font-bold">Loading....</h2>
      </div>:(
        <section className="bg-slate-800 w-full max-h-full flex-1 grid grid-cols-2 grid-rows-2 gap-5 rounded-md p-5">
            <BarGraph data={data}/>
            <PieChartComponent data={data}/> 
            <LineChartComponent data={data}/>
            <RadarChartComponent data={data}/>
        </section>
      )
      }
    </div>
  );
};

export default Dashboard;
