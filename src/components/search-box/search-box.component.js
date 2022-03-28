import "./search-box.styles.css";

const SearchBox = ({ placeholder, className, onChangeHandler }) => (
  <div>
    <input
      type="search"
      placeholder={placeholder}
      className={`search-box ${className}`}
      onChange={onChangeHandler}
    />
  </div>
);

export default SearchBox;
