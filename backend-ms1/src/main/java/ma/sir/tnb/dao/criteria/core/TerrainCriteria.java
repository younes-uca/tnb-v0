package  ma.sir.tnb.dao.criteria.core;


import ma.sir.tnb.zynerator.criteria.BaseCriteria;
import java.util.List;

public class TerrainCriteria extends  BaseCriteria  {

    private String ref;
    private String refLike;

    private CategorieTerrainCriteria categorieTerrain ;
    private List<CategorieTerrainCriteria> categorieTerrains ;
    private RedevableCriteria redevable ;
    private List<RedevableCriteria> redevables ;


    public TerrainCriteria(){}

    public String getRef(){
        return this.ref;
    }
    public void setRef(String ref){
        this.ref = ref;
    }
    public String getRefLike(){
        return this.refLike;
    }
    public void setRefLike(String refLike){
        this.refLike = refLike;
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
}
