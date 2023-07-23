package  ma.sir.tnb.dao.specification.core;

import ma.sir.tnb.zynerator.specification.AbstractSpecification;
import ma.sir.tnb.dao.criteria.core.RedevableCriteria;
import ma.sir.tnb.bean.core.Redevable;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import java.util.ArrayList;
import java.util.List;

public class RedevableSpecification extends  AbstractSpecification<RedevableCriteria, Redevable>  {

    @Override
    public void constructPredicates() {
        addPredicateId("id", criteria);
        addPredicate("nom", criteria.getNom(),criteria.getNomLike());
        addPredicate("prenom", criteria.getPrenom(),criteria.getPrenomLike());
        addPredicate("cin", criteria.getCin(),criteria.getCinLike());
    }

    public RedevableSpecification(RedevableCriteria criteria) {
        super(criteria);
    }

    public RedevableSpecification(RedevableCriteria criteria, boolean distinct) {
        super(criteria, distinct);
    }

}
