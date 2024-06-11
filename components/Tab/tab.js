import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

class Tab extends React.Component {
    render() {
        return (
            <TouchableOpacity onPress={this.props.select} style={styles.touchable}>
                <View style={[styles.tab, this.props.selected && styles.selected]}>
                    <Text>{this.props.children}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    touchable: {
        flex: 1,
    },
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