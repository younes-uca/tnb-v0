package  ma.sir.tnb.dao.specification.history;

import ma.sir.tnb.zynerator.specification.AbstractHistorySpecification;
import ma.sir.tnb.dao.criteria.history.CategorieTerrainHistoryCriteria;
import ma.sir.tnb.bean.history.CategorieTerrainHistory;


public class CategorieTerrainHistorySpecification extends AbstractHistorySpecification<CategorieTerrainHistoryCriteria, CategorieTerrainHistory> {

    public CategorieTerrainHistorySpecification(CategorieTerrainHistoryCriteria criteria) {
        super(criteria);
    }

    public CategorieTerrainHistorySpecification(CategorieTerrainHistoryCriteria criteria, boolean distinct) {
        super(criteria, distinct);
    }

}
