"use client"

import Link from 'next/link'


const Searchreset = () => {
    const reset =  () =>{
        const form = document.querySelector( '.search-form') as HTMLFormElement;
        if(form) form.reset();
    }
  return (
    <div>
        <button type='reset' onClick={reset}>
            <Link href ="/" className='search-btn text-white'>
              x
             
             </Link>

        
                        </button> 

      
    </div>
  )
}

export default Searchreset
