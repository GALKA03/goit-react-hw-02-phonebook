export const Filter = ({ onChange, filter}) => {
    return (
         <label>
        Find contacts by name
          <input type="text"
            value={filter}
            onChange={onChange} 
            name="filter"
          placeholder="enter name"
          /> 
        </label>  
    )
}