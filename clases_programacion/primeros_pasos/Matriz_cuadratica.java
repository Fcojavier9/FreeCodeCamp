package primeros_pasos;

public class Matriz_cuadratica {
    public static void main(String[] args) {
        int[][] biArray = createBox(7, 8);
    }

    public static int[][] createBox(int width, int length)
    {
      // Put your code here.
      int[][] biArray = new int[length][width];
      
      // comprobar si es par o impar
      int capas = Math.min(width, length) / 2 + ( Math.min(width, length) % 2 != 0 ?  1 : 0);
      
      // rellenar el biArray
      for(int capa = 0; capa < capas; capa++){
        int valor = capa + 1;
        
        // Ir rellenando en cada iteracion
        // la fila inferior y superior que van quedando
        for(int columna = capa; columna < width - capa; columna++){
          biArray[capa][columna] = valor; // Fila superior
          biArray[length - capa - 1][columna] = valor; // Fila inferior
        }
        
        for(int fila = capa; fila < width - capa; fila++){
          biArray[fila][capa] = valor; // Columna izquierda
          biArray[fila][width - capa - 1] = valor; // Columna derecha
        }
        
        
      }
      
      for(int[] array : biArray){
        System.out.print("[");
        for(int valor : array){
          System.out.print(valor+",");
        }
        System.out.println("]");
      }
      
      return biArray;
    }
}
