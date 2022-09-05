import React from 'react';
import {
    Container,
    Checkbox,
    TaskDescription,
    Icon,
} from './styles';

export function TaskCard() {
  return (
    <Container>
        <Checkbox>O</Checkbox>
        <TaskDescription>Hoje vou colher manga</TaskDescription>
        <Icon>Lixo</Icon>
    </Container>
  );
}