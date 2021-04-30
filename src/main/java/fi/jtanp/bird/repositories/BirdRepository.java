package fi.jtanp.bird.repositories;

import fi.jtanp.bird.entities.Bird;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface BirdRepository extends CrudRepository<Bird, Integer> {
    List<Bird> findByOrderByFinnish();

}
