package anagrama;

import java.util.Arrays;

public class Anagrama {

    public static void main(String[] args) {
        String palabra1 = "Ana";
        String palabra2 = "Roma";
        String palabra3 = "Amor";

        String anagrama1 = Anagrama.esAnagrama(palabra1, palabra2);
        String anagrama2 = Anagrama.esAnagrama(palabra2, palabra3);
        String anagrama3 = Anagrama.esAnagrama(palabra1, palabra3);

        System.out.println("El resultado de la palabra " + palabra1 + " y de la palabra " + palabra2 + " es: " + anagrama1);
        System.out.println("El resultado de la palabra " + palabra2 + " y de la palabra " + palabra3 + " es: " + anagrama2);
        System.out.println("El resultado de la palabra " + palabra1 + " y de la palabra " + palabra3 + " es: " + anagrama3);
    }
    
    public static char[] normalizarPalabra(String palabra) {
        char[] array = palabra
                .toLowerCase()
                .replaceAll(" ", "")
                .replaceAll("[á]", "a")
                .replaceAll("[é]", "e")
                .replaceAll("[í]", "i")
                .replaceAll("[ó]", "o")
                .replaceAll("[ú]", "u")
                .replaceAll("[ñ]", "n")
                .toCharArray();
        
        Arrays.sort(array);
        return array;
    }	

    public static String esAnagrama(String pal1, String pal2) {

        char[] arr1 = normalizarPalabra(pal1);

        char[] arr2 = normalizarPalabra(pal2);

        if (arr1.length != arr2.length) {
            return "No es anagrama";
        }

        for (int i = 0; i < arr1.length; i++) {
            if (arr1[i] != arr2[i]) {
                return "No es anagrama";
            }
        }

        return "Es anagrama";
    }

}
