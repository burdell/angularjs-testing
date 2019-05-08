import React, { useState } from "react";
import { SBService } from "../04-dependencies/Spongebob";

const spongebobServie = new SBService();

export const ReactComponent = () => {
  const [firstName, setFirstName] = useState("Rusty");
  const [lastName, setLastName] = useState("Shackelford");
  const [submittedName, setSubmittedName] = useState("");

  const transformedName = spongebobServie.transformText(
    `${firstName} ${lastName}`
  );

  return (
    <div>
      <div>"hold my beer 😏" - React</div>
      <div>
        <label htmlFor="first-name">First Name</label>
        <input
          id="first-name"
          defaultValue={firstName}
          onChange={e => setFirstName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="last-name">Last Name</label>
        <input
          id="last-name"
          defaultValue={lastName}
          onChange={e => setLastName(e.target.value)}
        />
      </div>
      <div>~ * {transformedName} * ~</div>
      <div>
        <button onClick={() => setSubmittedName(transformedName)}>
          Submit
        </button>
      </div>
      <div>Submitted: {submittedName || "No name submitted"}</div>
    </div>
  );
};
