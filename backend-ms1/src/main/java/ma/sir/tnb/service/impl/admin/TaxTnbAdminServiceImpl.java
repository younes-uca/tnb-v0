package ma.sir.tnb.service.impl.admin;

import ma.sir.tnb.bean.core.TaxTnb;
import ma.sir.tnb.bean.history.TaxTnbHistory;
import ma.sir.tnb.dao.criteria.core.TaxTnbCriteria;
import ma.sir.tnb.dao.criteria.history.TaxTnbHistoryCriteria;
import ma.sir.tnb.dao.facade.core.TaxTnbDao;
import ma.sir.tnb.dao.facade.history.TaxTnbHistoryDao;
import ma.sir.tnb.dao.specification.core.TaxTnbSpecification;
import ma.sir.tnb.service.facade.admin.TaxTnbAdminService;
import ma.sir.tnb.zynerator.service.AbstractServiceImpl;
import ma.sir.tnb.zynerator.util.ListUtil;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.ArrayList;


import org.springframework.beans.factory.annotation.Autowired;


import ma.sir.tnb.service.facade.admin.TerrainAdminService ;
import ma.sir.tnb.service.facade.admin.RedevableAdminService ;
import ma.sir.tnb.service.facade.admin.TauxTaxTnbAdminService ;



import java.util.List;
@Service
public class TaxTnbAdminServiceImpl extends AbstractServiceImpl<TaxTnb,TaxTnbHistory, TaxTnbCriteria, TaxTnbHistoryCriteria, TaxTnbDao,
TaxTnbHistoryDao> implements TaxTnbAdminService {




    public List<TaxTnb> findByRedevableId(Long id){
        return dao.findByRedevableId(id);
    }
    public int deleteByRedevableId(Long id){
        return dao.deleteByRedevableId(id);
    }
    public List<TaxTnb> findByTerrainId(Long id){
        return dao.findByTerrainId(id);
    }
    public int deleteByTerrainId(Long id){
        return dao.deleteByTerrainId(id);
    }
    public List<TaxTnb> findByTauxTaxTnbId(Long id){
        return dao.findByTauxTaxTnbId(id);
    }
    public int deleteByTauxTaxTnbId(Long id){
        return dao.deleteByTauxTaxTnbId(id);
    }




    public void configure() {
        super.configure(TaxTnb.class,TaxTnbHistory.class, TaxTnbHistoryCriteria.class, TaxTnbSpecification.class);
    }

    @Autowired
    private TerrainAdminService terrainService ;
    @Autowired
    private RedevableAdminService redevableService ;
    @Autowired
    private TauxTaxTnbAdminService tauxTaxTnbService ;

    public TaxTnbAdminServiceImpl(TaxTnbDao dao, TaxTnbHistoryDao historyDao) {
        super(dao, historyDao);
    }

}