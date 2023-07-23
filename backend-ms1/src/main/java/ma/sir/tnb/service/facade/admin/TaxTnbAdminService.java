package ma.sir.tnb.service.facade.admin;

import java.util.List;
import ma.sir.tnb.bean.core.TaxTnb;
import ma.sir.tnb.dao.criteria.core.TaxTnbCriteria;
import ma.sir.tnb.dao.criteria.history.TaxTnbHistoryCriteria;
import ma.sir.tnb.zynerator.service.IService;


public interface TaxTnbAdminService extends  IService<TaxTnb,TaxTnbCriteria, TaxTnbHistoryCriteria>  {

    List<TaxTnb> findByRedevableId(Long id);
    int deleteByRedevableId(Long id);
    List<TaxTnb> findByTerrainId(Long id);
    int deleteByTerrainId(Long id);
    List<TaxTnb> findByTauxTaxTnbId(Long id);
    int deleteByTauxTaxTnbId(Long id);



}
