import React from 'react'

function Header({searchQuery, setSearchQuery}) {
    const handleInput=(e) => {setSearchQuery(e.target.value)}
    const clearTextField = () => {setSearchQuery("")}

  return (
    <section className="relative flex align-center ">
      <input
        placeholder="Search Pokemon..."
        type="text"
        value={searchQuery}
        onChange={handleInput}
      />
      <span
        aria-roledescription="button"
        onClick={clearTextField}
        className="bold clear-search absolute cursor-pointer"
      >
        X
      </span>
    </section>
  )
}

export  {Header};