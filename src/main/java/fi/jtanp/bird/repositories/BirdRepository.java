package fi.vamk.e1700807.bird.repositories;

import fi.vamk.e1700807.bird.entities.Bird;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface BirdRepository extends CrudRepository<Bird, Integer> {
    List<Bird> findByOrderByFinnish();

}
