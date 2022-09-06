import React, { useState } from 'react';
import { EmptyList } from '../../components/EmptyList';
import { TaskCard } from '../../components/TaskCard';
import { AntDesign } from '@expo/vector-icons'; 
import {
    Container,
    Logo,
    Header,
    HeaderWrapper,
    TextInput,
    Button,
    Body,
    BodyHeader,
    OpenTasks,
    Content,
    FinishedTasks,
    TaskList,
    WrapperOpen,
    WrapperFinished,
    Number,
    Text,
} from './styles';
import { Alert, Keyboard } from 'react-native';

export function Home() {

    const [task, setTask] = useState([]);
    const [inputTask, setInputTask] = useState('');

    function handleNewTask(name){
        if(task.includes(name)) {
           Alert.alert('Tarefa já existe','Já existe uma tarefa na lista com esse nome!')
           Keyboard.dismiss()
           return setInputTask('');
         }

        setTask(prevState => [...prevState, inputTask]);
        Keyboard.dismiss()
        return setInputTask('');
    }

    function handleRemoveTask(name){
        Alert.alert('Remover', `Deseja remover a tarefa?`, [
            {
                text: 'Sim',
                onPress: () => setTask(prevState => prevState.filter(task => task !== name))
            },
            {
                text: 'Não',
                style: 'cancel'
            }
        ])
    }

  return (
    <Container>
        <Header>
            <Logo source={require('../../assets/Logo.png')} resizeMethod='resize'/>
        </Header>

        <Body>
            <HeaderWrapper>
                <TextInput placeholder="Adicione uma nova tarefa" placeholderTextColor="#808080" onChangeText={setInputTask} value={inputTask}/>
                <Button onPress={() => handleNewTask(inputTask)}>
                    <AntDesign name="pluscircleo" size={18} color="#F2F2F2" />
                </Button>
            </HeaderWrapper>

            <BodyHeader>
                <WrapperOpen>
                    <OpenTasks>Criadas</OpenTasks>
                    <Number><Text>{task.length}</Text></Number>
                </WrapperOpen>
                
                <WrapperFinished>
                    <FinishedTasks>Concluídas</FinishedTasks>
                    <Number><Text>0</Text></Number>
                </WrapperFinished>
            </BodyHeader>


            <Content>
                <TaskList 
                    showsVerticalScrollIndicator ={false}
                    ListEmptyComponent={ <EmptyList/> }
                    data={task}
                    keyExtractor={item => item}
                    renderItem={({item}) => 
                        <TaskCard title={item} onPress={() => handleRemoveTask(item)}/>
                    }
                />
            </Content>

        </Body>

    </Container>
  );
}