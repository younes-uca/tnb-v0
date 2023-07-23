package ma.sir.tnb.zynerator.service;

import ma.sir.tnb.zynerator.audit.AuditBusinessObjectEnhanced;
import ma.sir.tnb.zynerator.criteria.BaseCriteria;
import ma.sir.tnb.zynerator.history.HistBusinessObject;
import ma.sir.tnb.zynerator.history.HistCriteria;
import ma.sir.tnb.zynerator.repository.AbstractHistoryRepository;
import ma.sir.tnb.zynerator.repository.AbstractRepository;

public abstract class AbstractReferentielServiceImpl<T extends AuditBusinessObjectEnhanced, H extends HistBusinessObject, CRITERIA extends BaseCriteria, HC extends HistCriteria, REPO extends AbstractRepository<T, Long>, HISTREPO extends AbstractHistoryRepository<H, Long>> extends AbstractServiceImpl<T, H, CRITERIA, HC, REPO, HISTREPO> {

    public AbstractReferentielServiceImpl(REPO dao, HISTREPO historyRepository) {
    super(dao, historyRepository);
    }

}