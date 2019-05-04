import React, { useState } from "react";

interface Props {
  onChange(info: { email: string; name: string }): void;
}

export const ReactComponent = ({ onChange }: Props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div>
      <input placeholder="Name" onChange={e => setName(e.target.value)} />
      <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <button onClick={() => onChange({ name, email })}>Click to Change</button>
    </div>
  );
};
