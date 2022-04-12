import React from "react";
import { View, TouchableOpacity, StyleSheet, Text, Image} from "react-native";

export default function Titulo ({ titulo }){
    return(
        <TouchableOpacity style={estilo.containerTitulo}>    
                <Text style={estilo.titulo}>{titulo}</Text>
        </TouchableOpacity>

    );
}

const estilo = StyleSheet.create({
    containerLancamentos: {
        borderRadius: 10,
        marginTop: 8,
        padding: 10,
        margin: 2,
        justifyContent: "space-between",
        height: 280,
        marginLeft: 5,
        marginHorizontal:10,

    },
    titulo: {
        color: "black",
        fontSize: 18,
        margin: 10,
        textAlign: "left",
    }

});
