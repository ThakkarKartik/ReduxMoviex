import React from 'react'
import {View,Text, Image} from 'react-native'
import styles from '../Styles/styles'
import Icon from 'react-native-vector-icons/FontAwesome'

export default function MovieRow({movie}){
    return(
        <View style = {styles.Container}>
            <Image source = {{uri: movie.Poster}} style={styles.Image} />
        <Text style = {styles.Text}>{movie.Title}</Text>
        <View style={styles.Icon}>
            <Icon name='heart-o' size={24} color='blue'></Icon>
        </View>
        </View>
    )
}
