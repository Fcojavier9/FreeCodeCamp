package herencia2;

import java.util.Objects;

public class Ordenador {

    // ATRIBUTOS
    private double precio;
    private String marca;
    private String modelo;
    private String hardware;
    private String perifericos;
    private static final String FORMA_COMPRA = "PayPal";

    // CONTRUCTORES
    public Ordenador() {
        this.precio = 0;
        this.hardware = "";
        this.marca = "";
        this.modelo = "";
        this.perifericos = "";
    }

    public Ordenador(double precio, String tipo, String hardware) {
        this.precio = precio;
        this.hardware = hardware;
        this.marca = "";
        this.modelo = "";
        this.perifericos = "";

    }

    public Ordenador(double precio, String modelo, String tipo, String hardware) {
        this.precio = precio;
        this.hardware = hardware;
        this.modelo = modelo;
        this.perifericos = "";
        this.marca = "";

    }

    public Ordenador(double precio, String marca, String tipo, String hardware, String perifericos) {
        this.precio = precio;
        this.marca = marca;
        this.hardware = hardware;
        this.perifericos = perifericos;
        this.modelo = "";

    }
    // GETTERS Y SETTERS

    public double getPrecio() {
        return precio;
    }

    public void setPrecio(double precio) {
        this.precio = precio;
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

    public String getHardware() {
        return hardware;
    }

    public void setHardware(String hardware) {
        this.hardware = hardware;
    }

    public String getPerifericos() {
        return perifericos;
    }

    public void setPerifericos(String perifericos) {
        this.perifericos = perifericos;
    }

    public String getFormaCompra() {
        return FORMA_COMPRA;
    }

    @Override
    public String toString() {
        return "Ordenadores [precio=" + precio + ", marca=" + marca + ", modelo=" + modelo
                + ", hardware=" + hardware + ", perifericos=" + perifericos + ", formaCompra=" + FORMA_COMPRA + "]";
    }

    @Override
    public int hashCode() {
        return Objects.hash(FORMA_COMPRA, hardware, marca, modelo, perifericos, precio);
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null)
            return false;
        if (getClass() != obj.getClass())
            return false;
        Ordenador other = (Ordenador) obj;
        return Objects.equals(hardware, other.hardware)
                && Objects.equals(marca, other.marca) && Objects.equals(modelo, other.modelo)
                && Objects.equals(perifericos, other.perifericos) && precio == other.precio;
    }
}