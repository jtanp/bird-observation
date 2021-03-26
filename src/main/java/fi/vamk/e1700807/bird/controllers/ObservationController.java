package fi.vamk.e1700807.bird.controllers;

import fi.vamk.e1700807.bird.entities.Observation;
import fi.vamk.e1700807.bird.repositories.ObservationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class ObservationController {
    @Autowired
    private ObservationRepository repository;

    /** Save new observation to the database. */
    @PostMapping("/observation")
    public Observation create(@RequestBody Observation observation) {
        return repository.save(observation);
    }

    /** Updates observation in the database. */
    @PutMapping("/observation")
    public Observation update(@RequestBody Observation observation) {
        return repository.save(observation);
    }

    /** Deletes observation from the database. */
    @DeleteMapping("/observation")
    public void delete(@RequestBody Observation observation) {
        repository.delete(observation);
    }

    /** Returns all observations from the database. */
    @GetMapping("/observations")
    public Iterable<Observation> getObservations() {
        return repository.findAll();
    }

}
