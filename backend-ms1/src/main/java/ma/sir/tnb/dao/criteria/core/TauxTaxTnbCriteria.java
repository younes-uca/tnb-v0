package  ma.sir.tnb.dao.criteria.core;


import ma.sir.tnb.zynerator.criteria.BaseCriteria;
import java.util.List;

public class TauxTaxTnbCriteria extends  BaseCriteria  {

    private String prixMetreCarre;
    private String prixMetreCarreMin;
    private String prixMetreCarreMax;
    private String prixRetardMetreCarre;
    private String prixRetardMetreCarreMin;
    private String prixRetardMetreCarreMax;

    private CategorieTerrainCriteria categorieTerrain ;
    private List<CategorieTerrainCriteria> categorieTerrains ;


    public TauxTaxTnbCriteria(){}

    public String getPrixMetreCarre(){
        return this.prixMetreCarre;
    }
    public void setPrixMetreCarre(String prixMetreCarre){
        this.prixMetreCarre = prixMetreCarre;
    }   
    public String getPrixMetreCarreMin(){
        return this.prixMetreCarreMin;
    }
    public void setPrixMetreCarreMin(String prixMetreCarreMin){
        this.prixMetreCarreMin = prixMetreCarreMin;
    }
    public String getPrixMetreCarreMax(){
        return this.prixMetreCarreMax;
    }
    public void setPrixMetreCarreMax(String prixMetreCarreMax){
        this.prixMetreCarreMax = prixMetreCarreMax;
    }
      
    public String getPrixRetardMetreCarre(){
        return this.prixRetardMetreCarre;
    }
    public void setPrixRetardMetreCarre(String prixRetardMetreCarre){
        this.prixRetardMetreCarre = prixRetardMetreCarre;
    }   
    public String getPrixRetardMetreCarreMin(){
        return this.prixRetardMetreCarreMin;
    }
    public void setPrixRetardMetreCarreMin(String prixRetardMetreCarreMin){
        this.prixRetardMetreCarreMin = prixRetardMetreCarreMin;
    }
    public String getPrixRetardMetreCarreMax(){
        return this.prixRetardMetreCarreMax;
    }
    public void setPrixRetardMetreCarreMax(String prixRetardMetreCarreMax){
        this.prixRetardMetreCarreMax = prixRetardMetreCarreMax;
    }
      

    public CategorieTerrainCriteria getCategorieTerrain(){
        return this.categorieTerrain;
    }

    public void setCategorieTerrain(CategorieTerrainCriteria categorieTerrain){
        this.categorieTerrain = categorieTerrain;
    }
    public List<CategorieTerrainCriteria> getCategorieTerrains(){
        return this.categorieTerrains;
    }

    public void setCategorieTerrains(List<CategorieTerrainCriteria> categorieTerrains){
        this.categorieTerrains = categorieTerrains;
    }
}
