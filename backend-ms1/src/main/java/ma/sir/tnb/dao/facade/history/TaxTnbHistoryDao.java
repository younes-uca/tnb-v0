package ma.sir.tnb.dao.facade.history;

import ma.sir.tnb.zynerator.repository.AbstractHistoryRepository;
import ma.sir.tnb.bean.history.TaxTnbHistory;
import org.springframework.stereotype.Repository;

@Repository
public interface TaxTnbHistoryDao extends AbstractHistoryRepository<TaxTnbHistory,Long> {

}
