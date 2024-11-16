package herencia;

public abstract class Animal implements IMascota {
    // ATRIBUTOS
    private String nombre;
    private int edad;
    private String raza;
    private String color;
    private String sexo;

    // CONSTRUCTORES
    public Animal() {
        this.nombre = "";
        this.edad = 0;
        this.raza = "";
        this.color = "";
        this.sexo = "";
    }

    public Animal(String nombre, int edad, String raza, String color, String sexo) {
        this.nombre = nombre;
        this.edad = edad;
        this.raza = raza;
        this.color = color;
        this.sexo = sexo;
    }

    // GETTERS Y SETTERS
    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public int getEdad() {
        return edad;
    }

    public void setEdad(int edad) {
        this.edad = edad;
    }

    public String getRaza() {
        return raza;
    }

    public void setRaza(String raza) {
        this.raza = raza;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public String getSexo() {
        return sexo;
    }

    public void setSexo(String sexo) {
        this.sexo = sexo;
    }

    // MÉTODOS DE LA CLASE Object
    @Override
    public String toString() {
        return "Animal [nombre=" + nombre + ", edad=" + edad + ", raza=" + raza + ", color=" + color + ", sexo=" + sexo
                + "]";
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((nombre == null) ? 0 : nombre.hashCode());
        result = prime * result + edad;
        result = prime * result + ((raza == null) ? 0 : raza.hashCode());
        result = prime * result + ((color == null) ? 0 : color.hashCode());
        result = prime * result + ((sexo == null) ? 0 : sexo.hashCode());
        return result;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null)
            return false;
        if (getClass() != obj.getClass())
            return false;
        Animal other = (Animal) obj;
        if (nombre == null) {
            if (other.nombre != null)
                return false;
        } else if (!nombre.equals(other.nombre))
            return false;
        if (edad != other.edad)
            return false;
        if (raza == null) {
            if (other.raza != null)
                return false;
        } else if (!raza.equals(other.raza))
            return false;
        if (color == null) {
            if (other.color != null)
                return false;
        } else if (!color.equals(other.color))
            return false;
        if (sexo == null) {
            if (other.sexo != null)
                return false;
        } else if (!sexo.equals(other.sexo))
            return false;
        return true;
    }
    
    // MÉTODOS DE LA CLASE Animal
    public abstract void sonido();

    public void comer() {
        System.out.println("El animal " + nombre + " está comiendo");
    }
    
}
