package  ma.sir.tnb.dao.specification.core;

import ma.sir.tnb.zynerator.specification.AbstractSpecification;
import ma.sir.tnb.dao.criteria.core.TerrainCriteria;
import ma.sir.tnb.bean.core.Terrain;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import java.util.ArrayList;
import java.util.List;

public class TerrainSpecification extends  AbstractSpecification<TerrainCriteria, Terrain>  {

    @Override
    public void constructPredicates() {
        addPredicateId("id", criteria);
        addPredicate("ref", criteria.getRef(),criteria.getRefLike());
        addPredicateFk("categorieTerrain","id", criteria.getCategorieTerrain()==null?null:criteria.getCategorieTerrain().getId());
        addPredicateFk("categorieTerrain","id", criteria.getCategorieTerrains());
        addPredicateFk("categorieTerrain","code", criteria.getCategorieTerrain()==null?null:criteria.getCategorieTerrain().getCode());
        addPredicateFk("redevable","id", criteria.getRedevable()==null?null:criteria.getRedevable().getId());
        addPredicateFk("redevable","id", criteria.getRedevables());
    }

    public TerrainSpecification(TerrainCriteria criteria) {
        super(criteria);
    }

    public TerrainSpecification(TerrainCriteria criteria, boolean distinct) {
        super(criteria, distinct);
    }

}
