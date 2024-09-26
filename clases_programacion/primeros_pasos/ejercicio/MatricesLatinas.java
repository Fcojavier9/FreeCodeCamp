

public class MatricesLatinas {

    public static void main(String[] args) {
        final int n = 8;
        final int[][] latinSquare = makeLatinSquare(n);
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                System.out.printf("%2d ", latinSquare[i][j]);
            }
            System.out.println();
        }
    }

    public static int[][] makeLatinSquare(int n) {
        final int[][] latinSquare = new int[n][n];
        
        // Put your code here
        for(int fila = 0; fila < n; fila++ ){
          for(int columna = 0; columna < n; columna++){
            latinSquare[fila][columna] = (fila + columna) % n + 1;
          }
        }  
      
        return latinSquare;
    }
}