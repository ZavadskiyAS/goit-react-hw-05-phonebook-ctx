import React from 'react';
import PropTypes from 'prop-types';
import ContactsItem from './contactsItem/ContactsItem';

const ContactsList = ({ contacts, deleteContact }) => {
  if (contacts.length) {
    return (
      <ul>
        {contacts.map(contact => (
          <ContactsItem
            key={contact.id}
            contact={contact}
            deleteContact={deleteContact}
          />
        ))}
      </ul>
    );
  }
  return <h3>Contacts not found!</h3>;
};

ContactsList.defaultProps = {
  contacts: [],
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  deleteContact: PropTypes.func.isRequired,
};

export default ContactsList;
