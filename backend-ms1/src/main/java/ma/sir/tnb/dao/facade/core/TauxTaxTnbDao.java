package ma.sir.tnb.dao.facade.core;

import ma.sir.tnb.zynerator.repository.AbstractRepository;
import ma.sir.tnb.bean.core.TauxTaxTnb;
import org.springframework.stereotype.Repository;
import java.util.List;


@Repository
public interface TauxTaxTnbDao extends AbstractRepository<TauxTaxTnb,Long>  {

    List<TauxTaxTnb> findByCategorieTerrainId(Long id);
    int deleteByCategorieTerrainId(Long id);

}
