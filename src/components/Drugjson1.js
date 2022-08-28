import React from 'react'
import drug1 from './drug1.json'
import Item from './Item'


export default function Drugjson1() {

    const onsubmit=()=>{
        alert("Form has been succesfully submitted");
      }
 
      return (
        <div className="container">
        <h3>Basic Information required for Drug1</h3>
        <form align="left" onSubmit={onsubmit}>
             
                {drug1.fields.map((formData) => {
                  //iteration using map this requires unique k
                  return (
                    <div key={formData.order}>
                     <Item label={formData.label} type={formData.type} keys={formData.key}  required={formData.isRequired} order={formData.order} unit={formData.unit} readOnly={formData.isReadonly} />
                  </div>
                  );
                })}
             <br/>
          
              <button type="submit" className="btn btn-primary">Submit</button>
        </form>
              
            </div>
             );
            }
           
        
        
        
        
        
        
        
         
        
        
        
          
        
         
           
        