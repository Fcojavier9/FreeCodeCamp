package herencia;

public class Main {
    public static void main(String[] args) {

        Animal garfield = new Gato("Garfield", 5, "Persa", "Naranja", "Macho", "Jon Arbuckle", "Redonda");
        System.out.println("Grafield: " + garfield);

        Animal snoopy = new Perro("Snoopy", 3, "Beagle", "Multi-color", "Macho", "Charlie Brown", new String[] { "Dar la pata", "Saltar" });
        System.out.println("Snoopy: " + snoopy);

        System.out.println("Garfield es un " + Gato.getTipo());
        System.out.println("Snoopy es un " + Perro.getTipo());

        garfield.sonido();
        snoopy.sonido();

        garfield.comer();
        snoopy.comer();

    }
}
