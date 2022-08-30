import React from "react";
import drug2 from "./drug2.json";
import Item from "./Item";

export default function Drugjson2() {
  const onsubmit = () => {
    alert("Form has been succesfully submitted");
  };

  return (
    <div className="container">
      <h3>Basic Information required for Drug2</h3>
      <form align="left" onSubmit={onsubmit}>
        {drug2.fields
          .sort((a, b) => (a.order > b.order ? 1 : -1))
          .map((formData) => {
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
