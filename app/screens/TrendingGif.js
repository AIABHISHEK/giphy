import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Image, FlatList } from 'react-native';
import GifImage from '@lowkey/react-native-gif';
import ControlledGifView from 'react-native-controlled-gif';

const TrendingGifs = (props) => {
    const [trendingGifs, setTrendingGifs] = useState([]);
    const [numGifsToLoad, setNumGifsToLoad] = useState(10);
    const searchTerm = props.searchTerm;
    const [isLoading, setIsLoading] = useState(false);
    const [searchType, setSearchType] = useState('trending');
    useEffect(() => {
        const fetchTrendingGifs = async () => {
            setIsLoading(true);
            try {
                if (searchTerm) {
                    setSearchType('search');
                }
                // Fetch trending GIFs using your API
                let url = `https://api.giphy.com/v1/gifs/${searchType}?api_key=QzlehhWsU3aSd3wg72o4mZlRSeoYGBmD&limit=${numGifsToLoad}`;
                if (searchType === 'search') {
                    url += `&q=${searchTerm}`;
                }
                console.log(url);
                const response = await fetch(url);
                const data = await response.json();
                // console.log(data.data.length);
                // Assuming the response contains an array of trending GIFs
                setTrendingGifs(data);
            } catch (error) {
                console.error('Error fetching trending GIFs:', error);
            }
            setIsLoading(false);
        };
        if (isLoading === false) {
            fetchTrendingGifs();
        }
    }, [searchTerm, numGifsToLoad]);

    return (
        <View >
            <FlatList
                data={trendingGifs.data}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <Image source={{ uri: item.images.original.webp }} style={{ width: '45%', height: 200, aspectRatio: 1, margin: 8 }} />
                    // <GifImage
                    //     source={{
                    //         uri:
                    //             'https://media.tenor.com/images/1c39f2d94b02d8c9366de265d0fba8a0/tenor.gif',
                    //     }}
                    //     style={{
                    //         width: 100,
                    //         height: 100,
                    //     }}
                    //     resizeMode={'cover'}
                    // />
                )}
                numColumns={2}
                style={styles.flatListContainer}
                onEndReached={() => setNumGifsToLoad(numGifsToLoad + 10)}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginRight: 0,
        margin: 0,
    },
    // flatListContainer: {
    //     paddingBottom: 16,
    // },
    // gifContainer: {
    //     flex: 1,
    //     margin: 8,
    // },
    // gifImage: {
    //     width: '100%',
    //     aspectRatio: 1,
    // },
});

export default TrendingGifs;
