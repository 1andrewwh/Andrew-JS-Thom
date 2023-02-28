let numbers = [
    {number: "1"},
    {number: "2"},
    {number: "3"},
    {number: "4"},
    {number: "5"},
  ]

export default function Serving() {
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

 

