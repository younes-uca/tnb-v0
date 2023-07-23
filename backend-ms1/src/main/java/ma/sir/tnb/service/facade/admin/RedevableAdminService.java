package ma.sir.tnb.service.facade.admin;

import java.util.List;
import ma.sir.tnb.bean.core.Redevable;
import ma.sir.tnb.dao.criteria.core.RedevableCriteria;
import ma.sir.tnb.dao.criteria.history.RedevableHistoryCriteria;
import ma.sir.tnb.zynerator.service.IService;

import ma.sir.tnb.ws.dto.RedevableDto;
import org.springframework.http.HttpEntity;

public interface RedevableAdminService extends  IService<Redevable,RedevableCriteria, RedevableHistoryCriteria>  {


    HttpEntity<byte[]> createPdf(RedevableDto dto) throws Exception;


}
