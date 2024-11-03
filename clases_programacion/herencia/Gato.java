package herencia;

public class Gato extends Animal {
    // ATRIBUTOS
    private String dueno;
    private String formaOjos;
    private static final String TIPO = "Felino";


    // CONSTRUCTORES
    public Gato() {
        super();
        this.dueno = "";
        this.formaOjos = "";
    }

    public Gato(String nombre, int edad, String raza, String color, String sexo, String dueno, String formaOjos) {
        super(nombre, edad, raza, color, sexo);
        this.dueno = dueno;
        this.formaOjos = formaOjos;
    }

    // GETTERS Y SETTERS
    public String getDueno() {
        return dueno;
    }

    public String getFormaOjos() {
        return formaOjos;
    }

    public static String getTipo() {
        return TIPO;
    }

    public void setDueno(String dueno) {
        this.dueno = dueno;
    }

    public void setFormaOjos(String formaOjos) {
        this.formaOjos = formaOjos;
    }

    // MÉTODOS DE LA CLASE OBJECT
        @Override
        public String toString() {
            return super.toString() + " y sus caracteristicas de gato son [dueño=" + dueno + ", formaOjos=" + formaOjos + "]";
        }
        

        @Override
        public int hashCode() {
            final int prime = 31;
            int result = 1;
            result = prime * result + ((dueno == null) ? 0 : dueno.hashCode());
            result = prime * result + ((formaOjos == null) ? 0 : formaOjos.hashCode());
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
            Gato other = (Gato) obj;
            if (dueno == null) {
                if (other.dueno != null)
                    return false;
            } else if (!dueno.equals(other.dueno))
                return false;
            if (formaOjos == null) {
                if (other.formaOjos != null)
                    return false;
            } else if (!formaOjos.equals(other.formaOjos))
                return false;
            return true;
        }

    // MÉTODOS
    @Override
    public void sonido() {
        System.out.println("Miau");
    }

}
