package primeros_pasos;

import java.util.Scanner;

public class CuartaClase {
    public static void main(String[] args) {
        int[] numeros = { 2, 3, 5, 7, 10, 9, 7 };
        String[] palabras = { "Hola", "Fran", "Como", "Estas", "?"};

        System.out.println("FOR EACH INT");
        for (int numero : numeros) {
            System.out.println(numero);
        }

        System.out.println("FOR EACH STRING");
        for (String palabra : palabras) {
            System.out.println(palabra);
        }

        // Recibes una lista de lados de cuadrados y imprimes su Area
        Scanner scanner = new Scanner(System.in);
        System.out.println("Introduce numero de cuadrados: ");
        int length = scanner.nextInt();

        // asignamos una longitud al array
        int[] sides = new int[length];

        // rellenar los elementos del array
        for (int i = 0; i < length; i++) {
            System.out.println("Introduce el lado: ");
            sides[i] = scanner.nextInt();
        }

        // imprimir el array
        System.out.print("[ ");

        for (int side : sides) {
            System.out.print(side + ", ");
        }
        System.out.println(" ]");

        /// tu código va aquí, Area = lado * lado
        for (int side : sides) {
            int area = side * side;
            System.out.println("El area es: " + area);
        }

        int numeros1[] = new int[5];
        for (int x = 0; x < 5; x++) {
            numeros1[x] = x;
        }

        for(int i = 0 ; i < numeros1.length; i++){
            if( numeros1[i] % 2 == 0){
                System.out.println(numeros1[i]);
            }
        }

        for(int numero : numeros1){
            if( numero % 2 == 0){
                System.out.println(numero);
            }
        }
        scanner.close();
    }
}
