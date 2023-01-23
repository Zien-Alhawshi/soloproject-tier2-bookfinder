
import React from "react"
import "./Book.styles.scss"
export default function Book({book}){
    console.log(book)
    return(
        <>
            {(book.imageLinks) && (book.title) ?
                <div className="card" >
                    <div className="card-container">
                        <div>
                            <img src={book.imageLinks.thumbnail} />
                        </div>
                        <div className="card--content">
                                <h3 className="card--title">{book.title}</h3>
                                    {book.authors?<p><small>By: {book.authors}</small></p>:<p><small>By: N/A</small></p>}
                                    {book.publisher?<p><small>Published By: {book.publisher}</small></p>:<p><small>Published By: N/A</small></p> }<br />
                                    <a className="info" target="_blank" href={book.infoLink}>See this book</a>
                        </div>
                    </div>

            </div>
         :""}
        </>
        
    )
}


