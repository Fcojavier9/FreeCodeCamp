package herencia;

import java.util.ArrayList;

public class BaseDeDatos implements IManejo {

    // Atributos
    private ArrayList<Animal> registros;

    // Constructores
    public BaseDeDatos() {
        this.registros = new ArrayList<Animal>();
    }

    public BaseDeDatos(ArrayList<Animal> registros) {
        this.registros = registros;
    }

    //Getter
    public ArrayList<Animal> getRegistros() {
        return registros;
    }

    // Métodos CRUD
    @Override
    public boolean create(Object object) {
        if (object instanceof Animal) {
            try {
                Animal animal = (Animal) object;
                if (read(animal.getNombre()).equals(animal)) {
                    System.out.println("El animal ya existe");
                    return false;
                }

                registros.add(animal);
                return true;
            } catch (Exception e) {
                return false;
            }
        } else {
            System.out.println("El objeto no es un Animal");
            return false;
        }
    }

    @Override
    public Object read(Object object) {
        if (object instanceof String) {
            try {
                String nombre = (String) object;

                for (Animal a : registros) {
                    if (a.getNombre() == nombre) {
                        return a;
                    }
                }
                return true;
            } catch (Exception e) {
                return false;
            }
        } else {
            System.out.println("El objeto no es un String");
            return false;
        }
    }

    @Override
    public boolean update(Object object) {
        if (object instanceof Animal) {
            try {
                Animal animal = (Animal) object;
                if (read(animal.getNombre()).equals(animal)) {
                    int index = 0;
                    for (Animal a : registros) {
                        if (a.getNombre() == animal.getNombre()) {
                            registros.set(index, animal);
                            return true;
                        }
                        index++;
                    }
                    return false;
                } else {
                    System.out.println("El animal no existe");
                    return false;
                }
            } catch (Exception e) {
                return false;
            }
        } else {
            System.out.println("El objeto no es un Animal");
            return false;
        }
    }

    @Override
    public boolean delete(Object object) {
        if (object instanceof Animal) {
            try {
                Animal animal = (Animal) object;
                if (read(animal.getNombre()).equals(animal)) {
                    int index = 0;
                    for (Animal a : registros) {
                        if (a == animal) {
                            registros.remove(index);
                            return true;
                        }
                        index++;
                    }
                    return false;
                } else {
                    System.out.println("El animal no existe");
                    return false;
                }
            } catch (Exception e) {
                return false;
            }
        } else {
            System.out.println("El objeto no es un String");
            return false;
        }
    }
}
