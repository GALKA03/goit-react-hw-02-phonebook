import { Component } from "react";
import PropTypes from 'prop-types';
class Form extends Component{
state = {
  name: '',
  number:'',
    }
 handleChangeForm = e => {
   
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value,
    })
    } 
hendleFormSubmit = e => {
    e.preventDefault();
    //const { name, number} = this.state;
    const {addContacts } = this.props;
    const isValid = this.validateFormSubmit()
    if (!isValid) {
        return
    } 
 //addContacts({ id: nanoid(), name, number });
  addContacts(this.state)
    this.reset()
    }
 reset = () => {
        this.setState({ name: '', number: '' })
    };
    validateFormSubmit = () => {
        const { name, number } = this.state;
        const { addContacts} = this.props;
        console.log('props',this.props)
        if (!name || !number) {
          alert('some file is empty')
            return false;
        }
      return addContacts({ name, number })
        
    }
    render() {
        const { name,number } = this.state;
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
                value={number} 
            onChange = {this.handleChangeForm} 
  type="number"
  name="number"
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
Form.propTypes = {
 handleChangeForm: PropTypes.func,

};

 // hendleChengForm = ({target}) => {
    // const { name, value } = target;
    // this.setState({ [name]: value })
  //}