package ma.sir.tnb.dao.facade.history;

import ma.sir.tnb.zynerator.repository.AbstractHistoryRepository;
import ma.sir.tnb.bean.history.TauxTaxTnbHistory;
import org.springframework.stereotype.Repository;

@Repository
public interface TauxTaxTnbHistoryDao extends AbstractHistoryRepository<TauxTaxTnbHistory,Long> {

}
