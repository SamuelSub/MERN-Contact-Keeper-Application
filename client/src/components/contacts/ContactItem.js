import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ContactContext from '../context/contact/ContactContext';

const ContactItem = ({ contact }) => {

  const { id, name, email, phone, type } = contact;

  const contactContext = useContext(ContactContext);
  
  return (
    <div className="card bg-light">
      <h3 className="text-primary text-left">
        {name[0].toUpperCase() + name.slice(1, name.length)}{' '} <span style={{
          float: 'right'
        }} className={'badge ' + (type === 'personal' ? 'badge-primary' : 'badge-success')}>{type[0].toUpperCase() + type.slice(1, type.length)}</span>
      </h3>
      <ul className="list">
        {email && (<li>
          <i className="fas fa-envelope-open"></i> {email}
        </li>)}
        {phone && (<li>
          <i className="fas fa-phone"></i> {phone}
        </li>)}
      </ul>
      <p>
        <button className="btn btn-dark btn-sm">Edit</button>
        <button className="btn btn-danger btn-sm" onClick={() => contactContext.deleteContact(id)}>Delete</button>
      </p>
    </div>
  )
}

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired
}

export default ContactItem
