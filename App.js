import React, {Component} from 'react';
import {StyleSheet, View, Text, TextInput, AsyncStorage, Alert, Picker} from 'react-native';
import { LPButton } from './src/component/LPButton';

export default class App extends Component{

    constructor(props) {
        super(props);
        this.state = {
            nome: '',
            cidade: ''
        }
        this.cadastrar = this.cadastrar.bind(this);
    }


    cadastrar = async () => {
        let state = this.state;
        let nome = '';
        await AsyncStorage.getItem('nome').then((value) => {
            nome = value;
        });
        let cidade = '';
        await AsyncStorage.getItem('cidade').then((value) => {
            cidade = value;
        });
        
        if (state.nome.length < 5) {
          Alert.alert('Cadastrar', 'Nome deve possuir mais de 5 caracteres!');
        }
        
        if (state.cidade == '') {
          Alert.alert('Cadastrar', 'Informe a cidade!');
        }
        
    }

  render(){
    return(
      <View style={styles.fundo}>
        {/* header */}
        <View style={styles.cabecalho}>
            <Text style={styles.fonte}>Cabeçalho</Text>
        </View>

        {/* body */}
        <View style={styles.corpo}>
           <TextInput style={styles.fonte} placeholder='Nome' onChangeText={(value) => this.setState({ nome: value })} />
           <Picker
              selectedValue={this.state.cidade}
              style={{height: 50, width: 200}}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({cidade: itemValue})
              }>
              <Picker.Item label="" value="" />
              <Picker.Item label="Guaracity" value="gba" />
              <Picker.Item label="SamiCity" value="smo" />
              <Picker.Item label="Descancity" value="dsc" />
              <Picker.Item label="Bel Mont" value="bel" />
            </Picker>
            
           <LPButton onPress={this.cadastrar} titulo="Cadastrar"/>
        </View>

        {/* footer */}
        <View style={styles.rodape}>
          <Text style={styles.fonte}>Rodapé</Text>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
    fundo: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
    },
    cabecalho: {
        backgroundColor: 'skyblue',
        alignItems: 'center'
    },
    corpo: {
        backgroundColor: 'powderblue',
        flex: 1,
        alignItems: 'center'
    },
    rodape: {
        backgroundColor: 'skyblue',
        alignItems: 'center'
    },
    fonte: {
        fontSize:20
    }
});
