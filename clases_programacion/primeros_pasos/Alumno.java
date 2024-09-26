package primeros_pasos;

import java.util.HashMap;

public class Alumno {
    // Atributos
    // caracter objeto
    private String nombre;
    private int edad;
    private String curso;
    private String ciclo;
    private int nota;
    // variable clase, o de caracter de clase, comun a todos los objetos
    public static int numAlumnos = 1;
    public final static String centro = "IES Los Sauces";


    // Constructor
    public Alumno(String nombre, int edad, String curso, String ciclo, int nota) {
        this.nombre = nombre;
        this.edad = edad;
        this.curso = curso;
        this.ciclo = ciclo;
        this.nota = nota;
    }

    public Alumno(String nombre, int edad, int nota) {
        this.nombre = nombre;
        this.edad = edad;
        this.curso = "";
        this.ciclo = "";
        this.nota = nota;
    }

    public Alumno() {
        this.nombre = "Anonimo";
        this.edad = 0 + numAlumnos;
        this.curso = "1º";
        this.ciclo = "DAM";
        this.nota = 0;
    }

    // Getters
    public String getNombre() {
        return nombre;
    }
    public int getEdad() {
        return edad;
    }
    public String getCurso() {
        return curso;
    }
    public String getCiclo() {
        return ciclo;
    }
    public int getNota() {
        return nota;
    }

    // Setters
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
    public void setEdad(int edad) {
        this.edad = edad;
    }
    public void setCurso(String curso) {
        this.curso = curso;
    }
    public void setCiclo(String ciclo) {
        this.ciclo = ciclo;
    }
    public void setNota(int nota) {
        this.nota = nota;
    }

    // Metodo toString
    @Override
    public String toString() {
        return "Alumno [nombre=" + nombre + ", edad=" + edad + ", curso=" + curso + ", ciclo=" + ciclo + ", nota=" + nota + "]";
    }

    // Metodo equals
    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null)
            return false;
        if (getClass() != obj.getClass())
            return false;
        Alumno other = (Alumno) obj;
        if (ciclo == null) {
            if (other.ciclo != null)
                return false;
        } else if (!ciclo.equals(other.ciclo))
            return false;
        if (curso == null) {
            if (other.curso != null)
                return false;
        } else if (!curso.equals(other.curso))
            return false;
        if (edad != other.edad)
            return false;
        if (nombre == null) {
            if (other.nombre != null)
                return false;
        } else if (!nombre.equals(other.nombre))
            return false;
        if (nota != other.nota){
            return false; 
        }
        return true;
    }

    // Metodo hashCode
    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((ciclo == null) ? 0 : ciclo.hashCode());
        result = prime * result + ((curso == null) ? 0 : curso.hashCode());
        result = prime * result + edad;
        result = prime * result + ((nombre == null) ? 0 : nombre.hashCode());
        result = prime * result + nota;
        return result;
    }

    // Metodos personalizados
    public static void addNumAlumnos(){
        numAlumnos++;
    }

    public void addNota(int nota){
        this.nota += nota;
    }

    public static HashMap<Integer, Alumno> crearCurso(){
        HashMap<Integer, Alumno> curso = new HashMap<Integer, Alumno>();
        for(int i = numAlumnos ; i < 10; i++){
            curso.put(i, new Alumno());
            numAlumnos = i;
        }
        return curso;
    }

}
