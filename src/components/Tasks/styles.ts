import { StyleSheet } from "react-native";
import styled from 'styled-components/native'
import theme from '../../../theme/index';



export const TextTask = styled.Text`
     font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`;

export const ButtonTask = styled.Pressable`
        width: 32;
        height: 32;
        border-radius: 5;
        align-items: center;
        justify-content: center;
`;

export const styles = StyleSheet.create({
    container: {
        width: '200%',
        borderRadius: 5,
        flexDirection: 'row',
        marginBottom: 10,
        flex: 1
    },  

    tasks: {
        marginRight: 12,
        marginLeft: 12,
        flex: 1,
        borderRadius: 10,
        color: '#ffffff',
        fontSize: 16,
        alignItems: 'center',
        justifyContent: 'center',
    },

    BtnEnd : {
        
    },

    buttonTask: {
        width: 32,
        heigth: 32,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },

      buttonText: {

    },

    form: {
        width: 367,
        flexDirection: "row",
        backgroundColor: '#262626',
        marginRight: 12,
        borderRadius: 10,
        color: '#ffffff',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
    }
});