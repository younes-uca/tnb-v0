package  ma.sir.tnb;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import java.util.*;
import java.util.stream.Stream;
import org.springframework.beans.factory.annotation.Autowired;
import java.math.BigDecimal;
import java.time.LocalDateTime;
import org.springframework.cache.annotation.EnableCaching;


import ma.sir.tnb.bean.core.*;
import ma.sir.tnb.service.facade.admin.*;

import ma.sir.tnb.zynerator.security.common.AuthoritiesConstants;
import ma.sir.tnb.zynerator.security.bean.User;
import ma.sir.tnb.zynerator.security.bean.Permission;
import ma.sir.tnb.zynerator.security.bean.Role;
import ma.sir.tnb.zynerator.security.service.facade.UserService;
import ma.sir.tnb.zynerator.security.service.facade.RoleService;


import org.springframework.web.client.RestTemplate;

@SpringBootApplication
@EnableCaching
//@EnableFeignClients("ma.sir.tnb.required.facade")
public class TnbApplication {
    public static ConfigurableApplicationContext ctx;

    public static void main(String[] args) {
        ctx=SpringApplication.run(TnbApplication.class, args);
    }


    @Bean
    RestTemplate restTemplate(){
        return new RestTemplate();
    }
    @Autowired
    private ObjectMapper objectMapper;

    @Bean
    ObjectMapper objectMapper(){
        return new ObjectMapper();
    }
    public static ConfigurableApplicationContext getCtx() {
        return ctx;
    }

    @Bean
    public CommandLineRunner demo(UserService userService, RoleService roleService) {
    return (args) -> {
        if(true){



    // Role admin

        User userForAdmin = new User("admin");

        Role roleForAdmin = new Role();
        roleForAdmin.setAuthority(AuthoritiesConstants.ADMIN);
        List<Permission> permissionsForAdmin = new ArrayList<>();
        addPermissionForAdmin(permissionsForAdmin);
        roleForAdmin.setPermissions(permissionsForAdmin);
        if(userForAdmin.getRoles()==null)
            userForAdmin.setRoles(new ArrayList<>());

        userForAdmin.getRoles().add(roleForAdmin);
        userService.save(userForAdmin);
            }
        };
    }




    private static String fakeString(String attributeName, int i) {
        return attributeName + i;
    }

    private static Long fakeLong(String attributeName, int i) {
        return  10L * i;
    }
    private static Integer fakeInteger(String attributeName, int i) {
        return  10 * i;
    }

    private static Double fakeDouble(String attributeName, int i) {
        return 10D * i;
    }

    private static BigDecimal fakeBigDecimal(String attributeName, int i) {
        return  BigDecimal.valueOf(i*1L*10);
    }

    private static Boolean fakeBoolean(String attributeName, int i) {
        return i % 2 == 0 ? true : false;
    }
    private static LocalDateTime fakeLocalDateTime(String attributeName, int i) {
        return LocalDateTime.now().plusDays(i);
    }
    private static void addPermissionForAdmin(List<Permission> permissions){
        permissions.add(new Permission("TauxTaxTnb.edit"));
        permissions.add(new Permission("TauxTaxTnb.list"));
        permissions.add(new Permission("TauxTaxTnb.view"));
        permissions.add(new Permission("TauxTaxTnb.add"));
        permissions.add(new Permission("TauxTaxTnb.delete"));
        permissions.add(new Permission("Redevable.edit"));
        permissions.add(new Permission("Redevable.list"));
        permissions.add(new Permission("Redevable.view"));
        permissions.add(new Permission("Redevable.add"));
        permissions.add(new Permission("Redevable.delete"));
        permissions.add(new Permission("TaxTnb.edit"));
        permissions.add(new Permission("TaxTnb.list"));
        permissions.add(new Permission("TaxTnb.view"));
        permissions.add(new Permission("TaxTnb.add"));
        permissions.add(new Permission("TaxTnb.delete"));
        permissions.add(new Permission("CategorieTerrain.edit"));
        permissions.add(new Permission("CategorieTerrain.list"));
        permissions.add(new Permission("CategorieTerrain.view"));
        permissions.add(new Permission("CategorieTerrain.add"));
        permissions.add(new Permission("CategorieTerrain.delete"));
        permissions.add(new Permission("Terrain.edit"));
        permissions.add(new Permission("Terrain.list"));
        permissions.add(new Permission("Terrain.view"));
        permissions.add(new Permission("Terrain.add"));
        permissions.add(new Permission("Terrain.delete"));
    }

}


