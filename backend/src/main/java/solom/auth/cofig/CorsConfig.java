package solom.auth.cofig;


import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfig {

    public CorsConfig() {
        System.out.println("===== CORS CONFIG LOADED =====");
    }

    @Bean
    public WebMvcConfigurer corsConfigurer() {
        System.out.println("===== REGISTERING CORS =====");

        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {

                System.out.println("===== ADDING CORS MAPPINGS =====");

                registry.addMapping("/**")
                        .allowedOrigins(
                            "http://localhost:3000",
                            "https://my-auth-service-two.vercel.app"
                        )
                        .allowedMethods("*")
                        .allowedHeaders("*")
                        .allowCredentials(true);
            }
        };
    }
}