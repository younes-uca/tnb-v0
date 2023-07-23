package  ma.sir.tnb.dao.specification.core;

import ma.sir.tnb.zynerator.specification.AbstractSpecification;
import ma.sir.tnb.dao.criteria.core.TauxTaxTnbCriteria;
import ma.sir.tnb.bean.core.TauxTaxTnb;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import java.util.ArrayList;
import java.util.List;

public class TauxTaxTnbSpecification extends  AbstractSpecification<TauxTaxTnbCriteria, TauxTaxTnb>  {

    @Override
    public void constructPredicates() {
        addPredicateId("id", criteria);
        addPredicateBigDecimal("prixMetreCarre", criteria.getPrixMetreCarre(), criteria.getPrixMetreCarreMin(), criteria.getPrixMetreCarreMax());
        addPredicateBigDecimal("prixRetardMetreCarre", criteria.getPrixRetardMetreCarre(), criteria.getPrixRetardMetreCarreMin(), criteria.getPrixRetardMetreCarreMax());
        addPredicateFk("categorieTerrain","id", criteria.getCategorieTerrain()==null?null:criteria.getCategorieTerrain().getId());
        addPredicateFk("categorieTerrain","id", criteria.getCategorieTerrains());
        addPredicateFk("categorieTerrain","code", criteria.getCategorieTerrain()==null?null:criteria.getCategorieTerrain().getCode());
    }

    public TauxTaxTnbSpecification(TauxTaxTnbCriteria criteria) {
        super(criteria);
    }

    public TauxTaxTnbSpecification(TauxTaxTnbCriteria criteria, boolean distinct) {
        super(criteria, distinct);
    }

}
