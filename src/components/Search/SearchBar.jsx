
import SearchIcon from '@material-ui/icons/Search';
import "./styles.css";

function SearchBar() {
    return (
            <div>
                <form>
                    <div  className='searchBar'>    
                        <SearchIcon />
                        <input type="search" placeholder="buscar produto"/>
                    </div>
                </form>
            </div>
    )
}
   



export default SearchBar;