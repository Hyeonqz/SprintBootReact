package com.ems.emsapp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;

@SpringBootApplication
@EntityScan("com.ems.emsapp.*")
public class EmsAppApplication {

    public static void main(String[] args) {
        SpringApplication.run(EmsAppApplication.class, args);
    }

}
