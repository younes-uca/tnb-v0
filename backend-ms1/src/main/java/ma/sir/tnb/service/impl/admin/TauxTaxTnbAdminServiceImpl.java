package ma.sir.tnb.service.impl.admin;

import ma.sir.tnb.bean.core.TauxTaxTnb;
import ma.sir.tnb.bean.history.TauxTaxTnbHistory;
import ma.sir.tnb.dao.criteria.core.TauxTaxTnbCriteria;
import ma.sir.tnb.dao.criteria.history.TauxTaxTnbHistoryCriteria;
import ma.sir.tnb.dao.facade.core.TauxTaxTnbDao;
import ma.sir.tnb.dao.facade.history.TauxTaxTnbHistoryDao;
import ma.sir.tnb.dao.specification.core.TauxTaxTnbSpecification;
import ma.sir.tnb.service.facade.admin.TauxTaxTnbAdminService;
import ma.sir.tnb.zynerator.service.AbstractServiceImpl;
import ma.sir.tnb.zynerator.util.ListUtil;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.ArrayList;


import org.springframework.beans.factory.annotation.Autowired;


import ma.sir.tnb.service.facade.admin.CategorieTerrainAdminService ;



import java.util.List;
@Service
public class TauxTaxTnbAdminServiceImpl extends AbstractServiceImpl<TauxTaxTnb,TauxTaxTnbHistory, TauxTaxTnbCriteria, TauxTaxTnbHistoryCriteria, TauxTaxTnbDao,
TauxTaxTnbHistoryDao> implements TauxTaxTnbAdminService {




    public List<TauxTaxTnb> findByCategorieTerrainId(Long id){
        return dao.findByCategorieTerrainId(id);
    }
    public int deleteByCategorieTerrainId(Long id){
        return dao.deleteByCategorieTerrainId(id);
    }




    public void configure() {
        super.configure(TauxTaxTnb.class,TauxTaxTnbHistory.class, TauxTaxTnbHistoryCriteria.class, TauxTaxTnbSpecification.class);
    }

    @Autowired
    private CategorieTerrainAdminService categorieTerrainService ;

    public TauxTaxTnbAdminServiceImpl(TauxTaxTnbDao dao, TauxTaxTnbHistoryDao historyDao) {
        super(dao, historyDao);
    }

}