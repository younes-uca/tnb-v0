package ma.sir.tnb.dao.facade.core;

import org.springframework.data.jpa.repository.Query;
import ma.sir.tnb.zynerator.repository.AbstractRepository;
import ma.sir.tnb.bean.core.Terrain;
import org.springframework.stereotype.Repository;
import ma.sir.tnb.bean.core.Terrain;
import java.util.List;


@Repository
public interface TerrainDao extends AbstractRepository<Terrain,Long>  {
    Terrain findByRef(String ref);
    int deleteByRef(String ref);

    List<Terrain> findByCategorieTerrainId(Long id);
    int deleteByCategorieTerrainId(Long id);
    List<Terrain> findByRedevableId(Long id);
    int deleteByRedevableId(Long id);

    @Query("SELECT NEW Terrain(item.id,item.ref) FROM Terrain item")
    List<Terrain> findAllOptimized();
}
