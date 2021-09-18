import { useEffect, useState } from "react";
import { getContacts } from "./apis/getContacts";
import "./App.css";
import { ContactContext } from "./context";

import SearchContacts from "./pages/SearchContacts";

const App = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    getContacts().then((_contacts) => {
      setContacts(_contacts);
    });
  }, []);

  const contactApi = {
    contacts,
  };

  return (
    <>
      <ContactContext.Provider value={contactApi}>
        <SearchContacts />
      </ContactContext.Provider>
    </>
  );
};

export default App;
