interface SortComponentProps {
    onSortChange: (value: string) => void
}


export default function SortComponent({ onSortChange }: SortComponentProps): JSX.Element {
    return (
        <div>
            <span>Sort By</span>
                  <div className='flex justify-center  gap-3'>
            <input
              type='radio'
              id='recent'
              defaultChecked
              name='sort'
              value='recent'
              onChange={(e) => onSortChange(e.target.value)}
            />
            <label htmlFor='recent'>Recent</label>
                <br />
                <input
              type='radio'
              id='oldest'
              name='sort'
              value='oldest'
              onChange={(e) => onSortChange(e.target.value)}
            />
            <label htmlFor='oldest'>Oldest</label>
            <br />
            <input
              type='radio'
              id='views'
              name='sort'
              value='views'
              onChange={(e) => onSortChange(e.target.value)}
            />
            <label htmlFor='views'>Views</label>
            <br />
              
                   
                  </div>
        </div>
    );
  }
  