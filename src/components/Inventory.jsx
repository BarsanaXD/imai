import React from 'react'
import Button, { styles } from './Button';
import FilterListIcon from '@mui/icons-material/FilterList';
const handleClick = () => {
    window.location.href = '/';
    
    // You can add your desired functionality here
  };
function Inventory(){
    return(
            <div className='Inventory-Grid'>
                <div>
                <h2>Overall Inventory</h2>
                </div>
                <div className='Card-1'>
                    <div className='Box-1'>
                        <h3 id='Categories'>Total Categories</h3>
                    </div>
                    <div className='Box-1'>
                        <h3 id='Brands'>Total Brands</h3>
                    </div>
                    <div className='Joined'>
                        <div className='Sep-Box-1'>
                            <h3 id='Products'>Total Products</h3>
                        </div>
                        <div className='Sep-Box-2'>
                            <h3 id='Selling'>Top Selling Products</h3>
                        </div>
                    </div>
                    
                </div>
                <div className='Card-2'>
                <div className='Flexed'>
                    <h3>Products</h3>
                <div className='Product-Button'>
                <Button onClick={handleClick} buttonStyle={styles.button} title="Add Product" />
                <Button onClick={handleClick} buttonStyle={styles.button2} icon={<FilterListIcon />} title="Filters"   />
                <Button onClick={handleClick} buttonStyle={styles.button2} title="Download All" />
                </div>
                </div>
               
                
                <div className="table-container">
                <table className="table">
                    <thead>
                    <tr>
                        <th>Products</th>
                        <th>Buying Price</th>
                        <th>Quantity</th>
                        <th>Threshold Value</th>
                        <th>Expiry Date</th>
                        <th>Availability</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Maggi</td>
                        <td>¥250</td>
                        <td>43 Packets</td>
                        <td>12 Packets</td>
                        <td>11/12/22</td>
                        <td>In-Stock</td>
                    </tr>
                    <tr>
                        <td>Maggi</td>
                        <td>¥250</td>
                        <td>43 Packets</td>
                        <td>12 Packets</td>
                        <td>11/12/22</td>
                        <td>In-Stock</td>
                    </tr>
                    <tr>
                        <td>Maggi</td>
                        <td>¥250</td>
                        <td>43 Packets</td>
                        <td>12 Packets</td>
                        <td>11/12/22</td>
                        <td>In-Stock</td>
                    </tr>
                    <tr>
                        <td>Maggi</td>
                        <td>¥250</td>
                        <td>43 Packets</td>
                        <td>12 Packets</td>
                        <td>11/12/22</td>
                        <td>In-Stock</td>
                    </tr>
                    
                    </tbody>
                </table>
                </div>
                </div>
            </div>
    )
}
export default Inventory