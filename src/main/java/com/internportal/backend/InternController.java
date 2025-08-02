package com.internportal.backend;

import org.springframework.web.bind.annotation.*;
import java.util.*;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/intern")
public class InternController {

    @GetMapping("/details")
    public Map<String, Object> getInternDetails() {
        Map<String, Object> data = new HashMap<>();
        data.put("name", "Shivam Kakade");
        data.put("referralCode", "shivam2025");
        data.put("donationsRaised", 5000);
        return data;
    }
}
