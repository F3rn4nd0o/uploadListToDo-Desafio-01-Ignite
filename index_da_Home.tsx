import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
  Alert,
  Pressable,
} from "react-native";
import { useState } from "react";

import { styles } from "./styles";

import { Container2 } from "./styles";
import { CLText } from "./styles";
import { CRText } from "./styles";
import { DescTask1 } from "./styles";
import { DescTask2 } from "./styles";
import { TextInputs } from "./styles";
import { BtnAdd } from "./styles";

import Line from "../../../assets/Line";

import { Tasks } from "../../components/Tasks/taskindex";

import LogoIgnite from "../../../assets/LogoIgnite.svg";
import ImgButtons from "../../../assets/ImgButton.svg";
import ClipBoard from "../../../assets/ClipBoard.svg";
import Checked from "../../../assets/Checked.svg";

export interface ITask {
  name: string;
  completed: boolean;
}

type Props = {
  completed: boolean;
};

export function Home({completed}:Props) {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [tasksname, setTasksName] = useState("");

  const TasksCounter = tasks.length;
  let CompletedTasks = tasks.filter((item) => item.completed === true).length;
  let CompletedCheck = tasks.filter((item) => item.completed).length;

  function handleTaskAdd() {
    const sameName = tasks.filter((item) => item.name === tasksname);

    if (sameName.length > 0) {
      return Alert.alert(
        "Tasks existe",
        "Já existe uma tarefa com esse conteudo"
      );
    }

    setTasks((prevState) => [
      ...prevState,
      { name: tasksname, completed: false },
    ]);
    setTasksName('');
  }

  function handleSetCompleted(name: string) {
    let newState = [...tasks];
    const findIndex = newState.findIndex((item) => item.name === name);
    newState[findIndex].completed = true;
    setTasks(newState);
  }


  function handleTaskRemove(name: string) {
    Alert.alert("Remover", `Deseja remover a tarefa ?`, [
      {
        text: "Sim",
        onPress: () =>
          setTasks((prevState) =>
            prevState.filter((tasks) => tasks.name !== name)
          ),
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  }

  return (
    <>
      <Container2 style={styles.container2}>
        <View style={styles.container}>
          <View style={styles.CTLogo}>
            <LogoIgnite style={styles.LogoIgnite} />
          </View>

          <View style={styles.form}>
            <TextInputs
              style={styles.Input}
              placeholder="Adicionar uma nova tarefa"
              placeholderTextColor={"#808080"}
              onChangeText={setTasksName}
              value={tasksname}
            />

            <BtnAdd
              style={({ pressed }) => [
                {
                  backgroundColor: pressed ? "#4EA8DE" : "#1E6F9F",
                },
              ]}
              onPress={handleTaskAdd}
            >
              <ImgButtons />
            </BtnAdd>
          </View>

          <View style={styles.Tasks}>
            <View style={styles.Criadas}>
              <CRText style={styles.CriadastText}>Criadas</CRText>

              <View style={styles.Counter}>
                <Text style={styles.CounterText}> {TasksCounter} </Text>
              </View>
            </View>

            <View style={styles.Concluidas}>
              <CLText style={styles.ConcluidasText}>Concluidas</CLText>

              <View style={styles.Counter}>
                <Text style={styles.CounterText}> {CompletedTasks} </Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.Container3}>
          <FlatList
            data={tasks}
            keyExtractor={(item) => item.name}
            renderItem={({ item }) => (
              <Tasks
                key={item.name}
                name={item.name}
                onRemove={() => handleTaskRemove(item.name)}
                handleSetCompleted={() => handleSetCompleted(item.name)} completed={false}/>
            )}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={() => (
              <>
                <Line />
                <View style={styles.CTTasks}>
                  <View style={styles.DescTask}>
                    <ClipBoard style={styles.ClipBoard} />

                    <DescTask1 style={styles.DescTask1}>
                      Você ainda não tem tarefas cadastradas
                    </DescTask1>
                    <DescTask2 style={styles.DescTask2}>
                      Crie tarefas e organize seus itens a fazer
                    </DescTask2>
                  </View>
                </View>
              </>
            )}
          />
        </View>
      </Container2>
    </>
  );
}


function a() {
  throw new Error("Function not implemented.");
}

