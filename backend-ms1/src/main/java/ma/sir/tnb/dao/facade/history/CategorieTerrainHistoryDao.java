package ma.sir.tnb.dao.facade.history;

import ma.sir.tnb.zynerator.repository.AbstractHistoryRepository;
import ma.sir.tnb.bean.history.CategorieTerrainHistory;
import org.springframework.stereotype.Repository;

@Repository
public interface CategorieTerrainHistoryDao extends AbstractHistoryRepository<CategorieTerrainHistory,Long> {

}
