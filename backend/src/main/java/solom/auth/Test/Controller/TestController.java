package solom.auth.Test.Controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping()
public class TestController {

    @GetMapping("/")
    public String hello()
    {
        return "Backend working";
    }

}