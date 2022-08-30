import React from "react";
import drug1 from "./drug1.json";
import Item from "./Item";

export default function Drugjson1() {
  const onsubmit = () => {
    alert("Form has been succesfully submitted");
  };

  return (
    <div className="container">
      <h3>Basic Information required for Drug1</h3>
      <form align="left" onSubmit={onsubmit}>
        {drug1.fields
          .sort((a, b) => (a.order > b.order ? 1 : -1))
          .map((formData) => {
            //iteration using map this requires unique key
            return (
              <div key={formData.order}>
                <Item formData={formData} />
              </div>
            );
          })}
        <br />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
