import React from 'react'
import NavBar from './NavBar'

export default function Rates() {
    return (
        <>
            <NavBar operation={"rates"} />
            <div className='w-screen h-screen bg-blue-background'>
            <div class="container">
	
	
    <div class="container1">
	<table class="table"> 
		<thead class="shadow-blue-secondary p-8 rounded-xl max-w-xs mb-8 md:mb-0 md:max-w-md">
			<tr class="shadow-blue-secondary p-8 rounded-xl max-w-xs mb-8 md:mb-0 md:max-w-md">
				<th></th>
				<th>Today at 1:15 pm</th>
				<th>1 month ago</th>
				<th>1 year ago</th>
				
			</tr>
		</thead>
		<tbody class="td">
			<tr>
				<td>0.5 ETH</td>
				<td>₹43,792.38</td>
				<td>₹47,205.19</td>
				<td>₹71,520.33</td>
				
			</tr>
			<tr>
				<td>1 ETH</td>
				<td>₹87,584.76</td>
				<td>₹94,410.37</td>
				<td>₹143,040.66</td>
			
			</tr>
			<tr>
				<td>5 ETH</td>
				<td>₹437,923.80</td>
				<td>₹472,051.86</td>
				<td>₹715,203.30</td>
			
			</tr>
			<tr>
				<td>10 ETH</td>
				<td>₹875,847.60</td>
				<td>₹944,103.71</td>
				<td>₹1,430,406.61</td>
				
			</tr>
			<tr>
				<td>100 ETH</td>
				<td>₹8,758,476.03</td>
				<td>₹9,441,037.11</td>
				<td>₹14,304,066.06</td>
			
			</tr>
		</tbody>
	</table>
</div>
    
	</div>
</div>
            
          
        </>
    )
}
