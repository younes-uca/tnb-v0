package  ma.sir.tnb.dao.specification.history;

import ma.sir.tnb.zynerator.specification.AbstractHistorySpecification;
import ma.sir.tnb.dao.criteria.history.TauxTaxTnbHistoryCriteria;
import ma.sir.tnb.bean.history.TauxTaxTnbHistory;


public class TauxTaxTnbHistorySpecification extends AbstractHistorySpecification<TauxTaxTnbHistoryCriteria, TauxTaxTnbHistory> {

    public TauxTaxTnbHistorySpecification(TauxTaxTnbHistoryCriteria criteria) {
        super(criteria);
    }

    public TauxTaxTnbHistorySpecification(TauxTaxTnbHistoryCriteria criteria, boolean distinct) {
        super(criteria, distinct);
    }

}
