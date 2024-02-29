import { useLocation, useNavigate } from "react-router-dom"
import { useForm } from "../../hooks/useForm"
import queryString from "query-string";
import { getHeroesByName } from "../helpers";
import { HeroCard } from "../components/HeroCard";

export const SearchPage = () => {

  const navigate = useNavigate();
  const location = useLocation();
  //console.log(location);
  const {q} = queryString.parse(location.search);
  // (!q) && q == '';

  const heroes = getHeroesByName(q);

  const showSearch = (q.length === 0);
  const showError = (q.length > 0) && heroes.length === 0;

  const { searchTextInitial, onInputChange } = useForm({
    searchTextInitial: q
  })

  const onSearchSubmit = (e) => {
    e.preventDefault();
    // if (searchTextInitial.trim().length <= 1) return;
    navigate(`?q=${searchTextInitial}`)
  }

  return (
    <>
      <h1>Search</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form action="" onSubmit={onSearchSubmit}>
            <input 
              type="text" 
              placeholder="buscar un hérroe"
              className="form-control"
              name="searchTextInitial"
              autoComplete="off"
              value= {searchTextInitial}
              onChange={onInputChange}
            />
            <button
              className="btn btn-outline-primary mt-1"
            >
              Search
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr />

          {/* {
            (q === '')
            ? <div className="alert alert-primary">Search hero</div>
            : (heroes.length === 0) && <div className="alert alert-danger">No hay héroe <b>{q}</b>
          </div>
          } */}
          <div className="alert alert-primary animate_animated animate_fadeIn" style={{display: showSearch ? '' : 'none'}}>
            Search hero
          </div>
          <div className="alert alert-danger animate_animated animate_fadeIn" style={{display: showError ? '' : 'none'}}>No hay héroe <b>{q}</b></div>
          {
            heroes.map( hero => (
              <HeroCard 
                key={hero.id}
                {...hero}
              />
            ))
          }
        </div>
      </div>
    </>
  )
}