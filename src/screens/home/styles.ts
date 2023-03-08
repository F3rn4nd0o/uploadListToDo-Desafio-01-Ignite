import { Button, StyleSheet } from "react-native";

import styled from 'styled-components/native'
import theme from '../../../theme/index';

export const Container2 = styled.View`
    background-color: #1A1A1A;
    flex: 1;
`;

export const CLText = styled.Text`
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;

export const CRText = styled.Text`
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;

export const DescTask1 = styled.Text`
     font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
     color: #808080;
`;

export const DescTask2 = styled.Text`
     font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
     color: #808080;
`;

export const TextInputs= styled.TextInput`
     font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`;

export const BtnAdd = styled.Pressable`
    width: 56;
    height: 56;
    border-radius: 10;
    align-items: center;
    justify-content: center;
`;



export const styles = StyleSheet.create ({
    container : {
        backgroundColor: '#0D0D0D',
        padding: 24,
        justifyContent: 'center',
        height: 173,
    },

    container2 : {
      
    },

    Container3 : {
        height: 208,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:110,
        marginLeft: 20,
        marginRight: 20,
        flex: 1,
    },

    form : {
        width: '100%',
        flexDirection: 'row',
        marginTop: 16,
        marginBottom: 42,
    },

    Input : {
        marginRight: 12,
        flex: 1,
        height: 56,
        backgroundColor: '#262626',
        borderRadius: 10,
        color: '#ffffff',
        padding: 16,
        fontSize: 16,
    },

    btn : {
        width: 56,
        heigth: 56,
        borderRadius: 10,
        backgroundColor: '#1E6F9F',
        alignItems: 'center',
        justifyContent: 'center',
    },

    buttonText : {
        fontSize: 24,
    },

    CTLogo: {
        alignItems: 'center',
        marginBottom: 20
    },

    LogoIgnite : {
        marginTop: 150,
        width: 110.34,
        height: 32,
        flex:1,
        marginBottom: 10
        
    },

    ClipBoard: {
        marginBottom: 20,
        width: 56,
        height: 56,
    },

    Tasks : {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    Criadas : {
        flexDirection: 'row',
    },

    Concluidas : {
        flexDirection: 'row',
    },

    CriadastText : {
        color: '#4EA8DE',
    },

    ConcluidasText : {
        color: '#8284FA',
    },
    
    Counter : {
        backgroundColor: '#333333',
        marginLeft: 10,
        borderRadius: 10,
        width: 25,
        height: 19,
    },

    CounterText : {
        color: '#FFFFFF',
        textAlign: 'center'
        
    },

    CTTasks: {
        flex: 1,
    },

    DescTask: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },

    DescTask1: {
        fontSize:14
    },

    DescTask2: {
        fontSize: 14
    },

    Line: {
        backgroundColor: '#808080',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    }

})