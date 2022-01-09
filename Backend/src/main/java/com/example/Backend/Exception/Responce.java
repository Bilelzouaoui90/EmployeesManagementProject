package com.example.Backend.Exception;

public class Responce {

    private String message;

    public Responce(String message) {
        this.message = message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public String getMessage() {
        return message;
    }
}
