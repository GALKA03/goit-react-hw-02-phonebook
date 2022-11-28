//import PropTypes from 'prop-types';
const ContactsItem = ({ name, tel, onRemove, id, children }) => {
   return( 
    
           <li >
               {name}:{tel} <button onClick={()=> onRemove(id)}>Delete</button>
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