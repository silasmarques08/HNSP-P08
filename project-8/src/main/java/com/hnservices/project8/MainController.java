package com.hnservices.project8;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@CrossOrigin
public class MainController {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private TypeRepository typeRepository;

    @PostMapping("/users")
    public void addUser(@RequestBody User user){
        userRepository.save(user);
    }

    @DeleteMapping("/users/{id}")
    public void deleteUser(@PathVariable("id") int id) { userRepository.deleteById(id); }

    @PutMapping("/users/{id}")
    public void updateUser(@PathVariable("id") int id, @RequestBody User user) {
        userRepository.save(user);}
    @GetMapping("/users")
    public @ResponseBody Iterable<User> getAllUsers(){
        return userRepository.findAll();
    }
    @GetMapping("/users/{id}")
    public @ResponseBody Optional<User> getUser(@PathVariable ("id") int id) {
        return userRepository.findById(id);
    }


    @PostMapping("/types")
    public void addType(@RequestBody Type type){
        typeRepository.save(type);
    }

    @DeleteMapping("/types/{id}")
    public void deleteType(@PathVariable("id") int id) { typeRepository.deleteById(id); }

    @PutMapping("/types/{id}")
    public void updateType(@PathVariable("id") int id, @RequestBody Type type) {
        typeRepository.save(type);}
    @GetMapping("/types")
    public @ResponseBody Iterable<Type> getAllTypes(){
        return typeRepository.findAll();
    }
    @GetMapping("/types/{id}")
    public @ResponseBody Optional<Type> getType(@PathVariable ("id") int id) {
        return typeRepository.findById(id);
    }






}
