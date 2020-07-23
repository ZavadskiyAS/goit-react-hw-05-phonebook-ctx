import React from 'react';
import PropTypes from 'prop-types';


const ContactsItem = ({ contact: { id, name, number }, deleteContact }) => (
  <li>
    <p>{name} : {number} 
    <button
      type="button"
      id={id}
      onClick={deleteContact}
    >
       X
    </button> </p>
  </li>
);
ContactsItem.propTypes = {
  contact: PropTypes.objectOf(PropTypes.string).isRequired,
  deleteContact: PropTypes.func.isRequired,
};
export default ContactsItem;
