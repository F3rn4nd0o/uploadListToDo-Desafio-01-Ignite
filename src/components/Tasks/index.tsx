import { View, Text, TouchableOpacity, Pressable } from "react-native";
import { styles } from "./styles";
import { useState } from "react"
import Checkbox from 'expo-checkbox'

import { TextTask } from "./styles";
import { ButtonTask } from './styles'

import RemoveImg from '../../../assets/RemoveImg.svg'

type Props = {
    name: string;
    onRemove: () => void;
}


export function Tasks({ name, onRemove,}:Props){
    const [ischecked, setChecked] = useState(false);   



    return(
        <View style= {styles.container}>

            <View style={styles.form}>
                <View>
                    <Checkbox
                    style={{borderRadius: 10, borderColor: '#4EA8DE', width: 17.45, height: 17.45, }}
                    color={ischecked? '#5E60CE': undefined}
                    value={ischecked} onValueChange={setChecked}/>
                </View>

                <TextTask style= {styles.tasks}>
                    {name}
                </TextTask>

                <View style={styles.BtnEnd}>
                    <ButtonTask
                    style={({pressed}) => [
                        {
                          backgroundColor: pressed ? '#333333' : '',
                        },
                      ]}
                    onPress={onRemove}>
                        <RemoveImg />
                    </ButtonTask>
                </View>

            </View>
         
        </View>
    )
}