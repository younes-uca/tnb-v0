package ma.sir.tnb.service.facade.admin;

import java.util.List;
import ma.sir.tnb.bean.core.TauxTaxTnb;
import ma.sir.tnb.dao.criteria.core.TauxTaxTnbCriteria;
import ma.sir.tnb.dao.criteria.history.TauxTaxTnbHistoryCriteria;
import ma.sir.tnb.zynerator.service.IService;


public interface TauxTaxTnbAdminService extends  IService<TauxTaxTnb,TauxTaxTnbCriteria, TauxTaxTnbHistoryCriteria>  {

    List<TauxTaxTnb> findByCategorieTerrainId(Long id);
    int deleteByCategorieTerrainId(Long id);



}
