package com.example.demo.Controllers;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;

public class Secrets {

    private static final String PROPERTIES_FILE = "application.properties";

    public static String retrieveSecrets() {
        Properties properties = new Properties();
        try (FileInputStream fis = new FileInputStream(PROPERTIES_FILE)) {
            properties.load(fis);
            return properties.getProperty("weather.api.key");
        } catch (IOException e) {
            e.printStackTrace();
            return null;
        }
    }
}