import { Robots } from '../containers/App';

// type CardProps = Robots;

function Card({ id, name, email }: Robots) {
  return (
    <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc">
      <img
        alt="robot"
        src={`https://robohash.org/${id}?size=200x200`}
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
}

export default Card;
