import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import Card from '../components/Card';
import Tab from '../components/Tab';
import mock from '../data';

class Events extends React.Component {
    state = {
        selected: 'All'
    }
    select = (selected) => {
        this.setState({ selected })
    }
    render() {
        const { selected } = this.state;
        return (
            <View style={styles.wrap}>
                <Tab selected={selected} select={this.select} />
                <FlatList
                    data={mock.filter(e => e.date === selected || selected === 'All')}
                    renderItem={({ item }) => <Card data={item} />}
                    keyExtractor={item => item.id}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
  wrap: {
    alignSelf: 'stretch',
  },
});

export default Events