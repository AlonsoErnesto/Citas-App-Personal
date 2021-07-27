import React,{useState} from 'react'
import { StyleSheet, Text, View, TextInput,TouchableHighlight,Alert,ScrollView } from 'react-native'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import shortid from 'shortid'

export default function Formulario(props) {

    
    const { setpeople,people,setMostrarFormulario} = props;
    const [nombre, setNombre] = useState('')
    const [edad, setEdad] = useState(0)
    const [novio, setNovio] = useState('')
    const [citas, setCitas] = useState('')
    const [hora, setHora] = useState('')
    const [fecha, setFecha] = useState('')

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

  

    const showDatePicker = () => {
      setDatePickerVisibility(true);
    };
  
    const hideDatePicker = () => {
      setDatePickerVisibility(false);
    };
  
    const handleConfirmFecha = (date) => {
        const opciones = { month:'long' ,year : 'numeric' , day:"2-digit"}
        setFecha(date.toLocaleDateString('es-ES',opciones))
      hideDatePicker();
    };
    // muestra y oculta el timepicker
    const showTimePicker = () => {
        setTimePickerVisibility(true);
      };
    
      const hideTimePicker = () => {
        setTimePickerVisibility(false);
      };
      const handleConfirmHora = (date) => {
        const opciones = {hour:'numeric',minute:'2-digit'}
        setHora(date.toLocaleTimeString('en-US',opciones)  )
        hideTimePicker();
      };
    
      const Validaciones = () =>{
          Alert.alert(
              'ERROR',
              'Complete los campos',
              [{
                  text:'Aceptar'
              }]
          )
      }

      const crearNuevaCita = () => {
          if(!nombre) 
          {
            Validaciones()
          }
          else if(!edad )
          {
            console.log('edad faltante')
          }
          else if(!novio )
          {
            console.log('novio  ')
          }
          else if( !citas )
          {
            console.log('cita')
          }
          else if(!hora)
          {
            console.log('hira')
          }
          else if(!fecha)
          {
            console.log(fecha)
          }else {
            const cita = { nombre,edad, novio,citas,hora,fecha};
            cita.id = shortid.generate();


            const citasNuevo = [...people,cita]
            setpeople(citasNuevo);
            setMostrarFormulario(false);
           

          }

      }



    return (
        <>
            <ScrollView style={styles.form}>
                <Text style={styles.title}>Formulario</Text>
                <Text style={styles.label}>Nombre :</Text>
                <TextInput onChangeText={(text)=>setNombre(text)} placeholder="Nombre del Anfitrion" placeholderTextColor="red" style={styles.input}/>
                <Text style={styles.label}>Edad :</Text>
                <TextInput onChangeText={(text)=>setEdad(text)}  keyboardType="numeric" placeholder="Edad del Anfitrion" placeholderTextColor="red" style={styles.input}/>
                <Text style={styles.label}>Novi@ :</Text>
                <TextInput onChangeText={(text)=>{setNovio(text)}}   placeholder="Novi@ del Anfitrion" placeholderTextColor="red" style={styles.input}/>
                <Text style={styles.label}>Citas :</Text>
                <TextInput onChangeText={(text)=>{setCitas(text)}}  placeholder="Citas del Anfitrion" placeholderTextColor="red" style={styles.input}/>
               
                <View style={{flexDirection:'row'}}>
               <View>
               <Text style={styles.label}>Fecha :</Text>
                <TextInput style={styles.input2} placeholder="12/12/21 " onFocus={showDatePicker} value={fecha}/>
                <DateTimePickerModal
                
                    isVisible={isDatePickerVisible}
                    mode="date"
                    onConfirm={handleConfirmFecha}
                    onCancel={hideDatePicker}
                    locale="es_ES"
                    headerTextIOS = "Elige una fecha"
                    cancelTextIOS="Cancelar"
                    confirmTextIOS="Confirmar"
                /> 
                   
               
               </View>
             
               <View>
                   
               <Text style={styles.label}>Hora :</Text>
                <TextInput style={styles.input2} placeholder="12:34 pm " onFocus={showTimePicker} value={hora}/>
               
                <DateTimePickerModal
                    isVisible={isTimePickerVisible}
                    mode="time"
                    date={new Date()}
                    onConfirm={handleConfirmHora}
                    onCancel={hideTimePicker}
                    locale="en_GB"
                    headerTextIOS = "Elige una hora"
                    cancelTextIOS="Cancelar"
                    confirmTextIOS="Confirmar"
                /> 
               </View>
                </View>
                <TouchableHighlight onPress={crearNuevaCita} style={styles.buttonAdd}>
                    <Text style={styles.labelButton}>Agregar Cita</Text>
                </TouchableHighlight>
            </ScrollView> 
        </>
    )
}

const styles = StyleSheet.create({
    
    input:{
        marginVertical:10,
        borderBottomRightRadius:10,
        borderBottomColor:'#6494e6',
        borderRightColor:'#6494e6',
        borderBottomWidth:2,
        borderRightWidth:2,
        marginHorizontal: 5,
        
    },
 
    input2:{
        marginVertical:10,
        borderBottomRightRadius:10,
        borderBottomColor:'#6494e6',
        borderRightColor:'#6494e6',
        borderBottomWidth:2,
        borderRightWidth:2,
        marginHorizontal: 5,
        width:145,
    },
 
    form:{
        backgroundColor:'#fff',
        marginHorizontal: 15,
        borderRadius:10,
        marginBottom:10,
        padding:10,
        
    },
    title:{
        textAlign:'center',
        fontSize:20,
        
    },
    label:{
        
        marginRight:5
    },
    buttonAdd:{
        backgroundColor:'#4286f4',
        padding: 10,
        borderRadius:5,
        marginTop:10,
        marginHorizontal:5
    },  
    
    labelButton:{
        textAlign:"center",
        color:'#fff'
    }
})
