import { useState, useContext } from "react"
import "../css/NavBar.css"
import categoriesData from "../data/CategoriesData.js"
import { DataContext } from "../Context.js"
import { Link } from "react-router-dom";

function NavBar() {

    const {setURL, genre} = useContext(DataContext)
    const [hovered, setHovered] = useState(false)

    const categories = categoriesData.map(category => (
        <p  key={category.ID}
            className={`category__item  ${genre===category.ID && 'category__item--red'}`}
            onClick={() => setURL(category.ID, true)}>
            {category.Category}
        </p>
    ))

    
    return (
        <div className="navbar">

            <Link to="/" className="navbar__item">
                <div onClick={() => setURL(null, false)}>
                    Trending
                </div>
            </Link>

            <Link to="/Categories" className="navbar__item">
                <div 
                    onMouseEnter={()=>setHovered(true)}
                    onMouseLeave={()=>setHovered(false)}
                    onClick={()=>setHovered(false)}>
                        Categories
                        {hovered && <p className="categories">{categories}</p>}
                </div>
            </Link>   

            <Link to="/Random" className="navbar__item">
                <div>Upcoming</div>
            </Link>
            
            <Link to="/Favourites" className="navbar__item">
                <div>Favourites</div>
            </Link>
        
            <Link to="/About" className="navbar__item">
                <div>About</div>
            </Link>
            
        </div>

    )
}

export default NavBar