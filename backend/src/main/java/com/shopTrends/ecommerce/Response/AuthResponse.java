package com.shopTrends.ecommerce.Response;

public class AuthResponse {
    private String jwt;
    private String message;

    public AuthResponse(String jwt,String message){
        super();
        this.jwt=jwt;
        this.message=message;
    }
}
