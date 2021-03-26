package fi.vamk.e1700807.bird.controllers;

import java.io.FileReader;
import java.util.Iterator;

import com.fasterxml.jackson.databind.ObjectMapper;

import fi.vamk.e1700807.bird.entities.Bird;
import fi.vamk.e1700807.bird.repositories.BirdRepository;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

/** Takes care of RESTful commands for the client */
@RestController
public class BirdController {
    @Autowired
    BirdRepository repository;


    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/birds")
    public Iterable<Bird> getAll() {
        return repository.findByOrderByFinnish();
    }

    /**
     * Reads JSON-file, loops birds inside the file and stores the data in database
     */
    @GetMapping("/importBirds")
    public String importBirds() {
        JSONParser parser = new JSONParser();
        try {
            Object obj = parser.parse(new FileReader("bird.json"));
            // muunnetaan tiedosto JSON arrayksi
            JSONArray birds = (JSONArray) obj;
            Iterator<JSONObject> iterator = birds.iterator();
            while (iterator.hasNext()) {
                JSONObject bird = (JSONObject) iterator.next();
                // System.out.println(bird.toString());
                ObjectMapper mapper = new ObjectMapper();
                Bird b = mapper.readValue(bird.toString(), Bird.class);
                repository.save(b);
            }
            return "Import successful";
        } catch (Exception e) {
            return "Import failed " + e.toString();
        }
    }

}
