package com.shopTrends.ecommerce.Service;

import com.shopTrends.ecommerce.Exception.UserException;
import com.shopTrends.ecommerce.Modal.User;

public interface UserService {

    public User findByUserId(Long userId)throws UserException;

    public User findUserProfileByJwt(String JWT) throws UserException;
}
