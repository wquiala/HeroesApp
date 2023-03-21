import { Heroe } from '../../interfaces/heroe';
import { Link } from 'react-router-dom';

export const HeroCard = ({
  alter_ego,
  characters,
  first_appearance,
  id,
  publisher,
  superhero,
}: Heroe) => {
  return (
    <div className="col animate__animated animate__fadeIn">
      <div className="card">
        <div className="row not-gutters">
          <div className="col-4">
            <img
              src={`/assets/heroes/${id}.jpg`}
              className="card-img"
              alt={superhero}
            />
          </div>
          <div className="col-8">
            <div className="card-body">
              <h5 className="card-tittle"> {superhero}</h5>
              <p className="card-text">{alter_ego}</p>
              {alter_ego !== characters && (
                <p className="text-muted">{characters}</p>
              )}
              <p className="card-text">
                <small className="text-muted">{first_appearance}</small>
              </p>
              <Link to={`/hero/${id}`}>Mas info...</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
