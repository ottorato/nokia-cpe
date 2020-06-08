package com.rato.basic.security;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;

@Configuration
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {
	private final Logger logger = LoggerFactory.getLogger(this.getClass());

	@Override
	protected void configure(HttpSecurity http) throws Exception {
		logger.info("Configuring security...");
		http
			.authorizeRequests()
				.antMatchers("/", "/home").permitAll()
				.antMatchers("/ui/js/angularApp/**").permitAll()
				.antMatchers("/view/**").permitAll()
				.antMatchers("/static/css/**").permitAll()
				.antMatchers("/address").hasRole("USER")
				.anyRequest().authenticated()
				.and()
			.formLogin()
				.loginPage("/login")
				.defaultSuccessUrl("/address")
				.failureUrl("/login?error=true")
				.permitAll()
				.and()
				.logout()
	            .logoutSuccessUrl("/login?logout=true")
	            .invalidateHttpSession(true)
	            .permitAll();
	}
	
	@Autowired
	public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
		logger.info("Checking user....");
		auth
			.inMemoryAuthentication()
				.withUser("user").password("{noop}password").roles("USER") 
				.and()
				.withUser("otto").password("{noop}otto").roles("USER");
	}

}