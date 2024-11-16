package herencia;

public interface IManejo {
    public abstract boolean create(Object object);
    public abstract Object read(Object object);
    public abstract boolean update(Object object);
    public abstract boolean delete(Object object);
}
