import { useParams, Navigate, useNavigate } from 'react-router-dom';
import { getHeroeById } from '../../selectors/getHeroById';
import { Heroe } from '../../interfaces/heroe';
import { useMemo } from 'react';
interface Params {
  heroId: string;
}
export const HeroScreen = () => {
  const { heroId } = useParams();

  const navigate = useNavigate();

  const hero = useMemo(() => getHeroeById(heroId), [heroId]);

  if (!hero) {
    return <Navigate to="/" />;
  }

  const handleReturn = () => {
    return navigate(-1);
  };

  const imgPath = `/assets/heroes/${hero.id}.jpg`;
  return (
    <div className="row mt-5">
      <div className="col-4">
        <img
          src={imgPath}
          alt={hero.superhero}
          className="img-thumbnail animate__animated animate__fadeInLeft"
        />
      </div>
      <div className="col-8 animate__animated animate__fadeIn">
        <h3>{hero.superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b>Alter ego: </b>
            {hero.alter_ego}
          </li>
          <li className="list-group-item">
            <b>Publisher: </b>
            {hero.publisher}
          </li>
          <li className="list-group-item">
            <b>First Appearance: </b>
            {hero.first_appearance}
          </li>
        </ul>
        <h5 className="mt-3">Characters</h5>
        <p>{hero.characters}</p>
        <button className="btn btn-outline-info" onClick={handleReturn}>
          Return
        </button>
      </div>
    </div>
  );
};
