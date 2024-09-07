package palindromo;
/**
 * palindromo
 */
public class Palindromo {

    public static String esPalindromo(String palabra) {
        palabra = palabra
                .toLowerCase()
                .replaceAll(" ", "")
                .replaceAll("[á]", "a")
                .replaceAll("[é]", "e")
                .replaceAll("[í]", "i")
                .replaceAll("[ó]", "o")
                .replaceAll("[ú]", "u")
                .replaceAll("[ñ]", "n");

        String palabraInvertida = "";
        for (int i = palabra.length() - 1; i >= 0; i--) {
            palabraInvertida += palabra.charAt(i);
        }

        return palabra.equals(palabraInvertida) ? "palindromo" : "No palindromo";
    }
}