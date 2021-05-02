package fi.jtanp.bird.controllers;

import fi.jtanp.bird.entities.Observation;
import fi.jtanp.bird.entities.User;
import fi.jtanp.bird.repositories.ObservationRepository;
import fi.jtanp.bird.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ObservationRepository observationRepository;

    private final BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    @PostMapping("/users/register")
    private User registerUser(@RequestBody User user) throws Exception {
        User checkUsername = userRepository.findByUsername(user.getUsername());
        if (checkUsername != null) {
            throw new Exception("Username is taken.");
        }
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return userRepository.save(user);
    }

    @PostMapping("/users/login")
    private User loginUser(@RequestBody User user) throws Exception {
        User checkUser = userRepository.findByUsername(user.getUsername());
        if (checkUser == null || !(passwordEncoder.matches(user.getPassword(), checkUser.getPassword()))) {
            throw new Exception("Invalid username or password.");
        }
        return checkUser;
    }

    @GetMapping("/users/{id}/observations")
    private Iterable<Observation> getUserObservations(@PathVariable int id) {
        return observationRepository.findByUserId(id);
    }
}
