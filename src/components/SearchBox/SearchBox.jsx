import style from "./SearchBox.module.css";

const SearchBox = ({ value, onChange }) => {
  return (
    <>
      <p className={style.searchText}>Find contacts by name </p>
      <input
        type="text"
        name="search"
        required
        autoFocus
        onChange={(e) => onChange(e.target.value)}
        value={value}
        className={style.searchInput}
      />
    </>
  );
};
export default SearchBox;
