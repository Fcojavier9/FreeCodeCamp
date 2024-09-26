package primeros_pasos;

import java.util.*;

public class ArrayList_Clase {
    public static void main(String[] args) {
        // creamos array list
        ArrayList<String> list = new ArrayList<String>();
        ArrayList<String> listAdd = new ArrayList<String>();     

        // variable para comprobar si se ha eliminado
        boolean isRemoved = false;

        System.out.println("Contiene Fran?: " + listAdd.contains("Fran"));

        // Añadimos elementos a ambos array list
        list.add("Hello");
        list.add("World");
        list.add("!");

        listAdd.add("Fran");
        listAdd.add("Eres un maquina");
        
        // si contiene world el ArrayList list, lo eliminamos
        if(list.contains("World")){
            // .remove devuelve true si se ha eliminado o false si no se ha eliminado
            isRemoved = list.remove("World");
        }

        System.out.println("Is removed: " + isRemoved);
        System.out.println("Tamaño: " + list.size());
        System.out.println("¿Contiene?: " + list.contains("Hello"));
                                                                // PARAMETRO
        System.out.println("Posicion del PARAMETRO: " + list.indexOf("World"));
        System.out.println("Ultimo posicion del PARAMETRO: " + list.lastIndexOf("World"));
        System.out.println("¿Esta vacio?: " + list.isEmpty());
        // Y MUCHAS MAS ...

        // Añadimos todos los elementos de listAdd a list
        list.addAll(listAdd);
        
        // Recorremos el ArrayList list con un FOR EACH
        for (String element : list) {
            System.out.println(element);
        }
    }
}