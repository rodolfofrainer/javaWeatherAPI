package com.example.demo.Controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class WeatherController {
    @GetMapping("/")
    public String weather(Model model) {
        return "weather";
    }
}
