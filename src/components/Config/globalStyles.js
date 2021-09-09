import {Dimensions} from 'react-native';

export const colors = {
    primary: '#EC8B57',
    black: '#191919',
    red: '#FF3636',
    lightBlue: '#36D2FF',
    green: '#8FEF73',
    grey: '#767676',
    borderGrey: '#C9C9C9',
    statusGrey: '#666666',
    textGrey: '#A2A2A2',
    darkBlue: '#83abeb',
};

export const fonts = {
    SpoqaHanSansNeo: 'SpoqaHanSansNeo',
    SpoqaHanSansNeo_Thin: 'SpoqaHanSansNeo-Thin',
    SpoqaHanSansNeo_Light: 'SpoqaHanSansNeo-Light',
    SpoqaHanSansNeo_Medium: 'SpoqaHanSansNeo-Medium',
    SpoqaHanSansNeo_Regular: 'SpoqaHanSansNeo-Regular',
    SpoqaHanSansNeo_Bold: 'SpoqaHanSansNeo-Bold',
};

export const Height = (
    Dimensions.get('window').height
).toFixed(2);

export const Width = (
    Dimensions.get('window').width 
).toFixed(2);