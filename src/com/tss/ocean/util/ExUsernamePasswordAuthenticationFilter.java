package com.tss.ocean.util;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

public class ExUsernamePasswordAuthenticationFilter extends UsernamePasswordAuthenticationFilter {

    @Override
    public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response) throws AuthenticationException {
        final int dbValue = Integer.parseInt(request.getParameter("finyear"));
        request.getSession().setAttribute("finyear", dbValue);
System.out.println("...............................>>>>>>>>>>>>>>>>"+dbValue);
        return super.attemptAuthentication(request, response); 
    } 
}