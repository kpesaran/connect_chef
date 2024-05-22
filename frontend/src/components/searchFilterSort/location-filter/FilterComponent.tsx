
interface FilterComponentProps {
  onFilterChange: (value: string) => void
}

export default function FilterComponent({ onFilterChange }: FilterComponentProps): JSX.Element {
  return (
    <div className='gap-3'>
      {/* <input
        type='radio'
        id='neighborhood'
        defaultChecked
        name='filter'
        value='neighborhood'
        onChange={(e) => onFilterChange(e.target.value)}
      />
      <label htmlFor='neighborhood'>Neighborhood</label>
      <br /> */}

      <input
        type='radio'
        id='city'
        defaultChecked
        name='filter'
        value='city'
        onChange={(e) => onFilterChange(e.target.value)}
      />
      <label htmlFor='city'>City</label>
      <br />

      {/* <input
        type='radio'
        id='state'
        name='filter'
        value='state'
        onChange={(e) => onFilterChange(e.target.value)}
      />
      <label htmlFor='state'>State</label>
      <br /> */}

      <input
        type='radio'
        id='country'
        name='filter'
        value='country'
        onChange={(e) => onFilterChange(e.target.value)}
      />
      <label htmlFor='country'>Country</label>
      <br />
      <input
        type='radio'
        id='global'
        name='filter'
        value='global'
        onChange={(e) => onFilterChange(e.target.value)}
      />
      <label htmlFor='global'>Global</label>
    </div>
  );
}
