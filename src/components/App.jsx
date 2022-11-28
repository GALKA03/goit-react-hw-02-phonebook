import { Component } from "react";
import { nanoid } from 'nanoid'

import { Filter } from "./Filter/Filter";
import Form from "./Form/Form";
import { Contacts } from "./Contacts/Contacts";

export class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
     filter: '',
  }
// добавление новых контактов к старым.
  // handleAddContact = (newContact) =>
  //   this.setState(({ contacts}) => ({
  //     contacts: [...contacts, newContact]
    
  //   }));
  addContacts = ({ name, tel }) => {
    const showContacts = {
      name, tel, id: nanoid(),
    }
    const { contacts } = this.state;
    if (contacts.find(contact => contact.name === name)) {
      alert(`${name} is already in contacts`);
      return;
    }
    else {
      this.setState(({ contacts }) => ({
       contacts: [...contacts,showContacts]
      }))
    }   
}
  deliteContacts = (id) => {
    this.setState((prevState) => ({contacts: prevState.contacts.filter((contact) => contact.id !== id) 
    }))    
 }
  HandleChangeFilterInput = e => {
    console.log(e.target.value)
    this.setState({
     [e.target.name]: e.target.value,
    }) 
 } 
  handleAddFilter = () => {
    const {contacts, filter} = this.state;
    return contacts.filter((contact)=>contact.name.toLowerCase().includes(filter.toLowerCase()))
  }
render() {
  //const { contacts } = this.state;
  const { filter } = this.state;
    return (
             <div>
            <h1>Phonebook</h1>
        <Form addContacts={this.addContacts} />
        <h2>Contacts</h2> 
        <Filter filter={filter} onChange={this.HandleChangeFilterInput} />
          <Contacts contacts={this.handleAddFilter()} onRemove={this.deliteContacts} />
      </div>

    )}
}





