package primeros_pasos;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {

        // declarar el variable entero, tipo nombre = valor;
        int num1 = 2;
        int num2 = 5;
        boolean a = true;
        boolean b = false;
        String cadena = "hola";
        char caracter = 'a';
        char caracter2 = 'z';
        boolean res1 = cadena.contains(Character.toString(caracter));
        boolean res2 = cadena.contains(Character.toString(caracter2));

        // instanciamos un nuevo objeto scanner
        Scanner scanner = new Scanner(System.in);

        System.out.println("Introduce un número: ");
        // leemos el numero introducido por el usuario
        int cadena3 = scanner.nextInt();
        System.out.println("El numero introducido es: " + cadena3);

        System.out.println("Introduce un nombre: ");
        // leemos la cadena introducida por el usuario
        String cadena4 = scanner.next();
        System.out.println("Buenos dias " + cadena4);
        
        // cerrarmos el scanner para liberar memoria
        scanner.close();

        if (!(!(res2 != res1) && (a || b) || (num1 > num2) && (!(num1 == num2) || true) && !(5>=num2))) {
            System.out.println("entramos en el if");
        } else if(true) {
            System.out.println("entramos en el else");
        }
        
    }
}
