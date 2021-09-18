import { useContext, useState } from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import Contact from "../components/Contact";
import Search from "../components/SearchBar";
import { ContactContext } from "../context";

const SearchContacts = () => {
  const { contacts } = useContext(ContactContext);
  const [textValue, setTextValue] = useState("");

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(textValue.toLowerCase())
  );

  return (
    <div className="App">
      <Search setTextValue={setTextValue} textValue={textValue} />
      <div>
        {filteredContacts &&
          filteredContacts.map((contact) => (
            <Contact key={contact.id} contact={contact} />
          ))}
      </div>
    </div>
  );
};

export default SearchContacts;
