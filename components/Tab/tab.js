import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';

class Tab extends React.Component {
    render() {
        return (
            <View style={[styles.tab, this.props.selected && styles.selected]}>
                <Text>{this.props.children}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    tab: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderLeftWidth: 1,
        borderRightWidth: 1,
    },
    selected: {
        backgroundColor: '#f0f0f0',
    }
});

export default Tab