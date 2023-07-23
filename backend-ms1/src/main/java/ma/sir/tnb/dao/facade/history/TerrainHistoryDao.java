package ma.sir.tnb.dao.facade.history;

import ma.sir.tnb.zynerator.repository.AbstractHistoryRepository;
import ma.sir.tnb.bean.history.TerrainHistory;
import org.springframework.stereotype.Repository;

@Repository
public interface TerrainHistoryDao extends AbstractHistoryRepository<TerrainHistory,Long> {

}
