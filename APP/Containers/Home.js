import React from 'react';
import { Text, View, FlatList } from 'react-native';
//import mockMovies from '../../mockMovies'
import styles from '../Styles/styles'
import MovieRow from '../Components/movieRow'
import { Connect, connect } from 'react-redux'
class Home extends React.Component {
    constructor(props) {
        super(props)

    }
    async componentDidMount() {
        const {addMovies} = this.props
        const response = await fetch('http://www.omdbapi.com/?apikey=8a00c4a5&s=Batman');
        const data = await response.json();
        addMovies(data.Search);
    }
    render() {
        const { movies } = this.props
        return (
            <View style={styles.Container}>
                <FlatList
                    data={movies}
                    renderItem={({ item: movie }) =>
                        <MovieRow movie={movie} />
                    }
                    keyExtractor={(movie) => movie.imdbID}

                />
            </View>
        );
    }
}
function mapStateToProps(state) {
    return {
        movies: state
    }
}
function mapDispatchToProps(dispatch) {
    return {
        addMovies: (movies) => dispatch(
            {
                type: 'ADD_MOVIES',
                payload: { movies }
            }
            )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);