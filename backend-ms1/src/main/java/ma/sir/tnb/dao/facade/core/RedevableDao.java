package ma.sir.tnb.dao.facade.core;

import org.springframework.data.jpa.repository.Query;
import ma.sir.tnb.zynerator.repository.AbstractRepository;
import ma.sir.tnb.bean.core.Redevable;
import org.springframework.stereotype.Repository;
import java.util.List;


@Repository
public interface RedevableDao extends AbstractRepository<Redevable,Long>  {


    @Query("SELECT NEW Redevable(item.id,item.cin) FROM Redevable item")
    List<Redevable> findAllOptimized();
}
