"use client"

import { createTheme, InputLabel, MenuItem, Select, styled, TextField, ThemeProvider } from '@mui/material'
import React, { useEffect, useState } from 'react'
import CustomSelect from './CustomSelect';
import CustomOutlinedInput from './CustomTextInput';
import { supabase } from '@/lib/supabaseClient';


const DeleteDataForm = () => {

    const [ month,setMonth ] = useState("");
    const [ data,setData ] = React.useState<string[]>([]);
    const  [ isLoading, setLoading ] = React.useState(true);

    const fetchData = async () => {
        const { data, error } = await supabase.from('Sales').select('name');
        
        if (error) {
            alert(error.message);
        } else {
            setData(data.map(item=>item.name));
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);


    const handleSubmit = async (e: React.FormEvent) => {

        const { error } = await supabase.from('Sales').delete().eq('name',month);       

        if (error) {
            alert('Error deleting: ' + error.message);
        } else {
            alert('Entry deleted successfully');
        }
    }

    return (
      isLoading?<h1></h1>:(
        <form onSubmit={handleSubmit} className='w-full max-w-80 flex flex-col gap-5'>
            <CustomSelect
                labelId="month-label"
                id="month-select"
                value={month}
                label="Month"
                onChange={(e:any)=>setMonth(e.target.value)}
                className='mt-5'
            >
                {
                    data.map((item,index)=>(
                        <MenuItem key={index} value={item}>{item}</MenuItem>
                    ))
                }
            </CustomSelect>
            <input type='submit' value="Submit" className="w-full flex flex-row items-center justify-center gap-2 p-2 px-5 rounded-md bg-slate-200 hover:bg-slate-300 duration-500 mt-5 text-black font-semibold cursor-pointer" />
        </form>
      )
    )
}

export default DeleteDataForm