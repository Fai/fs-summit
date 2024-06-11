import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';
import Tab from './tab';

class Tabs extends React.Component {
    render() {
        const { selected, select} = this.props;
        return (
            <View style={styles.container}>
                <Tab select={() => select('All')} selected={selected === 'All'}>All</Tab>
                <Tab select={() => select('Friday')} selected={selected === 'Friday'}>Friday</Tab>
                <Tab select={() => select('Saturday')} selected={selected === 'Saturday'}>Saturday</Tab>
                <Tab select={() => select('Sunday')} selected={selected === 'Sunday'}>Sunday</Tab>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: 32,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 1,
        flexDirection: 'row',
    },
});

export default Tabs