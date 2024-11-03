package herencia;

import java.util.Arrays;

public class Perro extends Animal {
    // ATRIBUTOS
    private String dueno;
    private String[] habilidades;
    private static final String TIPO = "Canino";

    // CONSTRUCTORES
    public Perro() {
        super();
        this.dueno = "";
        this.habilidades = new String[0];
    }

    public Perro(String nombre, int edad, String raza, String color, String sexo, String dueno, String[] habilidades) {
        super(nombre, edad, raza, color, sexo);
        this.dueno = dueno;
        this.habilidades = habilidades;
    }

    // GETTERS Y SETTERS
    public String getDueno() {
        return dueno;
    }

    public void setDueno(String dueno) {
        this.dueno = dueno;
    }

    public String[] getHabilidades() {
        return habilidades;
    }

    public void setHabilidades(String[] habilidades) {
        this.habilidades = habilidades;
    }

    public static String getTipo() {
        return TIPO;
    }

    // MÉTODOS DE LA CLASE OBJECT
    @Override
    public String toString() {
        return super.toString() + " y sus caracteristicas de perro son [dueno=" + dueno + ", habilidades=" + Arrays.toString(habilidades) + "]";
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((dueno == null) ? 0 : dueno.hashCode());
        result = prime * result + ((habilidades == null) ? 0 : habilidades.hashCode());
        return result;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (!super.equals(obj))
            return false;
        if (getClass() != obj.getClass())
            return false;
        Perro other = (Perro) obj;
        if (dueno == null) {
            if (other.dueno != null)
                return false;
        } else if (!dueno.equals(other.dueno))
            return false;
        if (habilidades == null) {
            if (other.habilidades != null)
                return false;
        } else if (!habilidades.equals(other.habilidades))
            return false;
        return true;
    }

    // MÉTODOS PROPIOS DE LA CLASE
    @Override
    public void sonido() {
        System.out.println("Guau");
    }
    
}
