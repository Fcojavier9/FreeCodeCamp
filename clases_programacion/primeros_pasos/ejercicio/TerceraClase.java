public class TerceraClase {
    public static void main(String[] args) {

        int[][] biArray = crearBiArray();
// Creo un array para almacenar las sumas de cada columna

        int [] sumas = new int[biArray[0].length];

        //bucle para recorrer la primera dimension
        //itero en primera dimension
        int fila = 0;
        for(int[] elemento : biArray){
            System.out.println("Posiciones dimension" + fila );

            //itero en segunda dimension
            for(int numero : elemento) {

            // Sumar el valor de cada posición en la misma columna
                sumas[fila] += numero;
            }

            fila++;
        }
        
        //TRY CATCH
        try {
            // Imprimir las sumas de cada columna
            System.out.println("Suma de cada posicion");
            for(int iterador : sumas) {
                //Creo un IF para decir qe si la suma no es mayor a 50 salte la excepcion
                if(iterador <= 50 ) {
                    throw new Exception();
                }
                System.out.println(iterador);
            }
            
        } catch(Exception e) {
            System.out.println("Pruebe otra combinacion de sumas");
        }
    }

    public static int[][] crearBiArray(){
        int[][] biArray = {
            {3,82,2},
            {2,56,5},
            {9,23,4}
        };
        
        return biArray;

    }
}