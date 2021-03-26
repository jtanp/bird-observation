package fi.vamk.e1700807.bird.repositories;

import fi.vamk.e1700807.bird.entities.Observation;
import org.springframework.data.repository.CrudRepository;

public interface ObservationRepository extends CrudRepository<Observation, Integer> {

}
