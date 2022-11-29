import PropTypes from 'prop-types';
const ContactsItem = ({ name, number, onRemove, id, children }) => {
   return( 
    
           <li >
               {name}:{number} <button onClick={()=> onRemove(id)}>Delete</button>
      {children}
       </li>

    )
}
export const Contacts = ({ contacts, onRemove }) => {
    if (contacts.length === 0) {
        return null;
    }


       //console.log(contacts)
    return( 
    <ul>
     {contacts.map((contact) => <ContactsItem {...contact}key={contact.id} onRemove={onRemove} />
     )}
    </ul>
    )
}
ContactsItem.prototype = {
    name: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired,
    onRemove: PropTypes.func,
 id:PropTypes.func
}
Contacts.prototype = {
    contacts: PropTypes.func,
    onRemove:PropTypes.func
}
//    <ul>
//         {contacts.map(({ name, number, id }) => (
//             <li key={id}
//                 // className={styles.item}
//             >
//                 {name}: {number}
//                 <button
//                     //className={styles.button}
//                     type="button"
//                     onClick={() =>  onRemove(id)}
//                 >
//                     Delete
//                 </button>
//             </li>
//         ))}
//     </ul>
// }