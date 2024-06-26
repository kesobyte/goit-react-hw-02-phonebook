import PropTypes from 'prop-types';
import css from './ContactListItem.module.css';
// For Class Component use
// import { Component } from 'react';

export const ContactListItem = ({ filteredContact, deleteContact }) => {
  // Handle Delete
  const handleDelete = () => {
    deleteContact(filteredContact.id);
  };

  return (
    <>
      <li className={css.list_item}>
        <p>{filteredContact.name}:</p>
        <p>{filteredContact.number}</p>
        <button className={css.deleteBtn} onClick={handleDelete}>
          Delete
        </button>
      </li>
    </>
  );
};

ContactListItem.propTypes = {
  filteredContact: PropTypes.object.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
