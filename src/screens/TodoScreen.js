import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { EditModal } from '../components/EditModal';
import { Card } from '../components/ui/Card';


export const TodoScreen = ({ goBack, todo, onRemove, onSave }) => {

    const [modal, setModal] = useState(false)

    const saveHandler = title => {
      onSave(todo.id, title)
      setModal(false)
    }

    return (
        <View>
            <EditModal 
              visible={modal} 
              onCancel={() => setModal(false)}
              value={todo.title}
              onSave={saveHandler} />
            <Card>
              <Text style={styles.title}>{ todo.title }</Text>
              <Button title="Ред." onPress={() => setModal(true)}/>
            </Card>
            <View style={styles.buttons}>
                <View style={styles.button}> 
                  <Button title="Назад" onPress={goBack}/>
                </View>
                <View style={styles.button}>
                  <Button title="Удалить" color="#ff0000" onPress={() => onRemove(todo.id)}/>
                </View>
                
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
  buttons: {
      flexDirection: "row",
      justifyContent: 'space-between'
  },
  button: {
      width: '40%'
  },
  title: {
    fontSize: 20
  },
  
})