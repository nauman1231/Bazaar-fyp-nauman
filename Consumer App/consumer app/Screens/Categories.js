import React, { Component } from 'react';
import {
    ScrollView,
    FlatList,
    StyleSheet,
    View
} from 'react-native';
import { Button } from 'react-native-paper';
import CategoryCard from '../Components/CategoryCard/CategoryCard';



export default class Categories extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }


    componentWillMount() {

    }

    render() {




        return <ScrollView style={styles.container}>



            <View style={styles.grid}>

                <View style={styles.row}>


                    <View style={styles.categoryContainer}>
                        <CategoryCard />
                    </View>


                    <View style={styles.categoryContainer}>
                        <CategoryCard />
                    </View>




                </View>

                <View style={styles.row}>


                    <View style={styles.categoryContainer}>
                        <CategoryCard />
                    </View>


                    <View style={styles.categoryContainer}>
                        <CategoryCard />
                    </View>




                </View>

                <View style={styles.row}>


                    <View style={styles.categoryContainer}>
                        <CategoryCard />
                    </View>


                    <View style={styles.categoryContainer}>
                        <CategoryCard />
                    </View>




                </View>




            </View>


        </ScrollView>

            ;

    }

}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    categoryContainer: {
        width: '48%',
        marginVertical: 10
    }
})