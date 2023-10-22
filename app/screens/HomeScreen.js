import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import your chosen icon library.

import TrendingGifs from './TrendingGif';


const HomeScreen = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchTermCurrent, setSearchTermCurrent] = useState('');
    const [isDarkTheme, setIsDarkTheme] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme);
    };

    const lightStyles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#fff',
            padding: 10,
            // marginTop: 60,
            // marginBottom: 40,
            paddingBottom: 40,
            paddingTop: 60,
            justifyContent: 'center',
            alignItems: 'center',
        },
        searchBar: {
            marginTop: 50,
            borderRadius: 30,
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            marginBottom: 10,
            paddingHorizontal: 10,
            width: '90%',
        },
        
    });

    const darkStyles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: 'black', // Change this to your dark theme background color
            padding: 10,
            // marginTop: 60,
            // marginBottom: 40,
            paddingBottom: 40,
            paddingTop: 60,
            justifyContent: 'center',
            alignItems: 'center',
        },
        searchBar: {
            marginTop: 50,
            borderRadius: 30,
            height: 40,
            borderColor: 'white', // Change this to your dark theme border color
            borderWidth: 1,
            marginBottom: 10,
            paddingHorizontal: 10,
            width: '90%',
            // ...other dark theme styles
        },
        // ...other dark theme styles
    });

    const handleSearch = (text) => {
        text = text.trim();
        setSearchTermCurrent(text);
        // Implement a debounce function here
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
            // Call your API here with the updated search term
            console.log(`Fetching gifs for ${text}`);
        }, 1000); // Adjust the delay (in milliseconds) as needed
    };

    const handleSearchSubmit = () => {
        setSearchTerm(searchTermCurrent);
    }

    return (
        <View style={isDarkTheme ? darkStyles.container : lightStyles.container}>

            <TextInput
                style={isDarkTheme ? darkStyles.searchBar : lightStyles.searchBar}
                placeholderTextColor={isDarkTheme ? 'gray' : 'black'}
                placeholder="Search GIFs"
                value={searchTermCurrent}
                onChangeText={handleSearch}
                onSubmitEditing={handleSearchSubmit}
            />
            <TouchableOpacity onPress={toggleTheme}>
                <Icon
                    name={isDarkTheme ? 'moon-o' : 'sun-o'} // Corrected icon names
                    size={30}
                    color={isDarkTheme ? 'white' : 'black'} // Customize the icon color
                />
            </TouchableOpacity>
            {/* <GifController /> */}
        <TrendingGifs searchTerm={searchTerm}/>
        </View>
    );
};

const styles = StyleSheet.create({
    // Define other styles here if needed
});

export default HomeScreen;
