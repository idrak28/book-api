const loadData= searchText=>{
    searchText='javascript';
    fetch('https://openlibrary.org/search.json?q=${searchText}')
        .then(res=>res.json())
        .then(data=>console.log(data))
}
loadData()