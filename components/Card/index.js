import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';

import mock from '../../data'

class Card extends React.Component {
  render() {
    return (
        <View style={styles.wrap}>
            <Image style={styles.image} source={{uri: mock[0].image}}></Image>
            <View style={styles.right}>
              <Text style={styles.title}>{mock[0].title}</Text>
              <Text style={styles.speaker}>{mock[0].speaker}</Text>
              <Text style={styles.date}>{mock[0].date}</Text>
            </View>
        </View>
    )
  }
}

const styles = StyleSheet.create({
    wrap: {
        height: 200,
        alignSelf: 'stretch',
        padding: 10,
        borderBottomWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        height: 180,
        width: 180,
        marginRight: 10,
    },
    right: {
        flex: 1,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    speaker: {
        flex: 1,
        marginTop: 5,
        fontSize: 16,
    },
    date: {
        marginTop: 5,
        fontSize: 16,
    }
});

export default Card