import React from "react";
import { View, TouchableOpacity, StyleSheet, Text, Image} from "react-native";

export default function Lançamentos ({ titulo, valor, imagem}){
    return(
        <TouchableOpacity style={estilo.containerLancamentos}>
            <Image
                style={estilo.images}
                source={require(`../../imagens/${imagem}`)}
                />
                <Text style={estilo.titulo}>{titulo}</Text>
                <Text style={estilo.valor}>{valor}</Text>
        </TouchableOpacity>

    );
}

const estilo = StyleSheet.create({
    containerLancamentos: {
        borderRadius: 10,
        marginTop: 2,
        padding: 10,
        margin: 5,
        justifyContent: "space-between",
        width: 320,
        height: 280,
        marginLeft: 5,
        marginHorizontal:10,

    },
    titulo: {
        color: "black",
        fontSize: 13,
        fontWeight: "bold", 
        marginTop: 0,
        textAlign: "center",
    },
    valor: {
        color: "green",
        fontSize: 13,
        marginLeft: 29,
        marginTop: 1,
        fontWeight: "bold",
        textAlign: "right",
    },
    images: {
        width: "100%",
        height: 210,
        borderRadius: 10,
    },

});
