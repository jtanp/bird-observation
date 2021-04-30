package fi.jtanp.bird.repositories;

import fi.jtanp.bird.entities.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Integer> {
    public User findByUsername(String username);
}
