package com.shopTrends.ecommerce.Controller;


import com.shopTrends.ecommerce.Exception.UserException;
import com.shopTrends.ecommerce.Modal.User;
import com.shopTrends.ecommerce.Repository.UserRepository;
import com.shopTrends.ecommerce.Request.LoginRequest;
import com.shopTrends.ecommerce.Response.AuthResponse;
import com.shopTrends.ecommerce.Service.CustomUserServiceImpl;
import com.shopTrends.ecommerce.security.JwtProvider;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
public class AuthController {

    private UserRepository userRepository;
    private JwtProvider jwtProvider;
    private PasswordEncoder passwordEncoder;
    private CustomUserServiceImpl customUserService;

    public AuthController(UserRepository userRepository,JwtProvider jwtProvider,CustomUserServiceImpl customUserService,PasswordEncoder passwordEncoder){
        this.userRepository=userRepository;
        this.passwordEncoder=passwordEncoder;
        this.jwtProvider=jwtProvider;
        this.customUserService=customUserService;
    }

    @PostMapping("/signup")
    public ResponseEntity<AuthResponse>createUserHandler(@RequestBody User user) throws UserException{
        String email=user.getEmail();
        String password=user.getPassword();
        String firstName=user.getFirstName();
        String lastName=user.getLastName();

        User emailExist=userRepository.findByEmail(email);
        if(emailExist!=null)
        {
            throw new UserException("Email is already Used");
        }

        User createdUser=new User();

        createdUser.setFirstName(firstName);
        createdUser.setEmail(email);
        createdUser.setLastName(lastName);
        createdUser.setPassword(passwordEncoder.encode(password));

        User SavedUser=userRepository.save(createdUser);

        Authentication authentication=new UsernamePasswordAuthenticationToken(email,password);
        SecurityContextHolder.getContext().setAuthentication(authentication);

        String token= jwtProvider.generateToken(authentication);
        AuthResponse authResponse=new AuthResponse(token,"SignUp Success");
        return new ResponseEntity<>(authResponse, HttpStatus.CREATED);


    }

    @PostMapping("/signin")
    public ResponseEntity<AuthResponse>loginUserHandler(@RequestBody LoginRequest loginRequest){
        String username=loginRequest.getEmail();
        String password=loginRequest.getPassword();

        Authentication authentication=authenticate(username,password);

        SecurityContextHolder.getContext().setAuthentication(authentication);

        String token= jwtProvider.generateToken(authentication);
        AuthResponse authResponse=new AuthResponse(token,"SignIn Success");
        return new ResponseEntity<>(authResponse, HttpStatus.CREATED);

    }

    private Authentication authenticate(String username, String password) {
        UserDetails userDetails=customUserService.loadUserByUsername(username);


        if(userDetails==null)
        {
            throw new BadCredentialsException("Invalid Username");
        }

        if(!passwordEncoder.matches(password,userDetails.getPassword())){
            throw new BadCredentialsException("Invalid Password");
        }

        return new UsernamePasswordAuthenticationToken(userDetails,null,userDetails.getAuthorities());

    }


}
