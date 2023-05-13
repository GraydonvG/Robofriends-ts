import { Fragment } from 'react';
import { Robots } from '../containers/App';
import Card from './Card';

type CardListProps = {
  robots: Robots[];
};

function CardList({ robots }: CardListProps) {
  return (
    <Fragment>
      {robots.map((user) => (
        <Card
          key={user.id}
          id={user.id}
          name={user.name}
          email={user.email}
        />
      ))}
    </Fragment>
  );
}

export default CardList;
