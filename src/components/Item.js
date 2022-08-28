
import React,{useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'


function Item(props) {
  let {label,keys,required,order,type,unit,readOnly} = props;
const[selecteddate,setdate]=useState(null);

 function SwitchCase(props) {
  switch(type) {
    case 'date':
      return <div><DatePicker className="form-control" selected={selecteddate} onChange={date=>setdate(date)}  dateFormat="yyyy/MM/dd" key={keys} required={required} order={order} unit={unit} readOnly={readOnly} />
      </div>
      case 'dropdown':
      return <select className="form-control"  type="dropdown" key={keys} required={required} order={order} unit={unit} readOnly={readOnly}>
      <option>Male</option><option>Female</option></select>
      case 'number':
        return <input className="form-control"  type="number" key={keys} required={required} order={order} unit={unit} readOnly={readOnly} />;
      default:
      return <input className="form-control"  type="text" key={keys} required={required} order={order} unit={unit} readOnly={readOnly} />;
  }
}
 
    return (
    <div>
    <label>{label}: {unit}</label>
    <SwitchCase value={type} />
 
    </div>
  )
}
export default Item;
