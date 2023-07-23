package ma.sir.tnb.service.facade.admin;

import java.util.List;
import ma.sir.tnb.bean.core.Terrain;
import ma.sir.tnb.dao.criteria.core.TerrainCriteria;
import ma.sir.tnb.dao.criteria.history.TerrainHistoryCriteria;
import ma.sir.tnb.zynerator.service.IService;

import ma.sir.tnb.ws.dto.TerrainDto;
import org.springframework.http.HttpEntity;

public interface TerrainAdminService extends  IService<Terrain,TerrainCriteria, TerrainHistoryCriteria>  {

    List<Terrain> findByCategorieTerrainId(Long id);
    int deleteByCategorieTerrainId(Long id);
    List<Terrain> findByRedevableId(Long id);
    int deleteByRedevableId(Long id);

    HttpEntity<byte[]> createPdf(TerrainDto dto) throws Exception;


}
