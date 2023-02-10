import React from 'react';
import Card from './Card';

function CardList({ robots }) {
  return robots.map((user) => {
    return (
      <Card
        key={user.id}
        id={user.id}
        name={user.name}
        email={user.email}
      />
    );
  });
}

export default CardList;
