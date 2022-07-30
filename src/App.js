import React, { useState, useEffect } from 'react';
import {PokemonList} from './components/PokemonList';
import axios from 'axios'
import Pagination from './components/Pagination';
import { Modal } from './components/Modal';
import "./App.css";
import { Header } from './components/Header';

function App() {
  const [openModal, setOpenModal] = useState({status:false,details:{}})
  const [pokemon, setPokemon] = useState([])
  const [currentPageUrl, setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon")
  const [nextPageUrl, setNextPageUrl] = useState()
  const [prevPageUrl, setPrevPageUrl] = useState()
  const [loading, setLoading] = useState(true)

  const [searchQuery, setSearchQuery]= useState('')

  useEffect(() => {
    setLoading(true)
    let cancel
    axios.get(currentPageUrl, {
      cancelToken: new axios.CancelToken(c => cancel = c)
    }).then(res => {
      setLoading(false)
      setNextPageUrl(res.data.next)
      setPrevPageUrl(res.data.previous)
      setPokemon(res.data.results)
    })

    return () => cancel()
  }, [currentPageUrl])

  function gotoNextPage() {
    setCurrentPageUrl(nextPageUrl)
    setSearchQuery('')
  }

  function gotoPrevPage() {
    setCurrentPageUrl(prevPageUrl)
    setSearchQuery('')
  }
  function toggleModal(){
    setOpenModal(prev=>({...prev, status:!prev.status}))

  }
  if (loading) return "Loading..."
  
  return (
    <>
    <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
      {openModal.status && <Modal toggleModal={toggleModal} details={openModal.details}/>}
     {pokemon.length && <PokemonList searchQuery={searchQuery} setDetails={setOpenModal} pokemon={pokemon} />}
      <Pagination 
        gotoNextPage={nextPageUrl ? gotoNextPage : null}
        gotoPrevPage={prevPageUrl ? gotoPrevPage : null}
      />
    </>
  );
}

export default App;
