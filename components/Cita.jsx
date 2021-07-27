import React from 'react'
import { View, Text,FlatList ,StyleSheet,TouchableHighlight} from 'react-native'

export default function Cita(props) {

    const  { people,EliminarCita } = props;

    const eliminar = (id) => {
        
        EliminarCita(id)
    }

    // console.log("gaaaaaaaaaaaaaa"+people.item.name)
    return (
        <View style={styles.cita}>
            <View>
                <Text style={styles.label}>Nombre :
                <Text style={styles.texto}>{people.item.name}</Text>
                </Text>
            </View>
            <View>
                <Text style={styles.label}>Edad :
                <Text style={styles.texto}>{people.item.age}</Text>
                </Text>
            </View>
            <View>
                <Text style={styles.label}> Novi@ :
                <Text style={styles.texto}>{(people.item.FriendLove) ? 'Si' : 'No'}</Text>
                </Text>
            </View>
            <View>
                <Text style={styles.label}> Citas :
                <Text style={styles.texto}>{people.item.Cita}</Text>
                </Text>
            </View>
            <View>
            <TouchableHighlight onPress={() => eliminar(people.item.id)} style={styles.btnEliminar}>
                    <Text style={styles.txtEliminar}>Eliminar &times; </Text>
                </TouchableHighlight>
            </View>
            
        </View>
    )
}


const styles = StyleSheet.create({
    cita:{
        backgroundColor:'#fff',
        marginBottom:20,
        padding: 10,
        marginHorizontal:12,
        borderRadius: 10 
    },
    label:{
        fontSize:18,
        fontWeight:'bold',
        marginBottom:3
    },
    texto:{
        color:"#6494e6",
    },
    btnEliminar :{
        marginTop:10,
        backgroundColor:'#E94057',
        margin: 5,
        padding: 10,
        borderRadius:5
    },
    txtEliminar:{
        textAlign:'center',
        color:'#fff'
    }
})


