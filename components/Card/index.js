import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

import mock from '../../data'

class Card extends React.Component {
  render() {
    const { data } = this.props
    return (
        <TouchableOpacity>
          <View style={styles.wrap}>
              <Image style={styles.image} source={{uri: data.image}}></Image>
              <View style={styles.right}>
                <Text style={styles.title}>{data.title}</Text>
                <Text style={styles.speaker}>{data.speaker}</Text>
                <Text style={styles.date}>{data.date} / {data.time}</Text>
              </View>
          </View>
        </TouchableOpacity>
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
        fontSize: 12,
    }
});

export default Card