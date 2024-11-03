package primeros_pasos.poo;

public class Persona {
    // Propiedades / Atributos
    public static final String PLANETA = "Tierra";
    private String nombre;
    public int edad;
    public String dni;
    public static String nacionalidad = "Española";

    // constructor
    public Persona(String name, int age, String dni) {
        this.nombre = name;
        this.edad = age;
        this.dni = dni;
    }

    public Persona(String name, int age) {
        this.nombre = name;
        this.edad = age;
        this.dni = "00000000A";
    }

    // getters y setters
    public String getNombre() {
        return this.nombre;
    }

    public void setNombre(String name) {
        this.nombre = name;
    }

    // metodos
    public String toString(){
        return "Nombre: " + this.nombre + "\nEdad: " + this.edad + "\nDNI: " + this.dni + "\nNacionalidad: " + nacionalidad;
    }

    public void mostrarDatos() {
        System.out.println("Nombre: " + this.nombre);
        System.out.println("Edad: " + this.edad);
        System.out.println("DNI: " + this.dni);
        System.out.println("Nacionalidad: " + nacionalidad);
    }

    public static void holaMundo(){
        System.out.println("Hola Mundo");
    }
}
