package fi.jtanp.bird.controllers;

import fi.jtanp.bird.entities.Observation;
import fi.jtanp.bird.repositories.ObservationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
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
