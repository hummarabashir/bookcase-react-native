import React, { Component } from 'react';
import {
    StatusBar,
    StyleSheet,
    FlatList,
    Text,
    View
} from 'react-native';

import BookcaseItem from './bookcaseItem';

export default class Boookcase extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [
                {
                    id: 1,
                    title: 'Foreign Service Assignment Notebook',
                    author: 'FSI',
                    thumbnail: require('./images/fsan.png'),
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Condimentum lacinia quis vel eros donec ac odio tempor orci. Tempus quam pellentesque nec nam aliquam.'
                },
                {
                    id: 2,
                    title: 'Nepali Fluency Reader',
                    author: 'FSI/SLS',
                    thumbnail: require('./images/nepali-cover.jpg'),
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Condimentum lacinia quis vel eros donec ac odio tempor orci. Tempus quam pellentesque nec nam aliquam.'
                },
                {
                    id: 3,
                    title: 'Japanese Consular Module',
                    author: 'FSI/SLS',
                    thumbnail: require('./images/japanese-cover.jpg'),
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Condimentum lacinia quis vel eros donec ac odio tempor orci. Tempus quam pellentesque nec nam aliquam.'
                }
            ]
        }
    }

    _renderItem = ({item}) => (
        <BookcaseItem
            id={item.id}
            title={item.title}
            author={item.author}
            thumbnail={item.thumbnail}
            description={item.description}
            navigation={this.props.navigation}
        />
    );

    _keyExtractor = (item, index) => item.id.toString();

    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    barStyle="light-content"
                />
                <FlatList
                    data={this.state.books}
                    keyExtractor={this._keyExtractor}
                    renderItem={this._renderItem}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    }
});