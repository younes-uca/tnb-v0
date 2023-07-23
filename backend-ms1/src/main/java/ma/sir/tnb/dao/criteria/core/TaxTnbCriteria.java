package  ma.sir.tnb.dao.criteria.core;


import ma.sir.tnb.zynerator.criteria.BaseCriteria;
import java.util.List;
import java.time.LocalDateTime;
import java.time.LocalDate;

public class TaxTnbCriteria extends  BaseCriteria  {

    private String annee;
    private String anneeMin;
    private String anneeMax;
    private String montantBase;
    private String montantBaseMin;
    private String montantBaseMax;
    private String mantantRetard;
    private String mantantRetardMin;
    private String mantantRetardMax;
    private String nombreMoisRetard;
    private String nombreMoisRetardMin;
    private String nombreMoisRetardMax;
    private String montantTotal;
    private String montantTotalMin;
    private String montantTotalMax;
    private LocalDateTime datePresentation;
    private LocalDateTime datePresentationFrom;
    private LocalDateTime datePresentationTo;
    private LocalDateTime dateTaxeTnb;
    private LocalDateTime dateTaxeTnbFrom;
    private LocalDateTime dateTaxeTnbTo;

    private RedevableCriteria redevable ;
    private List<RedevableCriteria> redevables ;
    private TerrainCriteria terrain ;
    private List<TerrainCriteria> terrains ;
    private TauxTaxTnbCriteria tauxTaxTnb ;
    private List<TauxTaxTnbCriteria> tauxTaxTnbs ;


    public TaxTnbCriteria(){}

    public String getAnnee(){
        return this.annee;
    }
    public void setAnnee(String annee){
        this.annee = annee;
    }   
    public String getAnneeMin(){
        return this.anneeMin;
    }
    public void setAnneeMin(String anneeMin){
        this.anneeMin = anneeMin;
    }
    public String getAnneeMax(){
        return this.anneeMax;
    }
    public void setAnneeMax(String anneeMax){
        this.anneeMax = anneeMax;
    }
      
    public String getMontantBase(){
        return this.montantBase;
    }
    public void setMontantBase(String montantBase){
        this.montantBase = montantBase;
    }   
    public String getMontantBaseMin(){
        return this.montantBaseMin;
    }
    public void setMontantBaseMin(String montantBaseMin){
        this.montantBaseMin = montantBaseMin;
    }
    public String getMontantBaseMax(){
        return this.montantBaseMax;
    }
    public void setMontantBaseMax(String montantBaseMax){
        this.montantBaseMax = montantBaseMax;
    }
      
    public String getMantantRetard(){
        return this.mantantRetard;
    }
    public void setMantantRetard(String mantantRetard){
        this.mantantRetard = mantantRetard;
    }   
    public String getMantantRetardMin(){
        return this.mantantRetardMin;
    }
    public void setMantantRetardMin(String mantantRetardMin){
        this.mantantRetardMin = mantantRetardMin;
    }
    public String getMantantRetardMax(){
        return this.mantantRetardMax;
    }
    public void setMantantRetardMax(String mantantRetardMax){
        this.mantantRetardMax = mantantRetardMax;
    }
      
    public String getNombreMoisRetard(){
        return this.nombreMoisRetard;
    }
    public void setNombreMoisRetard(String nombreMoisRetard){
        this.nombreMoisRetard = nombreMoisRetard;
    }   
    public String getNombreMoisRetardMin(){
        return this.nombreMoisRetardMin;
    }
    public void setNombreMoisRetardMin(String nombreMoisRetardMin){
        this.nombreMoisRetardMin = nombreMoisRetardMin;
    }
    public String getNombreMoisRetardMax(){
        return this.nombreMoisRetardMax;
    }
    public void setNombreMoisRetardMax(String nombreMoisRetardMax){
        this.nombreMoisRetardMax = nombreMoisRetardMax;
    }
      
    public String getMontantTotal(){
        return this.montantTotal;
    }
    public void setMontantTotal(String montantTotal){
        this.montantTotal = montantTotal;
    }   
    public String getMontantTotalMin(){
        return this.montantTotalMin;
    }
    public void setMontantTotalMin(String montantTotalMin){
        this.montantTotalMin = montantTotalMin;
    }
    public String getMontantTotalMax(){
        return this.montantTotalMax;
    }
    public void setMontantTotalMax(String montantTotalMax){
        this.montantTotalMax = montantTotalMax;
    }
      
    public LocalDateTime getDatePresentation(){
        return this.datePresentation;
    }
    public void setDatePresentation(LocalDateTime datePresentation){
        this.datePresentation = datePresentation;
    }
    public LocalDateTime getDatePresentationFrom(){
        return this.datePresentationFrom;
    }
    public void setDatePresentationFrom(LocalDateTime datePresentationFrom){
        this.datePresentationFrom = datePresentationFrom;
    }
    public LocalDateTime getDatePresentationTo(){
        return this.datePresentationTo;
    }
    public void setDatePresentationTo(LocalDateTime datePresentationTo){
        this.datePresentationTo = datePresentationTo;
    }
    public LocalDateTime getDateTaxeTnb(){
        return this.dateTaxeTnb;
    }
    public void setDateTaxeTnb(LocalDateTime dateTaxeTnb){
        this.dateTaxeTnb = dateTaxeTnb;
    }
    public LocalDateTime getDateTaxeTnbFrom(){
        return this.dateTaxeTnbFrom;
    }
    public void setDateTaxeTnbFrom(LocalDateTime dateTaxeTnbFrom){
        this.dateTaxeTnbFrom = dateTaxeTnbFrom;
    }
    public LocalDateTime getDateTaxeTnbTo(){
        return this.dateTaxeTnbTo;
    }
    public void setDateTaxeTnbTo(LocalDateTime dateTaxeTnbTo){
        this.dateTaxeTnbTo = dateTaxeTnbTo;
    }

    public RedevableCriteria getRedevable(){
        return this.redevable;
    }

    public void setRedevable(RedevableCriteria redevable){
        this.redevable = redevable;
    }
    public List<RedevableCriteria> getRedevables(){
        return this.redevables;
    }

    public void setRedevables(List<RedevableCriteria> redevables){
        this.redevables = redevables;
    }
    public TerrainCriteria getTerrain(){
        return this.terrain;
    }

    public void setTerrain(TerrainCriteria terrain){
        this.terrain = terrain;
    }
    public List<TerrainCriteria> getTerrains(){
        return this.terrains;
    }

    public void setTerrains(List<TerrainCriteria> terrains){
        this.terrains = terrains;
    }
    public TauxTaxTnbCriteria getTauxTaxTnb(){
        return this.tauxTaxTnb;
    }

    public void setTauxTaxTnb(TauxTaxTnbCriteria tauxTaxTnb){
        this.tauxTaxTnb = tauxTaxTnb;
    }
    public List<TauxTaxTnbCriteria> getTauxTaxTnbs(){
        return this.tauxTaxTnbs;
    }

    public void setTauxTaxTnbs(List<TauxTaxTnbCriteria> tauxTaxTnbs){
        this.tauxTaxTnbs = tauxTaxTnbs;
    }
}
