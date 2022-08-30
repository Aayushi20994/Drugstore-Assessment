import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Item(props) {
  let { formData } = props;
  let { label, key, isRequired, unit, items, isReadonly } = formData;
  const [selecteddate, setdate] = useState(null);

  function SwitchCase(data) {
    switch (key) {
      case "birthday":
        return (
          <div>
            <DatePicker
              className="form-control"
              selected={selecteddate}
              onChange={(date) => setdate(date)}
              dateFormat="yyyy/MM/dd"
              key={key}
              required={isRequired}
              readOnly={isReadonly}
            />
          </div>
        );

      case "gestationalAge":
        return (
          <input
            className="form-control"
            type="number"
            key={key}
            required={isRequired}
            readOnly={isReadonly}
            min={0}
          />
        );

      case "sex":
        return (
          <select
            className="form-control"
            type="dropdown"
            key={key}
            required={isRequired}
            readOnly={isReadonly}
          >
            {items.map((item, i) => (
              <option value={item.value} key={i}>
                {item.text}
              </option>
            ))}
          </select>
        );

      case "height":
        return (
          <input
            className="form-control"
            type="number"
            key={key}
            required={isRequired}
            readOnly={isReadonly}
            min={0}
          />
        );

      case "weight":
        return (
          <input
            className="form-control"
            type="number"
            key={key}
            required={isRequired}
            readOnly={isReadonly}
            min={0}
          />
        );

      case "BMI":
        return (
          <input
            className="form-control"
            id="bm"
            type="number"
            key={key}
            required={isRequired}
            readOnly={isReadonly}
            min={0}
          />
        );

      default:
        return (
          <input
            className="form-control"
            type="text"
            key={key}
            required={isRequired}
            readOnly={isReadonly}
          />
        );
    }
  }

  return (
    <div>
      <label>
        {label}: {unit}
      </label>
      <SwitchCase value={formData} />
    </div>
  );
}
export default Item;
