package com.shopTrends.ecommerce.Service;


import com.shopTrends.ecommerce.Modal.User;
import com.shopTrends.ecommerce.Repository.UserRepository;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CustomUserServiceImpl implements UserDetailsService {

    private UserRepository userRepository;

    public CustomUserServiceImpl(UserRepository userRepository){
        this.userRepository=userRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user=userRepository.findByEmail(username);

        if(user==null)
        {
            throw new UsernameNotFoundException("User Not Found");
        }

        List<GrantedAuthority>authorities=new ArrayList<>();



        return new org.springframework.security.core.userdetails.User(user.getEmail(),user.getPassword(),authorities);
    }
}
