import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';
import Tab from './tab';

class Tabs extends React.Component {
    state = {
        selected: 'All',
    }
    select = (selected) => {
        this.setState({selected})
    }
    render() {
        const { selected } = this.state;
        return (
            <View style={styles.container}>
                <Tab select={() => this.select('All')} selected={selected === 'All'}>All</Tab>
                <Tab select={() => this.select('Friday')} selected={selected === 'Friday'}>Friday</Tab>
                <Tab select={() => this.select('Saturday')} selected={selected === 'Saturday'}>Saturday</Tab>
                <Tab select={() => this.select('Sunday')} selected={selected === 'Sunday'}>Sunday</Tab>
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