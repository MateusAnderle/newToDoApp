import React from 'react';
import {
    Container,
    Image,
    TextHeader,
    TextDescription,
} from './styles';

export function EmptyList() {
  return (
    <Container>
        <Image  source={require('../../assets/Clipboard.png')} resizeMethod='resize'/>
        <TextHeader>Você ainda não tem tarefas cadastradas</TextHeader>
        <TextDescription>Crie tarefas e organize seus itens a fazer</TextDescription>
    </Container>
  );
}