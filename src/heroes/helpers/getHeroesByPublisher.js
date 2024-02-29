import { heroes } from "../data/heroes";

export const getHeroesByPublisher = ( publisher ) => {
  console.log('me volvi a renderizar');
  const validPublishers = ['DC Comics', 'Marvel Comics'];
  if( !validPublishers.includes( publisher) ){ //si no lo incluye
    throw new Error(`${publisher} no existe`)
  }

  //pero si existe
  return heroes.filter( hero => hero.publisher === publisher);

}