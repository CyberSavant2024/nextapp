import React from 'react'
import Inputsearch from '../../components/ui/Inputsearch'
 import StartupCard ,{StartupTypeCard} from '@/components/StartupCard'
import { SearchParams } from 'next/dist/server/request/search-params'
import { Author } from '@/sanity/schemaTypes/author'
import { title } from 'process'
import { STARTUPS_QUERY } from "@/sanity/lib/queries";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import { keyframes } from 'styled-components'
import { auth } from "@/auth";


export default async function home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;
  const params = { search: query || null };

  const session = await auth();
  console.log(session?.id);

  

  const { data: posts } = await sanityFetch({ query: STARTUPS_QUERY, params });

  return (
    <>
    <section className='pink_container'>
      <h1 className='heading'> Post Your Pitch </h1>
      <p className='sub-heading !max-w-3xl'> 
      Pitch Your Startup Idea – Reach Your Audience
      </p>


      <Inputsearch query ={ query}/>
      
    </section>
    <section className="section_container ">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : "All Startups"}
        </p>

        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: StartupTypeCard) => (
              <StartupCard key={post?._id} post={post} />
            ))
          ) : (
            <p className="no-results">No startups found</p>
          )}
        </ul>
      </section>





  
      


    </>
  )
}


