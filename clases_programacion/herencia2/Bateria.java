package herencia2;

public class Bateria {
    // propiedades
    private double capacidad;
    private String tipo;
    private String marca;
    private String modelo;
    private double voltaje;
    private double amperaje;
    private double precio;

    // constructores
    public Bateria() {
        this.capacidad = 0;
        this.tipo = "";
        this.marca = "";
        this.modelo = "";
        this.voltaje = 0;
        this.amperaje = 0;
        this.precio = 0;
    }

    public Bateria(double capacidad, String tipo, String marca, String modelo, double voltaje, double amperaje, double precio) {
        this.capacidad = capacidad;
        this.tipo = tipo;
        this.marca = marca;
        this.modelo = modelo;
        this.voltaje = voltaje;
        this.amperaje = amperaje;
        this.precio = precio;
    }

    // getters y setters

    public double getCapacidad() {
        return capacidad;
    }

    public void setCapacidad(double capacidad) {
        this.capacidad = capacidad;
    }

    public String getTipo() {
        return tipo;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }

    public String getMarca() {
        return marca;
    }

    public void setMarca(String marca) {
        this.marca = marca;
    }

    public String getModelo() {
        return modelo;
    }

    public void setModelo(String modelo) {
        this.modelo = modelo;
    }

    public double getVoltaje() {
        return voltaje;
    }

    public void setVoltaje(double voltaje) {
        this.voltaje = voltaje;
    }

    public double getAmperaje() {
        return amperaje;
    }

    public void setAmperaje(double amperaje) {
        this.amperaje = amperaje;
    }

    public double getPrecio() {
        return precio;
    }

    public void setPrecio(double precio) {
        this.precio = precio;
    }

    // metodos
    @Override
    public String toString() {
        return "Bateria [amperaje=" + amperaje + ", capacidad=" + capacidad + ", marca=" + marca + ", modelo=" + modelo
                + ", precio=" + precio + ", tipo=" + tipo + ", voltaje=" + voltaje + "]";
    }

    public void estado() {
        System.out.println("estado bateria");
    }

    public void cargar() {
        System.out.println("cargando bateria");
    }

    public void descargar() {
        System.out.println("descargando bateria");
    }

    public void marcademibateria(){
        
    }


}
