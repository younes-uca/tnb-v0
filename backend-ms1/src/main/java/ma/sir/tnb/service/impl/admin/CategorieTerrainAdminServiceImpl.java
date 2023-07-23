package ma.sir.tnb.service.impl.admin;

import ma.sir.tnb.bean.core.CategorieTerrain;
import ma.sir.tnb.bean.history.CategorieTerrainHistory;
import ma.sir.tnb.dao.criteria.core.CategorieTerrainCriteria;
import ma.sir.tnb.dao.criteria.history.CategorieTerrainHistoryCriteria;
import ma.sir.tnb.dao.facade.core.CategorieTerrainDao;
import ma.sir.tnb.dao.facade.history.CategorieTerrainHistoryDao;
import ma.sir.tnb.dao.specification.core.CategorieTerrainSpecification;
import ma.sir.tnb.service.facade.admin.CategorieTerrainAdminService;
import ma.sir.tnb.zynerator.service.AbstractServiceImpl;
import ma.sir.tnb.zynerator.util.ListUtil;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.ArrayList;







import java.util.List;
@Service
public class CategorieTerrainAdminServiceImpl extends AbstractServiceImpl<CategorieTerrain,CategorieTerrainHistory, CategorieTerrainCriteria, CategorieTerrainHistoryCriteria, CategorieTerrainDao,
CategorieTerrainHistoryDao> implements CategorieTerrainAdminService {



    public CategorieTerrain findByReferenceEntity(CategorieTerrain t){
        return  dao.findByCode(t.getCode());
    }





    public void configure() {
        super.configure(CategorieTerrain.class,CategorieTerrainHistory.class, CategorieTerrainHistoryCriteria.class, CategorieTerrainSpecification.class);
    }


    public CategorieTerrainAdminServiceImpl(CategorieTerrainDao dao, CategorieTerrainHistoryDao historyDao) {
        super(dao, historyDao);
    }

}