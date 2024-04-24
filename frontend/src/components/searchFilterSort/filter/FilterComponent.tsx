



export default function FilterComponent({ onFilterChange }) {
    return (
        <select onChange={(e) => onFilterChange(e.target.value)}>
            <option value="">Select Category</option>
            <option value="neighborhood">neighborhood</option> 
            <option value="city">city</option> 
            <option value="state">state</option> <option value="country">country</option> 
        </select>
    )
}