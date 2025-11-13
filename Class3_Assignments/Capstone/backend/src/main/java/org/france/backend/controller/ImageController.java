package org.france.backend.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.Map;

@RestController
@RequestMapping("/api/upload")
public class ImageController {

    private final Path uploadDirectory = Paths.get("uploads");

    @PostMapping("")
    public Map<String, String> uploadFile(@RequestParam("file") MultipartFile file) throws IOException {

        if(file != null){
            String filename = file.getOriginalFilename();
            Path targetPath = uploadDirectory.resolve(filename);
            Files.copy(file.getInputStream(), targetPath, StandardCopyOption.REPLACE_EXISTING);


            // Return public URL
            String url = "http://localhost:8080/static/" + filename;
            return Map.of("url", url);
        }

        return null;
    }
}
