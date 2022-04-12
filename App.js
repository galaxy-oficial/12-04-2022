
import { StyleSheet, Text, View, FlatList } from "react-native";
import Botao from "./src/components/botao";
import Cabecalho from "./src/components/cabecalho";
import Jogos from "./src/components/jogos";
import DadosJogos from "./dados/dadosJogos"; 
import Titulo from "./src/components/titulo";
import Lancamentos from "./src/components/lancamentos";
import DadosLancamentos from "./dados/dadosLancamentos";

export default function App() {
  return (
    <View style={{backgroundColor:'#D3D3D3', flex:1}}>
      <Cabecalho></Cabecalho>
      <Botao
        Logo="game-controller"
        texto="Jogos"
        cor="purple"
        Logo2="book-outline"
        texto2="Livros"
        cor2="turquoise"
        />
        <Botao
        Logo= "videocam"
        texto= "Filmes"
        cor= "blue"
        Logo2= "ios-musical-notes"
        texto2= "Música"
        cor2= "dodgerblue"
        />
        <Botao
        Logo= "logo-android"
        texto= "Apps"
        cor= "slateblue"
        Logo2= "bookmark"
        texto2= "Favoritos"
        cor2= "darkblue"
      />
      <View>
          <Titulo
            titulo =  "Jogos"
          />
        </View>
         <View>
          <FlatList
          horizontal={true}
          data= {DadosJogos}
          keyExtractor = {(item) => item.id}
          renderItem = { ({ item }) => (
          
          <Jogos
          titulo ={item.nome}
          imagem = {item.imagem}
          valor = {item.valor}
          />
          
          )}
        />
        <View>
          <Titulo
            titulo =  "Próximos Lançamentos"
          />
        </View>

        </View>
        <View>
          <FlatList
          horizontal={true}
          data= {DadosLancamentos}
          keyExtractor = {(item) => item.id}
          renderItem = { ({ item }) => (
          
          <Lancamentos
          titulo ={item.nome}
          imagem = {item.imagem}
          valor = {item.valor}
          />
          
          )}
        />
      
        </View>

     </View>
  );
}
