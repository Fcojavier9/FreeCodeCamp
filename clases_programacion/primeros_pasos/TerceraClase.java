package primeros_pasos;

import java.util.Scanner;

public class TerceraClase {
    public static void main(String[] args) {
        final int PORCENTAJE = 10;

        Scanner scanner = new Scanner(System.in);
        System.out.println("Introduce un prestamo para calcular los pagos: ");
        int amount = scanner.nextInt();

        /*
         * Le pides un préstamo a un amigo y necesitas calcular cuánto le deberás
         * después de 3 meses.
         * Vas a devolverle el 10% de la cantidad restante del préstamo cada mes.
         * Crea un programa que tome la cantidad del préstamo como entrada,
         * calcule y genere la cantidad restante después de 3 meses.
        */
        for (int i = 1; i < 4; i++) {
            int pago = amount * PORCENTAJE / 100;
            System.out.println("He pagado este mes: " + pago + "€");
            amount -= pago;
            System.out.println("Mes " + i + ", restante: " + amount + "€");
        }

        scanner.close();
    }

}
