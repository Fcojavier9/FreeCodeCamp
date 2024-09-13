package palindromo;
public class Main {
    public static void main(String[] args) {
        String frase1 = "Anita lava la tina";
        String frase2 = "A mamá Roma le aviva el amor a papá y a papá Roma le aviva el amor a mamá";
        String frase3 = "Voy al cine";
        
        String palindromo1 = Palindromo.esPalindromo(frase1);
        String palindromo2 = Palindromo.esPalindromo(frase2);
        String palindromo3 = Palindromo.esPalindromo(frase3);

        System.out.println("El resultado de la cadena " + frase1 + " es: " + palindromo1);
        System.out.println("El resultado de la cadena " + frase2 + " es: " + palindromo2);
        System.out.println("El resultado de la cadena " + frase3 + " es: " + palindromo3);
    }
}
