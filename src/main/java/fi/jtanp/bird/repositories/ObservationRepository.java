package fi.jtanp.bird.repositories;

import fi.jtanp.bird.entities.Observation;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface ObservationRepository extends CrudRepository<Observation, Integer> {
    List<Observation> findByUserId(int userId);
}
