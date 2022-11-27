export const Filter = ({ onChange, filter}) => {
    return (
         <label>
          <p>Find contacts by name</p>
          <input type="text"
            value={filter}
            onChange={onChange} 
            name="filter"
          placeholder="enter name"
          /> 
        </label>  
    )
}