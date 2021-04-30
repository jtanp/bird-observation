package fi.jtanp.bird.repositories;

import fi.jtanp.bird.entities.Observation;
import org.springframework.data.repository.CrudRepository;

public interface ObservationRepository extends CrudRepository<Observation, Integer> {

}
