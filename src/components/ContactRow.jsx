import React from "react";

export default function ContactRow({ contact, setSelectedContactId }) {
  return (
    <tr
      onClick={() => {
        setSelectedContactId(contact.id);
        console.log("ContactRow: Clicked contact ID:", contact.id);
      }}
    >
      <td>{contact.name}</td>
      <td>{contact.email}</td>
      <td>{contact.phone}</td>
    </tr>
  );
}