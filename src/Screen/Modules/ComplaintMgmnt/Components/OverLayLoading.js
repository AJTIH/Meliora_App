//import liraries
import React, { memo, useMemo } from 'react';
import { View, StyleSheet } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import { useSelector } from 'react-redux';
import _ from 'underscore';

// create a component
const OverLayLoading = () => {
    const state = useSelector((state) => state.overLayLoadingStatus.payload, _.isEqual);
    const newStatus = useMemo(() => state, [state]);
    return (
        newStatus && <View style={styles.loading}>
            <ActivityIndicator color='blue' />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    loading: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

//make this component available to the app
export default memo(OverLayLoading);
