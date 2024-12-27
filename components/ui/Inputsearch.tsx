import React from 'react'
import Form from "next/form"
import Searchreset from './Searchreset';
import {Search} from 'lucide-react'
const Inputsearch = ({query} : {query?:string}) => {
   
   
     
  return (
    <div>
        <Form action='/' scroll={false} className=' search-form'>
        <input type="text" name='query' className='search-input' placeholder='search pitches' />
            
            <div className="flex gap-2">
                { query && <Searchreset/> }
                <button className='search-btn text-white'> <Search className='size-7' /></button>
            </div>
        </Form>
      
    </div>
  )
}

export default Inputsearch
