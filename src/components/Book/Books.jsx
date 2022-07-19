import dotenv from 'dotenv'
dotenv.config()
import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import Book from './Book'
import './Book.css'

const API_KEY=process.env.API_KEY

const fetchHandler = async ()=>{
    return await axios.get(API_KEY).then((res)=>res.data)
}

const Books = () => {

    const [books,setBooks] = useState()
    useEffect(()=>{

        fetchHandler().then(data=>setBooks(data.books))
    },[])
    // console.log(books)
    
  return (
    <div>
      <ul>
        {books && books.map((book,i)=>(
          
          <li key={i}>
            <Book book={book}/>
          </li>
          
        ))}
      </ul>
    </div>
  )
}

export default Books
