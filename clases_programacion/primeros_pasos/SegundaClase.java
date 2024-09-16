package primeros_pasos;

import java.util.Scanner;

public class SegundaClase {
    public static void main(String[] args) {
        // Instanciamos objeto escaner
        Scanner scanner = new Scanner(System.in);

        // pedimos por consola los parametros y los tratamos
        System.out.println("Introduzca un tamaño: ");
        int size = scanner.nextInt();

        System.out.println("Introduzca un borde de escalera: ");
        int borde = scanner.nextInt();

        System.out.println("Introduzca un simbolo: ");
        String symbol = scanner.next();

        // cerramos el objeto escaner, para que no se quede pensando
        scanner.close();

        System.out.println("----------SEPARADOR----------");

        // llamo a la funcion y le paso los parametros
        // recogidos por Scanner
        piramide(size, borde, symbol);
    }

    // Ejercicio -> imprimir una piramide de asteriscos
    public static void piramide(int size, int escalera, String simbolo) {
        // creamos variables que vamos a necesitar
        String espacio = " ";

        // para calcular el espacio lateral izquierdo desde la primera fila,
        // gradualmente hasta la ultima
        int bordes = size - 1;

        // bucle for ->
        //  declaramos iterador; mientras se cumpla condicion seguimos en bucle; incrementamos o decrementamos
        for (int i = 0; i < size; i++, bordes--) {

            // declaramos variables locales del for
            String tabulador = espacio.repeat(bordes);
            int rep = 1 + (escalera * i);
            System.out.println(tabulador + simbolo.repeat(rep));
        }

    }
}