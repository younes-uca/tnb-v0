package  ma.sir.tnb.ws.dto;

import ma.sir.tnb.zynerator.audit.Log;
import ma.sir.tnb.zynerator.dto.AuditBaseDto;
import com.fasterxml.jackson.annotation.JsonInclude;

import java.math.BigDecimal;


@JsonInclude(JsonInclude.Include.NON_NULL)
public class TauxTaxTnbDto  extends AuditBaseDto {

    private BigDecimal prixMetreCarre  ;
    private BigDecimal prixRetardMetreCarre  ;

    private CategorieTerrainDto categorieTerrain ;



    public TauxTaxTnbDto(){
        super();
    }



    @Log
    public BigDecimal getPrixMetreCarre(){
        return this.prixMetreCarre;
    }
    public void setPrixMetreCarre(BigDecimal prixMetreCarre){
        this.prixMetreCarre = prixMetreCarre;
    }

    @Log
    public BigDecimal getPrixRetardMetreCarre(){
        return this.prixRetardMetreCarre;
    }
    public void setPrixRetardMetreCarre(BigDecimal prixRetardMetreCarre){
        this.prixRetardMetreCarre = prixRetardMetreCarre;
    }


    public CategorieTerrainDto getCategorieTerrain(){
        return this.categorieTerrain;
    }

    public void setCategorieTerrain(CategorieTerrainDto categorieTerrain){
        this.categorieTerrain = categorieTerrain;
    }




}
