import React, { useState } from 'react';
import {
    ContainerWrapper,
    Container,
    CheckboxContainer,
    TaskDescription,
    Icon,
} from './styles';
import { Ionicons } from '@expo/vector-icons'; 
import Checkbox from 'expo-checkbox';

export function TaskCard({title, onPress}) {

  const [isChecked, setIsChecked] = useState(false);
  return (
    <ContainerWrapper>
      <Container>
          <CheckboxContainer>
            <Checkbox color= {isChecked ? "#5E60CE" : "#4EA8DE"} value={isChecked} onValueChange={setIsChecked}/>  
          </CheckboxContainer>
          <TaskDescription style={isChecked ? {textDecorationLine: "line-through", color: "#808080"} : {textDecorationLine: "none", color: "#F2F2F2"}}>{title}</TaskDescription>
          <Icon onPress={onPress}>
            <Ionicons name="trash-outline" size={18} color="#808080" />
          </Icon>
      </Container>
    </ContainerWrapper>
  );
}