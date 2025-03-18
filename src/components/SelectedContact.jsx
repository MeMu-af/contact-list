import React, { useState, useEffect } from "react";

export default function SelectedContact({ selectedContactId, setSelectedContactId }) {
  const [contact, setContact] = useState(null);

  useEffect(() => {
    async function fetchContact() {
      try {
        const response = await fetch(
          `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
        );
        const result = await response.json();
        setContact(result);
        console.log("SelectedContact: Fetched contact:", result);
      } catch (error) {
        console.error(error);
      }
    }
    fetchContact();
  }, [selectedContactId]);

  if (!contact) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{contact.name}</h2>
      <p>Email: {contact.email}</p>
      <p>Phone: {contact.phone}</p>
      <p>Username: {contact.username}</p>
      <p>Website: {contact.website}</p>
      <p>Address: {contact.address.street}, {contact.address.suite}, {contact.address.city}, {contact.address.zipcode}</p>
      <p>Company: {contact.company.name}</p>
      <button onClick={() => setSelectedContactId(null)}>Back to List</button>
    </div>
  );
}