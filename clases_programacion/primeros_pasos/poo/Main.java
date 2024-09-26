package primeros_pasos.poo;

public class Main {
    public static void main(String[] args) {
        int age = 25;
        Persona fran = new Persona("Francisco", age, "12345678A");
        Persona ana = new Persona("Ana", 30, "87654321B");
        Persona hector = new Persona("Hector", 35);


        Persona.nacionalidad = "Belga";

        fran.mostrarDatos();
        ana.mostrarDatos();
        hector.mostrarDatos();


    }
}
