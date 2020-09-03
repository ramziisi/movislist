import React from 'react'

 const Search = (props) => {
  
    return (
        <div>
            <input  type='search' placeholder='cherche un film' value={props.search} onChange={(e)=>props.setSearch(e.target.value)} />
            <button >search</button>
        </div>
    )
}
export default Search
 