import react from "react";

function Search(props){
    function filter(e){
        const search = e.target.value.toLowerCase;
        const filteredProducts = props.products.filter(p => p.toLowerCase().includes(search))
        props.setProducts(filteredProducts)
    }
  return(
    <div className="searchBar">
        <input onChange={filter} placeholder="Search for an item" />
    </div>
  )
}

export default Search;
