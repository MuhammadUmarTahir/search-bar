import React, {useState} from 'react'
import "./SearchBar.css"
import SearchIcon from '@mui/icons-material/Search';
import CLoseIcon from "@mui/icons-material/Close"

const SearchBar = ({placeholder, data}) => {
    const [filterData, setFilterData] = useState([]);
    const [wordEnter, setWordEnter] = useState("") 

    const handleFilter = (event) => {
       const searchWord = event.target.value
       setWordEnter(searchWord)
       const newFilter = data.filter((value) => {
        return value.title.toLowerCase().includes(searchWord.toLowerCase());
       })
       if (searchWord === ""){
        setFilterData([])

       } else {
       setFilterData(newFilter);
       }

    }
    const clearInput = () => {
        setFilterData([]);
        setWordEnter("")
    }
  return (
    <div className='search'>
        <div className="searchInputs">
            <input type="text" placeholder={placeholder} value ={wordEnter} onChange ={handleFilter} />
            <div className='searchIcon'>
                {filterData.length === 0 ? <SearchIcon /> : <CLoseIcon  id = "clearBtn" onClick ={clearInput}/>}
            </div>
        </div>
        {filterData.length != 0 &&(
        <div className="dataResult">
            {
                filterData.slice(0, 15).map((value, key) => {
                    return <a className='dataItem' href={value.link} target = "_blank">
                        <p>{value.title}</p>
                    </a>
                })
                }
        </div>
        )}

    </div>
  )
}

export default SearchBar