function Filter({
    filter,
    setFilter,
    sort,
    setSort
}){

    const onChangeGreased =(e)=>{
        const val = e.target.value === "All" ? "All" : (e.target.value.toLowerCase() === 'true');
        setFilter(filt => val);
    };

    const onChangeSort =(e)=>{
        const val = e.target.value === "Default" ? "Default" : e.target.value.toLowerCase();
        setSort(sort => val);
    };

    return (
        <div className="filter-bar">
            <label>Greased:</label>
            <select onChange={onChangeGreased} value={filter}>
                <option value="All">All</option>
                <option value="true">Yes</option>
                <option value="false">No</option>
            </select>
            <label>Sort:</label>
            <select onChange={onChangeSort} value={sort}>
                <option value="Default">Default</option>
                <option value="name">Name</option>
                <option value="weight">Weight</option>
            </select>
        </div>
    );
}
export default Filter