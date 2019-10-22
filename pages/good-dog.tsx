import React from 'react';
import fetch from 'isomorphic-unfetch';

interface Props {
  dogs: Array<string>;
}

function GoodDog(props: Props) {
  return (
    <ul>
      {props.dogs.map(dog => (
        <li key={dog}>
          <img src={`${dog}`} />
        </li>
      ))}
    </ul>
  );
}

GoodDog.getInitialProps = async () => {
  try {
    const response = await fetch('https://dog.ceo/api/breeds/image/random/3');
    const { message } = await response.json();
    return { dogs: message };
  } catch (e) {
    console.error(e);
  }
};

export default GoodDog;
