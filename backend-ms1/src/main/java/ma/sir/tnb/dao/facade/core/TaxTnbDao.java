package ma.sir.tnb.dao.facade.core;

import ma.sir.tnb.zynerator.repository.AbstractRepository;
import ma.sir.tnb.bean.core.TaxTnb;
import org.springframework.stereotype.Repository;
import java.util.List;


@Repository
public interface TaxTnbDao extends AbstractRepository<TaxTnb,Long>  {

    List<TaxTnb> findByRedevableId(Long id);
    int deleteByRedevableId(Long id);
    List<TaxTnb> findByTerrainId(Long id);
    int deleteByTerrainId(Long id);
    List<TaxTnb> findByTauxTaxTnbId(Long id);
    int deleteByTauxTaxTnbId(Long id);

}
