import React from "react";

const UserInput = ({ userInvestment, onChange }) => {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            required
            value={userInvestment.initialInvestment}
            onChange={(event) =>
              onChange("initialInvestment", event.target.value)
            }
          ></input>
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            required
            value={userInvestment.annualInvestment}
            onChange={(event) =>
              onChange("annualInvestment", event.target.value)
            }
          ></input>
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            required
            value={userInvestment.expectedReturn}
            onChange={(event) => onChange("expectedReturn", event.target.value)}
          ></input>
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            required
            value={userInvestment.duration}
            onChange={(event) => onChange("duration", event.target.value)}
          ></input>
        </p>
      </div>
    </section>
  );
};

export default UserInput;
