package herencia;

public class Main {
    public static void main(String[] args) {

        Animal garfield = new Gato("Garfield", 5, "Persa", "Naranja", "Macho", "Jon Arbuckle", "Redonda");
        System.out.println("Grafield: " + garfield);

        Animal snoopy = new Perro("Snoopy", 3, "Beagle", "Multi-color", "Macho", "Charlie Brown", new String[] { "Dar la pata", "Saltar" });
        System.out.println("Snoopy: " + snoopy);

        System.out.println("Garfield es un " + Gato.getTipo());
        System.out.println("Snoopy es un " + Perro.getTipo());

        System.out.println("\n");

        BaseDeDatos bd = new BaseDeDatos();

        String mensajeCreacion = bd.create(garfield) 
                                        ? "Se ha creado el registro de Garfield" 
                                        : "No se ha podido crear el registro de Garfield";
        System.out.println(mensajeCreacion);

        System.out.println("\n");

        String mensajeCreacion2 = bd.delete(garfield) 
                                        ? "Se ha borrado el registro de Garfield" 
                                        : "No se ha podido borrar el registro de Garfield";
        System.out.println(mensajeCreacion2);

        System.out.println("\n");

        String mensajeCreacion3 = bd.create(garfield) 
                                        ? "Se ha creado el registro de Garfield" 
                                        : "No se ha podido crear el registro de Garfield";
        System.out.println(mensajeCreacion3);

        garfield.setColor("Pelirrojo");

        String mensajeCreacion4 = bd.update(garfield) 
                                        ? "Se ha actualizado el registro de Garfield" 
                                        : "No se ha podido actualizar el registro de Garfield";
        System.out.println(mensajeCreacion4);

        BaseDeDatos copiaDeSeguridad = new BaseDeDatos(bd.getRegistros());

        System.out.println("\n");

        System.out.println(bd.read("Garfield"));

    }
}
