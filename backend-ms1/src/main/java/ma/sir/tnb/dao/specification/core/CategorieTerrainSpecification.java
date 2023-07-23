package  ma.sir.tnb.dao.specification.core;

import ma.sir.tnb.zynerator.specification.AbstractSpecification;
import ma.sir.tnb.dao.criteria.core.CategorieTerrainCriteria;
import ma.sir.tnb.bean.core.CategorieTerrain;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import java.util.ArrayList;
import java.util.List;

public class CategorieTerrainSpecification extends  AbstractSpecification<CategorieTerrainCriteria, CategorieTerrain>  {

    @Override
    public void constructPredicates() {
        addPredicateId("id", criteria);
        addPredicate("code", criteria.getCode(),criteria.getCodeLike());
        addPredicate("libelle", criteria.getLibelle(),criteria.getLibelleLike());
    }

    public CategorieTerrainSpecification(CategorieTerrainCriteria criteria) {
        super(criteria);
    }

    public CategorieTerrainSpecification(CategorieTerrainCriteria criteria, boolean distinct) {
        super(criteria, distinct);
    }

}
