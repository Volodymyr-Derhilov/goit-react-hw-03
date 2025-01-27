import css from './SearchBox.module.css'

function SearchBox({onSearch}) {
    return (
        <label className={css.label}>
            <span className={css.span}>Find contacts by name</span>
            <input className={css.input} onInput={onSearch}></input>
        </label>
    )    
}

export default SearchBox;