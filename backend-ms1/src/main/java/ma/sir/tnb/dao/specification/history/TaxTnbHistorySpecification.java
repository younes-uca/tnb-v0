package  ma.sir.tnb.dao.specification.history;

import ma.sir.tnb.zynerator.specification.AbstractHistorySpecification;
import ma.sir.tnb.dao.criteria.history.TaxTnbHistoryCriteria;
import ma.sir.tnb.bean.history.TaxTnbHistory;


public class TaxTnbHistorySpecification extends AbstractHistorySpecification<TaxTnbHistoryCriteria, TaxTnbHistory> {

    public TaxTnbHistorySpecification(TaxTnbHistoryCriteria criteria) {
        super(criteria);
    }

    public TaxTnbHistorySpecification(TaxTnbHistoryCriteria criteria, boolean distinct) {
        super(criteria, distinct);
    }

}
