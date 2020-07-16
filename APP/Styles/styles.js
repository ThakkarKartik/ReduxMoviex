import {StyleSheet} from 'react-native'
const styles = StyleSheet.create({
    Container: {
        padding:5,
        flexDirection: 'row',
    },
    Image:{
        height: 100,
        width:70,
        flex:1,
        resizeMode: 'contain',
    },
    Text:{
        flex:2,
        marginLeft:5,
        textAlign: "left"
    },
    Icon:{
        flex:1,
        alignItems: "center"
    }
});

export default styles;