import React, {Component} from 'react';
import styles from './MoviesList.css';
import CSSModules from 'react-css-modules';

let MoviesList;

let movies = [
    'The Shawshank Redemption (1994)',
    'The Godfather (1972)',
    'The Godfather: Part II (1974)',
    'Il buono, il brutto, il cattivo. (1966)',
    'Pulp Fiction (1994)',
    'Inception (2010)',
    'Schindler\'s List (1993)',
    '12 Angry Men (1957)',
    'One Flew Over the Cuckoo\'s Nest (1975)',
    'The Dark Knight (2008)',
    'Star Wars: Episode V - The Empire Strikes Back (1980)',
    'The Lord of the Rings: The Return of the King (2003)',
    'Shichinin no samurai (1954)',
    'Star Wars (1977)',
    'Goodfellas (1990)',
    'Casablanca (1942)',
    'Fight Club (1999)',
    'Cidade de Deus (2002)',
    'The Lord of the Rings: The Fellowship of the Ring (2001)',
    'Rear Window (1954)',
    'C\'era una volta il West (1968)',
    'Raiders of the Lost Ark (1981)',
    'Toy Story 3 (2010)',
    'Psycho (1960)',
    'The Usual Suspects (1995)',
    'The Matrix (1999)',
    'The Silence of the Lambs (1991)',
    'Se7en (1995)',
    'Memento (2000)',
    'It\'s a Wonderful Life (1946)',
    'The Lord of the Rings: The Two Towers (2002)',
    'Sunset Blvd. (1950)',
    'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb (1964)',
    'Forrest Gump (1994)',
    'L�on (1994)',
    'Citizen Kane (1941)',
    'Apocalypse Now (1979)',
    'North by Northwest (1959)',
    'American Beauty (1999)',
    'American History X (1998)',
    'Taxi Driver (1976)',
    'Terminator 2: Judgment Day (1991)',
    'Saving Private Ryan (1998)',
    'Vertigo (1958)',
    'Le fabuleux destin d\'Am�lie Poulain (2001)',
    'Alien (1979)',
    'WALL�E (2008)',
    'Lawrence of Arabia (1962)',
    'The Shining (1980)',
    'Sen to Chihiro no kamikakushi (2001)',
    'Paths of Glory (1957)',
    'A Clockwork Orange (1971)',
    'Double Indemnity (1944)',
    'To Kill a Mockingbird (1962)',
    'The Pianist (2002)',
    'Das Leben der Anderen (2006)',
    'The Departed (2006)',
    'M (1931)',
    'City Lights (1931)',
    'Aliens (1986)',
    'Eternal Sunshine of the Spotless Mind (2004)',
    'Requiem for a Dream (2000)',
    'Das Boot (1981)',
    'The Third Man (1949)',
    'L.A. Confidential (1997)',
    'Reservoir Dogs (1992)',
    'Chinatown (1974)',
    'The Treasure of the Sierra Madre (1948)',
    'Modern Times (1936)',
    'Monty Python and the Holy Grail (1975)',
    'La vita � bella (1997)',
    'Back to the Future (1985)',
    'The Prestige (2006)',
    'El laberinto del fauno (2006)',
    'Raging Bull (1980)',
    'Nuovo Cinema Paradiso (1988)',
    'Singin\' in the Rain (1952)',
    'Some Like It Hot (1959)',
    'The Bridge on the River Kwai (1957)',
    'Rash�mon (1950)',
    'All About Eve (1950)',
    'Amadeus (1984)',
    'Once Upon a Time in America (1984)',
    'The Green Mile (1999)',
    'Full Metal Jacket (1987)',
    'Inglourious Basterds (2009)',
    '2001: A Space Odyssey (1968)',
    'The Great Dictator (1940)',
    'Braveheart (1995)',
    'Ladri di biciclette (1948)',
    'The Apartment (1960)',
    'Up (2009)',
    'Der Untergang (2004)',
    'Gran Torino (2008)',
    'Metropolis (1927)',
    'The Sting (1973)',
    'Gladiator (2000)',
    'The Maltese Falcon (1941)',
    'Unforgiven (1992)',
    'Sin City (2005)'
];

MoviesList = class extends Component {
    render() {
        return (
            <div>
                <ul styleName="movies-list">
                    {
                        movies.map(function(movie,key){
                            return <li styleName="movie" key={key}>{key + 1} - {movie}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
};

export default CSSModules(MoviesList, styles);