package  ma.sir.tnb.dao.specification.core;

import ma.sir.tnb.zynerator.specification.AbstractSpecification;
import ma.sir.tnb.dao.criteria.core.TaxTnbCriteria;
import ma.sir.tnb.bean.core.TaxTnb;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import java.util.ArrayList;
import java.util.List;

public class TaxTnbSpecification extends  AbstractSpecification<TaxTnbCriteria, TaxTnb>  {

    @Override
    public void constructPredicates() {
        addPredicateId("id", criteria);
        addPredicateInt("annee", criteria.getAnnee(), criteria.getAnneeMin(), criteria.getAnneeMax());
        addPredicateBigDecimal("montantBase", criteria.getMontantBase(), criteria.getMontantBaseMin(), criteria.getMontantBaseMax());
        addPredicateBigDecimal("mantantRetard", criteria.getMantantRetard(), criteria.getMantantRetardMin(), criteria.getMantantRetardMax());
        addPredicateBigDecimal("nombreMoisRetard", criteria.getNombreMoisRetard(), criteria.getNombreMoisRetardMin(), criteria.getNombreMoisRetardMax());
        addPredicateBigDecimal("montantTotal", criteria.getMontantTotal(), criteria.getMontantTotalMin(), criteria.getMontantTotalMax());
        addPredicate("datePresentation", criteria.getDatePresentation(), criteria.getDatePresentationFrom(), criteria.getDatePresentationTo());
        addPredicate("dateTaxeTnb", criteria.getDateTaxeTnb(), criteria.getDateTaxeTnbFrom(), criteria.getDateTaxeTnbTo());
        addPredicateFk("redevable","id", criteria.getRedevable()==null?null:criteria.getRedevable().getId());
        addPredicateFk("redevable","id", criteria.getRedevables());
        addPredicateFk("terrain","id", criteria.getTerrain()==null?null:criteria.getTerrain().getId());
        addPredicateFk("terrain","id", criteria.getTerrains());
        addPredicateFk("terrain","ref", criteria.getTerrain()==null?null:criteria.getTerrain().getRef());
        addPredicateFk("tauxTaxTnb","id", criteria.getTauxTaxTnb()==null?null:criteria.getTauxTaxTnb().getId());
        addPredicateFk("tauxTaxTnb","id", criteria.getTauxTaxTnbs());
    }

    public TaxTnbSpecification(TaxTnbCriteria criteria) {
        super(criteria);
    }

    public TaxTnbSpecification(TaxTnbCriteria criteria, boolean distinct) {
        super(criteria, distinct);
    }

}
