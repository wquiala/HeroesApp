import { FormEvent, useMemo } from 'react';
import { userForm } from '../../hooks/userForm';
import { getHeroesByName } from '../../selectors/getHeroesbyName';
import { HeroCard } from '../hero/HeroCard';
import { useNavigate, useLocation } from 'react-router-dom';
import querystring from 'query-string';

interface FormData {
  searchText: string | (string | null)[] | null;
}

export const SearchScreen = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { q = '' } = querystring.parse(location.search);

  const { values, handleInputChange } = userForm<FormData>({
    searchText: q,
  });

  const heroesFileted = useMemo(() => getHeroesByName(q?.toString()), [q]);

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    navigate(`?q=${values.searchText}`);
    console.log(location);
  };
  return (
    <>
      <h1>Busquedas</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Buscar</h4>
          <hr />
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Buscar un heroe"
              name="searchText"
              autoComplete="off"
              value={values.searchText?.toString()}
              onChange={handleInputChange}
              className="form-control"
            />
            <button className="btn btn-outline-primary mt-1" type="submit">
              Buscar...
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4>Resultados</h4>
          <hr />
          {q === '' ? (
            <div className="alert alert-info">Buscar un heroe</div>
          ) : (
            heroesFileted.length === 0 && (
              <div className="alert alert-danger">No hay resultados</div>
            )
          )}
          {heroesFileted.map((hero) => {
            return <HeroCard key={hero.id} {...hero} />;
          })}
        </div>
      </div>
    </>
  );
};
