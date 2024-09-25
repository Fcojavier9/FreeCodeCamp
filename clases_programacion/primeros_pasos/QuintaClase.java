package primeros_pasos;

import java.util.Scanner;

public class QuintaClase {
    public static void main(String[] args) {
        // Recibes una lista de lados de cuadrados y imprimes su Area
        Scanner scanner = new Scanner(System.in);
        System.out.println("¿Cuantos numeros quieres que tenga el array? ");
        int length = scanner.nextInt();

        int numeros[] = new int[length];
        for (int x = 0; x < numeros.length; x++) {
            System.out.println("Introduce un numero: ");
            
            //TRY-CATCH
            try {
                // introducir valores
                int valor = scanner.nextInt();
                numeros[x] = valor;

                if(valor == 0){
                    throw new ArithmeticException();
                }

            } catch (ArithmeticException e) {
                System.out.println("No se puede introducir el valor 0");
                break;
            } catch (Exception e){
                System.out.println("Introduce un numero valido");
                break;
            }
        }

        for (int numero : numeros) {
            System.out.println(numero);
        }

            //TERNARIO: Condicion ? true : false; 
        System.out.println((numeros.length >= 4) 
            ? "El array tiene 4 o mas" 
            : "El array es menor que 4");

        scanner.close();
    }

    
}

