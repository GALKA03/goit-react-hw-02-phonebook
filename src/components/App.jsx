import { Component } from "react";
import { nanoid } from 'nanoid'

import { Filter } from "./Filter/Filter";
import Form from "./Form/Form";
import { Contacts } from "./Contacts/Contacts";

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  }
  // добавление новых контактов к старым.
  // handleAddContact = (newContact) =>
  //   this.setState(({ contacts}) => ({
  //     contacts: [...contacts, newContact]
    
  //   }));
  addContacts = ({ name, number }) => {
    const showContacts = {name, number, id: nanoid(),}
    console.log(showContacts)
    const { contacts } = this.state;
    if (contacts.find(contact => contact.name === name)) {
      alert(`${name} is already in contacts`);
      return;
    }
    else{
       this.setState(({ contacts }) => ({
        contacts: [showContacts,...contacts]
        
        }))
      }
    
}
  deliteContacts = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== id)
    }))
  }
  HandleChangeFilterInput = e => {
    this.setState({
      [e.target.name]: e.target.value,

    })
  }
  handleAddFilter = () => {
   const { filter, contacts } = this.state;
    //const normalizedFilter = filter.toLowerCase();
    return contacts.filter(elem =>
      elem.name.toLowerCase().includes(filter),
    );
    
     //console.log('try', contact.name.includes(filter))
       //.toLowerCase().includes(contact.filter)
     //return f;//console.log(contact.filter)
  }
//}
    
     
      //   contacts.filter(elem =>
      // elem.name.toLowerCase().includes(filter))
// const filt = contacts.filter(contact => { contact.name.toLowerCase().includes(contact.filter)
//       console.log(contact.filter)
//       return filt;
//      })
  
  //}
render() {
  //const { contacts } = this.state;
  const { filter } = this.state;
  const addFilter = this.handleAddFilter() 
  console.log('addFilter ',addFilter)
  //console.log(filter)
    return (
             <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 20,
          backgroundColor: "yellow",
          color: '#010101',
        }}
      >
            <h1>Phonebook</h1>
        <Form addContacts={this.addContacts} />
        <h2>Contacts</h2> 
        <Filter filter={filter} onChange={this.HandleChangeFilterInput} />
          <Contacts contacts={addFilter} onRemove={this.deliteContacts} />
      </div>

    )}
}





