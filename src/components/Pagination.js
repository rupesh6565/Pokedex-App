import React from 'react'

export default function Pagination({ gotoNextPage, gotoPrevPage }) {
  return (

    <div className='button'>
      {gotoPrevPage && <button className='previous' onClick={gotoPrevPage}>Previous</button>}
      {gotoNextPage && <button className='next' onClick={gotoNextPage}>Next</button>}
    </div>
  )
}
