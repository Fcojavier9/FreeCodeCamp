package halloween;

import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        int[] pociones = {2, 7, 12, 7, 10 , 55};
        int objetivo = 67;
        int objetivo2 = 14;

        int[] pocionesUsadas = crearPocionMagica(pociones, objetivo);
        int[] pocionesUsadas2 = crearPocionMagica(pociones, objetivo2);

        imprimirPociones(pocionesUsadas);
        imprimirPociones(pocionesUsadas2);
    }

    public static int[] crearPocionMagica(int[] pociones, int objetivo){
        ArrayList<Integer> pocionesUsadas = new ArrayList<Integer>();

        for(int i = 0; i < pociones.length; i++){
            int pocionActual = pociones[i];

            for(int j = 0; j < pocionesUsadas.size(); j++){
                if(pocionesUsadas.get(j) + pocionActual == objetivo){
                    return new int[]{j, i};
                }
            }

            pocionesUsadas.add(pocionActual);
        }

        return null;
    }

    public static void imprimirPociones(int[] pociones){
        if(pociones != null)
            System.out.println("Pociones usadas: " + pociones[0] + " y " + pociones[1]);
        else 
            System.out.println("No se encontraron pociones que sumen el objetivo");
    }
}
