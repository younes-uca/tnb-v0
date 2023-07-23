package  ma.sir.tnb.ws.dto;

import ma.sir.tnb.zynerator.audit.Log;
import ma.sir.tnb.zynerator.dto.AuditBaseDto;
import com.fasterxml.jackson.annotation.JsonInclude;

import java.util.Date;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import com.fasterxml.jackson.annotation.JsonFormat;
import java.math.BigDecimal;


@JsonInclude(JsonInclude.Include.NON_NULL)
public class TaxTnbDto  extends AuditBaseDto {

    private Integer annee  = 0 ;
    private BigDecimal montantBase  ;
    private BigDecimal mantantRetard  ;
    private BigDecimal nombreMoisRetard  ;
    private BigDecimal montantTotal  ;
    private String datePresentation ;
    private String dateTaxeTnb ;

    private RedevableDto redevable ;
    private TerrainDto terrain ;
    private TauxTaxTnbDto tauxTaxTnb ;



    public TaxTnbDto(){
        super();
    }



    @Log
    public Integer getAnnee(){
        return this.annee;
    }
    public void setAnnee(Integer annee){
        this.annee = annee;
    }

    @Log
    public BigDecimal getMontantBase(){
        return this.montantBase;
    }
    public void setMontantBase(BigDecimal montantBase){
        this.montantBase = montantBase;
    }

    @Log
    public BigDecimal getMantantRetard(){
        return this.mantantRetard;
    }
    public void setMantantRetard(BigDecimal mantantRetard){
        this.mantantRetard = mantantRetard;
    }

    @Log
    public BigDecimal getNombreMoisRetard(){
        return this.nombreMoisRetard;
    }
    public void setNombreMoisRetard(BigDecimal nombreMoisRetard){
        this.nombreMoisRetard = nombreMoisRetard;
    }

    @Log
    public BigDecimal getMontantTotal(){
        return this.montantTotal;
    }
    public void setMontantTotal(BigDecimal montantTotal){
        this.montantTotal = montantTotal;
    }

    @Log
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd/MM/yyyy HH:mm")
    public String getDatePresentation(){
        return this.datePresentation;
    }
    public void setDatePresentation(String datePresentation){
        this.datePresentation = datePresentation;
    }

    @Log
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd/MM/yyyy HH:mm")
    public String getDateTaxeTnb(){
        return this.dateTaxeTnb;
    }
    public void setDateTaxeTnb(String dateTaxeTnb){
        this.dateTaxeTnb = dateTaxeTnb;
    }


    public RedevableDto getRedevable(){
        return this.redevable;
    }

    public void setRedevable(RedevableDto redevable){
        this.redevable = redevable;
    }
    public TerrainDto getTerrain(){
        return this.terrain;
    }

    public void setTerrain(TerrainDto terrain){
        this.terrain = terrain;
    }
    public TauxTaxTnbDto getTauxTaxTnb(){
        return this.tauxTaxTnb;
    }

    public void setTauxTaxTnb(TauxTaxTnbDto tauxTaxTnb){
        this.tauxTaxTnb = tauxTaxTnb;
    }




}
