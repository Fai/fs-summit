import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';
import Tab from './tab';

class Tabs extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Tab selected={true}>All</Tab>
                <Tab selected={false}>Friday</Tab>
                <Tab selected={false}>Saturday</Tab>
                <Tab selected={false}>Sunday</Tab>
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