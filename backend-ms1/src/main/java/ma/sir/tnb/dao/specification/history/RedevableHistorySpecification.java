package  ma.sir.tnb.dao.specification.history;

import ma.sir.tnb.zynerator.specification.AbstractHistorySpecification;
import ma.sir.tnb.dao.criteria.history.RedevableHistoryCriteria;
import ma.sir.tnb.bean.history.RedevableHistory;


public class RedevableHistorySpecification extends AbstractHistorySpecification<RedevableHistoryCriteria, RedevableHistory> {

    public RedevableHistorySpecification(RedevableHistoryCriteria criteria) {
        super(criteria);
    }

    public RedevableHistorySpecification(RedevableHistoryCriteria criteria, boolean distinct) {
        super(criteria, distinct);
    }

}
