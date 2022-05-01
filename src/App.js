import React, { useEffect, useState } from "react"
import Header from "./components/Header"
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from "./components/Search";
import Movies from "./components/Movies";
import Loader from "./components/Loader";
import axios from "axios";



const App = () => {
  const [movies, setMovies] = useState([]);
  const [isLoader, setisLoader] = useState(false);
  const [isError, setIsError] = useState(false);

  const searchMovies = (search) => {
    setisLoader(true);
    axios.get(`https://www.omdbapi.com/?s=${search}&apikey=4a3b711b`).then(resp => {
      if (resp.status === 200) {
        const { data } = resp;
        if (data.Response === 'True') {
          if (data.Search.length > 0) {
            setMovies([...data.Search])
          } else {
            setMovies([])
            setIsError('Movie not found...! 😪😪😪')
          }
        } else {
          setMovies([])
          setIsError(data.Error + '😪😪😪')
        }
      } else throw new Error('Fetching data Failed... !😤😤😤')
    }).catch(function (error) {
      setIsError(error.message)
    }).finally(() => setisLoader(false))
  }

  const searchHandler = (e) => {
    e.preventDefault();
    setIsError(false);
    const searchQuery = e.target[0].value.trim();
    if (searchQuery === '') {
      setIsError('Kindly enter something')
      return;
    }
    searchMovies(searchQuery);
  }

  useEffect(() => {
    searchMovies('man')
  }, [])

  return (
    <React.Fragment>
      <Header name="Demon Movie Name" />
      <Search onSubmitHandler={searchHandler} />
      <section className="text-center mb-5">
        {isLoader && <Loader />}
        {!isLoader && isError && <span className="alert alert-danger">{isError}</span>}
      </section>
      {!isLoader && <Movies movies={movies} />}
    </React.Fragment>
  )
}

export default App