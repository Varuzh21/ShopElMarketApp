import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

function SearchBar({ placeHolder = "Search...", handleSearch }) {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <View style={[styles.container, isFocused && styles.containerFocused]}>
            <Icon name="search" size={24} color="rgb(64, 191, 255)" style={styles.icon} />
            <TextInput
                style={styles.input}
                placeholder={placeHolder}
                placeholderTextColor="#888"
                accessible={true}
                accessibilityLabel="Search Input"
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                onChange={handleSearch}
            />
        </View>
    );
}

export default SearchBar;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 48,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'rgb(235, 240, 255)',
    },
    containerFocused: {
        borderColor: 'rgb(64, 191, 255)',
    },
    icon: {
        marginRight: 10,
    },
    input: {
        flex: 1,
        fontFamily: "Poppins",
        fontSize: 12,
        fontWeight: "400",
        color: "rgb(144, 152, 177)",
    },
});