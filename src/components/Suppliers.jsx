import React from 'react'
import Button, { styles } from './Button';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

function Suppliers(){
    return(
        <div className='Supplier-Dash'>
        <div>
            <h2>Sales Overview</h2>
        </div>
        <div className='Left-Dash'>
          
            <div className='Card-1'>
            <h2>Sales Overview</h2>
            </div>
        </div>
        <div className='Rights-Dash'>
            <div className='Card-1'>
                <h2>Low Quantity Stock</h2>
            </div>
        </div>
    </div>
    )
}
export default Suppliers