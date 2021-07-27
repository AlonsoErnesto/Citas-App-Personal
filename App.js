import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View,FlatList,TouchableHighlight , TouchableWithoutFeedback, Keyboard} from 'react-native';
import Cita from './components/Cita'
import Formulario from './components/Formulario';


export default function App() {



  const [mostrarFormulario, setMostrarFormulario] = useState(false)
  const [people, setpeople] = useState([

    {
      id:1,
      name:'Ernesto Mamani',
      age:21,
      FriendLove:false,
      Cita:'Pamela y Claudia, Betsabel',
      Hora:'14:00',
      Fecha:'07/24/21',
    },
    {
      id:2,
      name:'Pamela Rodriguez',
      age:20,
      FriendLove :false,
      Cita:'Ernesto',
      Hora:'14:00',
      Fecha:'07/24/21',
    },
    {
      id:3,
      name:'Claudia Rodriguez',
      age:24,
      FriendLove:true,
      Cita:'Ernesto',
      Hora:'14:00',
      Fecha:'07/24/21',
    },
    
  ])

  

  const EliminarCita =  (id) => {

    setpeople(citasActuales => {
      return citasActuales.filter(cita => cita.id !== id)
    })

  }

  const functionMostrar = () => {
    setMostrarFormulario(!mostrarFormulario)
  }
  console.log(people)


  // OCULATAR TECLADO CON EL PRESS FUERA DEL TECLADO
  const cerrarTeclado = () => {
    Keyboard.dismiss();
  }

  return (
    <TouchableWithoutFeedback onPress={() => cerrarTeclado()}>
    <View style={styles.container}>
      <Text style={styles.title} >Citas App</Text>
      <View style={styles.divider}></View>
      <TouchableHighlight style={styles.mostrarForm} onPress={functionMostrar}>
        <Text style={styles.titleButonMostrar}>Crear nueva Cita</Text>
      </TouchableHighlight>
      <View style={styles.contenido}>

      {mostrarFormulario ? (        
              <View>
                <Text style={styles.subtitle}>Nueva Cita</Text>
              <Formulario setMostrarFormulario={setMostrarFormulario} people={people} setpeople={setpeople}/>
              </View>
      ):(
        <>{
          people.length === 0 
         ? <Text style={{textAlign:'center',color:'#fff',fontSize:20}}>No hay Citas Actuales</Text> 
         : <>
         <Text style={styles.subtitle}>Lista de Citas</Text>
         <FlatList
          style={styles.listado}
          data={people}
          renderItem={(item)=> <Cita people = {item} EliminarCita={EliminarCita}/>}
          keyExtractor = {people=>people.id.toString()}
          />
          </>
        } 
        </>  
      )}
      <StatusBar style="auto" />
     
      </View>
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5434b3a9',
  },
  title:{
    marginTop:25,
    fontWeight:'bold',
    fontSize:40,
    
    textAlign:'center',
    marginBottom:10,
    
  },
  divider:{
    alignSelf:"center",
    width:"87%",
    height: "0.1%",
    marginBottom:20,
    backgroundColor:"blue",
  },
  contenido:{
    flex:1,
    
    marginHorizontal:'2.5%' ,

  },
  listado:{
    flex:1
  },
  mostrarForm:{
    backgroundColor:'#6494e6',
    paddingVertical:10,
    marginBottom:20
  },
  titleButonMostrar:{
    color: '#fff',
    
    textAlign:'center',
  },
  subtitle:{
    textAlign:'center',
    fontWeight:'100',
    fontSize:30,
    marginBottom:10
  }

});


































