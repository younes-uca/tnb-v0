package  ma.sir.tnb.dao.specification.history;

import ma.sir.tnb.zynerator.specification.AbstractHistorySpecification;
import ma.sir.tnb.dao.criteria.history.TerrainHistoryCriteria;
import ma.sir.tnb.bean.history.TerrainHistory;


public class TerrainHistorySpecification extends AbstractHistorySpecification<TerrainHistoryCriteria, TerrainHistory> {

    public TerrainHistorySpecification(TerrainHistoryCriteria criteria) {
        super(criteria);
    }

    public TerrainHistorySpecification(TerrainHistoryCriteria criteria, boolean distinct) {
        super(criteria, distinct);
    }

}
