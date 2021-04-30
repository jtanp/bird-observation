package fi.jtanp.bird.controllers;

import fi.jtanp.bird.entities.Bird;
import fi.jtanp.bird.repositories.BirdRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class BirdController {
    @Autowired
    BirdRepository repository;

    @GetMapping("/birds")
    public Iterable<Bird> getAll() {
        return repository.findByOrderByFinnish();
    }
}
