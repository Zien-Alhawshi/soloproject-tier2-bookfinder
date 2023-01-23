import React,{useState} from "react"
import Book from "../books-card/Book.component"
import "./SearchBooks.styles.scss"
const KEY = "AIzaSyAvWyS_pVWmH8KumIhaqX1i8GokZ6nSoTk"
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner.component"
export default function SearchBooks(){
    const [query, setQuery]= useState("")
    const [Books, setBooks] =useState([])
    const [loading, setLoading] =useState(false);

    const searchBooks = async (e) => {
        e.preventDefault();
        const url = `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${KEY}`  
        setLoading(true)
        try {
            const res = await fetch(url);
            const data  = await res.json();
             setBooks(data.items);
        }catch(err){
            console.error(err);
        }
        finally {
            setLoading(false);
          }
    }
    return(
        <>
        <form className="form" onSubmit={searchBooks}>
            <label className="label" htmlFor="query">Book Name</label>
            <input className="input" type="text" name="query"
                placeholder="i.e. Harry potter"
                value={query} onChange={(e)=>setQuery(e.target.value)}/>
            <button className="button" type="submit">Search</button>
            </form>
            {!loading?(
                <div className="card-list">
                {Books.map(book=> <Book className="flex-item" key={book['volumeInfo'].industryIdentifiers[0].identifier} book={book['volumeInfo']} />)}
      
            </div>  
            ): <LoadingSpinner />
              
              }
        </>
        
    )
}