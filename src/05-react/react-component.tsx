import React, { useState, useEffect } from "react";
import { SBService } from "../03-dependencies/Spongebob";

const spongebobServie = new SBService();

// export class ReactComponent extends React.Component<any, any> {
//   public readonly state: any = {
//     firstName: "Rusty",
//     lastName: "Shackelford",
//     submittedName: ""
//   };

//   render() {
//     const transformedName = spongebobServie.transformText(
//       `${this.state.firstName} ${this.state.lastName}`
//     );
//     return (
//       <div>
//         <div>"hold my beer 😏" - React</div>
//         <div>
//           <label htmlFor="first-name">First Name</label>
//           <input
//             id="first-name"
//             defaultValue={this.state.firstName}
//             onChange={e => this.setState({ firstName: e.target.value })}
//           />
//         </div>
//         <div>
//           <label htmlFor="first-name">Last Name</label>
//           <input
//             id="first-name"
//             defaultValue={this.state.lastName}
//             onChange={e => this.setState({ lastName: e.target.value })}
//           />
//         </div>
//         <div>~ * {transformedName} * ~</div>
//         <div>
//           <button
//             onClick={() => this.setState({ submittedName: transformedName })}
//           >
//             Submit
//           </button>
//         </div>
//         <div>Submitted: {this.state.submittedName || "No name submitted"}</div>
//       </div>
//     );
//   }
// }

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
