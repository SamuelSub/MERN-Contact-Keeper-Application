import React, { useReducer } from 'react';
import { v4 } from 'uuid';
import ContactContext from './ContactContext';
import ContactReducer from './ContactReducer';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER
} from '../types';

const ContactState = props => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: 'Astrit',
        email: 'astrit@email.com',
        phone: '222-222-2222',
        type: 'personal'
      },
      {
        id: 2,
        name: 'geni',
        email: 'geni@email.com',
        phone: '333-333-3333',
        type: 'personal'
      },
      {
        id: 3,
        name: 'guri',
        email: 'guri@email.com',
        phone: '444-444-4444',
        type: 'professional'
      }
    ]
  };

  const [state, dispatch] = useReducer(ContactReducer, initialState);

  // Add Contact

  const addContact = contact => {
    contact.id = v4();
    dispatch({ type: ADD_CONTACT, payload: contact })
  }

  // Delete Contact

  const deleteContact = id => {
    dispatch({type: DELETE_CONTACT, payload: id})
  }

  // Set Current Contact

  // Clear Current Contact

  // Update Contact

  // Filter Contacts

  // Clear Filter

  return (
    <ContactContext.Provider value={{
      contacts: state.contacts,
      deleteContact,
      addContact
    }}>
      { props.children }
    </ContactContext.Provider>
  )
}

export default ContactState;