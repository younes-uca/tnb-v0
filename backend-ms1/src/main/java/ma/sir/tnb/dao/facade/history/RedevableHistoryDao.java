package ma.sir.tnb.dao.facade.history;

import ma.sir.tnb.zynerator.repository.AbstractHistoryRepository;
import ma.sir.tnb.bean.history.RedevableHistory;
import org.springframework.stereotype.Repository;

@Repository
public interface RedevableHistoryDao extends AbstractHistoryRepository<RedevableHistory,Long> {

}
