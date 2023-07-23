package  ma.sir.tnb.ws.dto;

import ma.sir.tnb.zynerator.audit.Log;
import ma.sir.tnb.zynerator.dto.AuditBaseDto;
import com.fasterxml.jackson.annotation.JsonInclude;



@JsonInclude(JsonInclude.Include.NON_NULL)
public class TerrainDto  extends AuditBaseDto {

    private String ref  ;

    private CategorieTerrainDto categorieTerrain ;
    private RedevableDto redevable ;



    public TerrainDto(){
        super();
    }



    @Log
    public String getRef(){
        return this.ref;
    }
    public void setRef(String ref){
        this.ref = ref;
    }


    public CategorieTerrainDto getCategorieTerrain(){
        return this.categorieTerrain;
    }

    public void setCategorieTerrain(CategorieTerrainDto categorieTerrain){
        this.categorieTerrain = categorieTerrain;
    }
    public RedevableDto getRedevable(){
        return this.redevable;
    }

    public void setRedevable(RedevableDto redevable){
        this.redevable = redevable;
    }




}
