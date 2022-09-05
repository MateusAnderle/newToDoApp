import React from 'react';
import { Text } from 'react-native';
import { TaskCard } from '../../components/TaskCard';
import {
    Logo,
    Header,
    HeaderWrapper,
    TextInput,
    Button,
    Body,
    BodyHeader,
    OpenTasks,
    AllTasks,
    FinishedTasks,
    TaskList,
} from './styles';

export function Home() {
  return (
    <>
        <Header>
            <Logo source={require('../../assets/Logo.png')} resizeMethod='resize'/>
            <HeaderWrapper>
                <TextInput placeholder="Adicione uma nova tarefa" placeholderTextColor="#808080"/>
                <Button>
                    <Text>+</Text>
                </Button>
            </HeaderWrapper>
        </Header>

        <Body>
            <BodyHeader>
                <OpenTasks>Criadas (0)</OpenTasks>
                <FinishedTasks>Concluídas (0)</FinishedTasks>
            </BodyHeader>

            <TaskCard/>

            <TaskList ListEmptyComponent={
                <Text> Boa noite</Text>
            }/>
        </Body>

    </>
  );
}