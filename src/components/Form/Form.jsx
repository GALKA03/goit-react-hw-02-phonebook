import { Component } from "react";
import { nanoid } from 'nanoid'
class Form extends Component{
state = {
  name: '',
  tel:'',
    }
 handleChangeForm = e => {
   
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value,
    })
    } 
hendleFormSubmit = e => {
    e.preventDefault();
    const { name, tel } = this.state;
    const { contactsAdd } = this.props;
    const isValid = this.validateFormSubmit()
    if (!isValid) {
        return
    }
    contactsAdd ({id: nanoid(),name,tel})
    this.reset()
    }
 reset = () => {
        this.setState({ name: '', tel: '' })
    };
    validateFormSubmit = () => {
        const { name, tel } = this.state;
        const {onIdChecked} = this.props;
        console.log('props',this.props)
        if (!name || !tel) {
          alert('some file is empty')
            return false;
        }
        return  onIdChecked(name)
        
    }
    render() {
        const { name,tel } = this.state;
      return (
          
           <form onSubmit={this.hendleFormSubmit}>
        <label>
       Name
                    <input
                     
                value={name}
                onChange={this.handleChangeForm}
                type="text"
                name="name"
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required
          />
            </label>
            <label >
              Number
                    <input
                value={tel} 
            onChange = {this.handleChangeForm} 
  type="number"
  name="tel"
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required
/>
            </label>
        <button type="submit">Add to contact</button>
          </form>
)

    }
}
    

export default Form

 // hendleChengForm = ({target}) => {
    // const { name, value } = target;
    // this.setState({ [name]: value })
  //}