import {MagnifyingGlassIcon} from '@heroicons/react/24/outline'

export default function Search({setSearch, getRecipes}){

    const handleSubmit = (event) =>{
        event.preventDefault()
    }

    const handleSearch = (event) =>{
        setSearch(event.target.value)
        console.log(event.target.value)

    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="search" placeholder="Pannekaker.." onChange={handleSearch} />
            <button type="submit" onClick={getRecipes}><MagnifyingGlassIcon/></button>
        </form>
    )
}