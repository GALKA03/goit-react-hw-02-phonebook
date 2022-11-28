const ContactsItem = ({ name,tel, onRemove,id,children }) => {
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
   
    
    return( 
    <ul>
     {contacts.map((contact) => <ContactsItem {...contact}key={contact.id} onRemove={onRemove} />
     )}
    </ul>
)}