package ma.sir.tnb.dao.facade.core;

import org.springframework.data.jpa.repository.Query;
import ma.sir.tnb.zynerator.repository.AbstractRepository;
import ma.sir.tnb.bean.core.CategorieTerrain;
import org.springframework.stereotype.Repository;
import ma.sir.tnb.bean.core.CategorieTerrain;
import java.util.List;


@Repository
public interface CategorieTerrainDao extends AbstractRepository<CategorieTerrain,Long>  {
    CategorieTerrain findByCode(String code);
    int deleteByCode(String code);


    @Query("SELECT NEW CategorieTerrain(item.id,item.libelle) FROM CategorieTerrain item")
    List<CategorieTerrain> findAllOptimized();
}
