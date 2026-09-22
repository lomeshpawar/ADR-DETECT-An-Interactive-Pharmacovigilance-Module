package com.adrdetect.config;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Contact;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.info.License;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class OpenApiConfig {
    @Bean
    public OpenAPI adrDetectOpenAPI() {
        return new OpenAPI()
                .info(new Info()
                        .title("ADR-DETECT API")
                        .description("RESTful APIs for the Interactive Pharmacovigilance Educational Simulation Platform")
                        .version("1.0.0")
                        .contact(new Contact().name("ADR-DETECT Medical Education Team"))
                        .license(new License().name("Educational Use Only")));
    }
}
