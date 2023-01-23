import React,{useState} from "react"
import Book from "../books-card/Book.component"
import "./SearchBooks.styles.scss"
const KEY = "AIzaSyAvWyS_pVWmH8KumIhaqX1i8GokZ6nSoTk"
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner.component"

async function fetchWithTimeout(resource, options = {}) {
    const { timeout = 8000 } = options;
    
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), timeout);
    const response = await fetch(resource, {
      ...options,
      signal: controller.signal  
    });
    clearTimeout(id);
    return response;
  }
export default function SearchBooks(){
    const [query, setQuery]= useState("")
    const [Books, setBooks] =useState([])
    const [loading, setLoading] =useState(false);

    const searchBooks = async (e) => {
        console.log(query)

        e.preventDefault();
        if(query=== ''){
            alert("Please enter a book name!")
            return
        }
        const url = `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${KEY}`  
        setLoading(true)
        try {
            const res = await fetchWithTimeout(url, {
                timeout: 6000
              });
            const data  = await res.json();
            if(data.items.length){
                setBooks(data.items);
            } 
            else{
                return alert("No books with this name!")
            }
           

        }catch(err){
            if(err.name === 'AbortError'){
                alert("Take so much!");

            }
            else{
              alert("Search for sth else please!");

            }
            setLoading(false);

        }
        finally {
            setLoading(false);
            setQuery("")


          }
    }
    return(
    <div>
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
    </div>
        
       
        
    )
}