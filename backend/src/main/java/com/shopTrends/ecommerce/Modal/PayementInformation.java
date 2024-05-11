package com.shopTrends.ecommerce.Modal;

import jakarta.persistence.Column;

import java.time.LocalDate;

public class PayementInformation {

    @Column(name = "cardHolderName")
    private String cardHolderName;

    @Column(name = "CardNumber")
    private String CardNumber;

    @Column(name = "expirationDate")
    private LocalDate expirationDate;

    @Column(name = "cvv")
    private String cvv;
}
