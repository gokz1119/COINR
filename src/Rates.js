import { React } from 'react'
import NavBar from './NavBar'

export default function Rates() {
  const today = 111147.83
  const oneMonthAgo = 119523.80
  const oneYearAgo = 216098.46
  return (
    <>
      <NavBar operation={"rates"} />
      <div className='w-screen h-screen bg-blue-background'>
        <div class="container1">
          <table class="table">
            <thead class="shadow-blue-secondary p-8 rounded-xl max-w-xs mb-8 md:mb-0 md:max-w-md">
              <tr class="shadow-blue-secondary p-8 rounded-xl max-w-xs mb-8 md:mb-0 md:max-w-md">
                <th></th>
                <th>Today</th>
                <th>1 month ago</th>
                <th>1 year ago</th>
              </tr>
            </thead>

            <tbody class="td">
              <tr>
                <td>0.5 ETH</td>
                <td>₹{(today * 0.5).toFixed(2)}</td>
                <td>₹{(oneMonthAgo * 0.5).toFixed(2)}</td>
                <td>₹{(oneYearAgo * 0.5).toFixed(2)}</td>
              </tr>

              <tr>
                <td>1 ETH</td>
                <td>₹{(today).toFixed(2)}</td>
                <td>₹{(oneMonthAgo).toFixed(2)}</td>
                <td>₹{(oneYearAgo).toFixed(2)}</td>
              </tr>

              <tr>
                <td>5 ETH</td>
                <td>₹{(today * 5).toFixed(2)}</td>
                <td>₹{(oneMonthAgo * 5).toFixed(2)}</td>
                <td>₹{(oneYearAgo * 5).toFixed(2)}</td>
              </tr>

              <tr>
                <td>10 ETH</td>
                <td>₹{(today * 10).toFixed(2)}</td>
                <td>₹{(oneMonthAgo * 10).toFixed(2)}</td>
                <td>₹{(oneYearAgo * 10).toFixed(2)}</td>
              </tr>

              <tr>
                <td>100 ETH</td>
                <td>₹{(today * 100).toFixed(2)}</td>
                <td>₹{(oneMonthAgo * 100).toFixed(2)}</td>
                <td>₹{(oneYearAgo * 100).toFixed(2)}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}
