"use client"

import { createTheme, InputLabel, MenuItem, Select, styled, TextField, ThemeProvider } from '@mui/material'
import React, { useEffect, useState } from 'react'
import CustomSelect from './CustomSelect';
import CustomOutlinedInput from './CustomTextInput';
import { supabase } from '@/lib/supabaseClient';
import { DataInterface } from '@/interfaces/dataInterface';
import { AnyARecord } from 'node:dns';


const UpdateDataForm = () => {

    const [ month,setMonth ] = useState("");
    const [ sales2023,setSales2023 ] = useState<number>(0);
    const [ sales2024,setSales2024 ] = useState<number>(0);

    
    const [ data,setData ] = React.useState<DataInterface[]>([]);
    
    const  [ isLoading, setLoading ] = React.useState(true);

    const fetchData = async () => {
        const { data, error } = await supabase.from('Sales').select('*');
        
        if (error) {
            alert(error.message);
        } else {
            setData(data as DataInterface[]);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);


    const handleSubmit = async(e: React.FormEvent) => {
        if(sales2023<=0 || sales2024 <=0) return alert("Please submit valid data");

        const { data, error } = await supabase.from('Sales') .update({
            name : month,
            2023 : sales2023,
            2024 : sales2024
        }).eq('name', month);

        if (error) {
            alert('Error updating entry:'+ error.message);
        } else {
            alert('Item updated successfully');
        }
    }

    return (
        isLoading?<h2 className="text-2xl text-center font-bold">Loading....</h2>
        :(
            <form onSubmit={handleSubmit} className='w-full max-w-80 flex flex-col gap-5'>
                <CustomSelect
                    labelId="month-label"
                    id="month-select"
                    value={month}
                    label="Month"
                    onChange={(e:any)=>{
                        setMonth(e.target.value);
                        setSales2023(data[data.findIndex((value)=>value.name==e.target.value)][2023]);
                        setSales2024(data[data.findIndex((value)=>value.name==e.target.value)][2024]);
                    }}
                    className='mt-5'
                >
                    {
                        data.map((item)=>(
                            <MenuItem value={item.name}>{item.name}</MenuItem>
                        ))
                    }
                </CustomSelect>
                <CustomOutlinedInput id="2023" label="Sales 2023" variant="outlined" type="number" placeholder='2023' value={sales2023} onChange={(e) => setSales2023(parseFloat(e.target.value))} />
                <CustomOutlinedInput id="2024" label="Sales 2024" variant="outlined" type="number" placeholder='2024' value={sales2024} onChange={(e) => setSales2024(parseFloat(e.target.value))}/>
                <input type='submit' value="Submit" className="w-full flex flex-row items-center justify-center gap-2 p-2 px-5 rounded-md bg-slate-200 hover:bg-slate-300 duration-500 mt-5 text-black font-semibold cursor-pointer" />
            </form>
        )
    )
}

export default UpdateDataForm