import { View, Text, TouchableOpacity, Pressable } from "react-native";
import { styles } from "./styles";
import { useState } from "react";
import Checkbox from "expo-checkbox";

import { TextTask } from "./styles";
import { ButtonTask } from "./styles";

import RemoveImg from "../../../assets/RemoveImg.svg";
import { ITask } from "../../screens/home/index_da_Home";


type Props = {
  name: string;
  onRemove: () => void;
  completed: boolean;
  handleSetCompleted: (name: string) => void;
};

export function Tasks({
  name,
  onRemove,
  completed,
  handleSetCompleted,
}: Props) {
  //const [ischecked, setChecked] = useState(completed);
  

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <View>
          <Checkbox
            style={{
              borderRadius: 10,
              borderColor: "#4EA8DE",
              width: 17.45,
              height: 17.45,
            }}
            color={completed ? "#5E60CE" : undefined}
            value={completed}
            onValueChange={()=> handleSetCompleted(name)}
          />
        </View>

        <TextTask style={styles.tasks}>{name}</TextTask>

        <View style={styles.BtnEnd}>
          <ButtonTask
            style={({ pressed }) => [
              {
                backgroundColor: pressed ? "#333333" : "",
              },
            ]}
            onPress={onRemove}
          >
            <RemoveImg />
          </ButtonTask>
        </View>
      </View>
    </View>
  );
}
