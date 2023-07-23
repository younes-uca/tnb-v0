package  ma.sir.tnb.ws.dto;

import ma.sir.tnb.zynerator.audit.Log;
import ma.sir.tnb.zynerator.dto.AuditBaseDto;
import com.fasterxml.jackson.annotation.JsonInclude;



@JsonInclude(JsonInclude.Include.NON_NULL)
public class RedevableDto  extends AuditBaseDto {

    private String nom  ;
    private String prenom  ;
    private String cin  ;




    public RedevableDto(){
        super();
    }



    @Log
    public String getNom(){
        return this.nom;
    }
    public void setNom(String nom){
        this.nom = nom;
    }

    @Log
    public String getPrenom(){
        return this.prenom;
    }
    public void setPrenom(String prenom){
        this.prenom = prenom;
    }

    @Log
    public String getCin(){
        return this.cin;
    }
    public void setCin(String cin){
        this.cin = cin;
    }






}
