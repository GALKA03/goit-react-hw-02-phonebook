import { Component } from "react";
import { nanoid } from 'nanoid'
//import {Conteiner} from './Conteiner/Conteiner'
import { Filter } from "./Filter/Filter";
import Form from "./Form/Form";
import { Contacts } from "./Contacts/Contacts";

//model.id = nanoid()
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
  handleAddContact = (newContact) =>
    this.setState(({ contacts,name,tel }) => ({
      contacts: [...contacts, newContact]
    
    }));

  
    // проверка на существование контактов
  handleIdChecked = (name) => {
    const { contacts } = this.state;
    const isExistContact = contacts.find(contact => contact.name===name) //сравниваем имя с добавленным если найдет тру, нет=фолс
    if (isExistContact) {
      alert('contact does not exist')
      return
    } 
    else {
      
      }
  }
  deliteContacts = (id) => {
    this.setState((prevState) => ({contacts: prevState.contacts.filter((contact) => contact.id !== id) 
    }))    
 }
 
  
  
  HandleChangeFilterInput = e => {
    //const { name, value } = target;
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
        <Form contactsAdd={this.handleAddContact} onIdChecked={this.handleIdChecked} />
        <h2>Contacts</h2> 
        <Filter filter={filter} onChange={this.HandleChangeFilterInput} />
          <Contacts contacts={this.handleAddFilter()} onRemove={this.deliteContacts} />
      </div>

    )}
}





