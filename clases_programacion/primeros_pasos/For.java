package primeros_pasos;

public class For {
    public static void main(String[] args) {
        // GET -> coger los valores de un array
        // declaro array ya con valores, en este caso es de [ [20,32,56], [3,5,7,78] ]
        int[][] biArray = {
                { 20, 32, 56 },
                { 3, 5, 7, 78 },
        };

        // bucle anidado para recorrer el array bidimensional
        // iterador de la primera dimension
        for (int i = 0; i < biArray.length; i++) {
            System.out.println("separador posicion " + i);
            // iterador de la segunda dimension
            for (int j = 0; j < biArray[i].length; j++) {
                // imprimo el valor actual de la posicion i,j con los valores actuales del
                // iterador
                System.out.println(biArray[i][j]);
            }
        }

        // SET -> rellenar un array vacio
        int[][] arrayVacio = new int[2][3];

        // bucle anidado para rellenar el array vacio
        int aux = 0;
        for (int i = 0; i < arrayVacio.length; i++) {
            System.out.println("separador posicion " + i);
            // iterador de la segunda dimension
            for (int j = 0; j < arrayVacio[i].length; j++, aux++) {
                // imprimo el valor actual de la posicion i,j con los valores actuales del
                // iterador
                arrayVacio[i][j] = aux;
                System.out.println(arrayVacio[i][j]);
            }
        }

        for (int i = 0; i < 10; i++) {
            System.out.println("Hola Fran");
        }
    }
}
