import { DebounceInput } from 'react-debounce-input';
import './search-field.styles.scss'

const SearchField = (props, forwardRef) => {
  const {
    debounceTimer,
    className,
    value,
    placeholder,
    onChangeHandler
  } = props
  return (
    <DebounceInput
      minLength={1}
      debounceTimeout={debounceTimer}
      className={className}
      value={value}
      type='search'
      placeholder={placeholder}
      onChange={onChangeHandler}
    />
  )
}

export default SearchField;
