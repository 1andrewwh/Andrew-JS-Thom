let numbers = [
    {number: "1"},
    {number: "2"},
    {number: "3"},
    {number: "4"},
    {number: "5"},
  ]

export default function Quantity() {
    return (
    <div class={"flex items-center"}>
        <p class="ml-2 text-sm">Qty:</p>
        <div >
        <select name="numbers">
        {numbers.map(i =>
        <option key={i.number} value={i.number}>{i.number}</option>
        )}
        </select>
        </div>
    </div>
    ) 
 }

 
//  class="py-2 bg-gray-100 w-[39] rounded-2xl text-sm h-[22px] items-center gap-1 border border-gray-300"
