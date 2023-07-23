package  ma.sir.tnb.ws.facade.admin;


import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import ma.sir.tnb.bean.core.Redevable;
import ma.sir.tnb.bean.history.RedevableHistory;
import ma.sir.tnb.dao.criteria.core.RedevableCriteria;
import ma.sir.tnb.dao.criteria.history.RedevableHistoryCriteria;
import ma.sir.tnb.service.facade.admin.RedevableAdminService;
import ma.sir.tnb.ws.converter.RedevableConverter;
import ma.sir.tnb.ws.dto.RedevableDto;
import ma.sir.tnb.zynerator.controller.AbstractController;
import ma.sir.tnb.zynerator.dto.AuditEntityDto;
import ma.sir.tnb.zynerator.util.PaginatedList;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import ma.sir.tnb.zynerator.process.Result;

import org.springframework.http.HttpEntity;

import org.springframework.web.multipart.MultipartFile;
import ma.sir.tnb.zynerator.dto.FileTempDto;

@Api("Manages redevable services")
@RestController
@RequestMapping("/api/admin/redevable/")
public class RedevableRestAdmin  extends AbstractController<Redevable, RedevableDto, RedevableHistory, RedevableCriteria, RedevableHistoryCriteria, RedevableAdminService, RedevableConverter> {



    @ApiOperation("Exporte pdf")
    @PostMapping("exportPdf/")
    public HttpEntity<byte[]> createPdf(@RequestBody RedevableDto dto) throws Exception{
        return service.createPdf(dto);
    }
    @ApiOperation("upload one redevable")
    @RequestMapping(value = "upload", method = RequestMethod.POST, consumes = "multipart/form-data")
    public ResponseEntity<FileTempDto> uploadFileAndGetChecksum(@RequestBody MultipartFile file) throws Exception {
        return super.uploadFileAndGetChecksum(file);
    }
    @ApiOperation("upload multiple redevables")
    @RequestMapping(value = "upload-multiple", method = RequestMethod.POST, consumes = "multipart/form-data")
    public ResponseEntity<List<FileTempDto>> uploadMultipleFileAndGetChecksum(@RequestBody MultipartFile[] files) throws Exception {
        return super.uploadMultipleFileAndGetChecksum(files);
    }

    @ApiOperation("Finds a list of all redevables")
    @GetMapping("")
    public ResponseEntity<List<RedevableDto>> findAll() throws Exception {
        return super.findAll();
    }

    @ApiOperation("Finds an optimized list of all redevables")
    @GetMapping("optimized")
    public ResponseEntity<List<RedevableDto>> findAllOptimized() throws Exception {
        return super.findAllOptimized();
    }

    @ApiOperation("Finds a redevable by id")
    @GetMapping("id/{id}")
    public ResponseEntity<RedevableDto> findById(@PathVariable Long id, String[] includes, String[] excludes) throws Exception {
        return super.findById(id, includes, excludes);
    }
    @ApiOperation("Saves the specified  redevable")
    @PostMapping("")
    public ResponseEntity<RedevableDto> save(@RequestBody RedevableDto dto) throws Exception {
        return super.save(dto);
    }

    @ApiOperation("Updates the specified  redevable")
    @PutMapping("")
    public ResponseEntity<RedevableDto> update(@RequestBody RedevableDto dto) throws Exception {
        return super.update(dto);
    }

    @ApiOperation("Delete list of redevable")
    @PostMapping("multiple")
    public ResponseEntity<List<RedevableDto>> delete(@RequestBody List<RedevableDto> listToDelete) throws Exception {
        return super.delete(listToDelete);
    }
    @ApiOperation("Delete the specified redevable")
    @DeleteMapping("")
    public ResponseEntity<RedevableDto> delete(@RequestBody RedevableDto dto) throws Exception {
            return super.delete(dto);
    }

    @ApiOperation("Delete the specified redevable")
    @DeleteMapping("id/{id}")
    public ResponseEntity<Long> deleteById(@PathVariable Long id) throws Exception {
        return super.deleteById(id);
    }
    @ApiOperation("Delete multiple redevables by ids")
    @DeleteMapping("multiple/id")
    public ResponseEntity<List<Long>> deleteByIdIn(@RequestBody List<Long> ids) throws Exception {
            return super.deleteByIdIn(ids);
     }


    @ApiOperation("Finds redevables by criteria")
    @PostMapping("find-by-criteria")
    public ResponseEntity<List<RedevableDto>> findByCriteria(@RequestBody RedevableCriteria criteria) throws Exception {
        return super.findByCriteria(criteria);
    }

    @ApiOperation("Finds paginated redevables by criteria")
    @PostMapping("find-paginated-by-criteria")
    public ResponseEntity<PaginatedList> findPaginatedByCriteria(@RequestBody RedevableCriteria criteria) throws Exception {
        return super.findPaginatedByCriteria(criteria);
    }

    @ApiOperation("Exports redevables by criteria")
    @PostMapping("export")
    public ResponseEntity<InputStreamResource> export(@RequestBody RedevableCriteria criteria) throws Exception {
        return super.export(criteria);
    }

    @ApiOperation("Gets redevable data size by criteria")
    @PostMapping("data-size-by-criteria")
    public ResponseEntity<Integer> getDataSize(@RequestBody RedevableCriteria criteria) throws Exception {
        return super.getDataSize(criteria);
    }

    @ApiOperation("Gets redevable history by id")
    @GetMapping("history/id/{id}")
    public ResponseEntity<AuditEntityDto> findHistoryById(@PathVariable("id") Long id) throws Exception {
        return super.findHistoryById(id);
    }

    @ApiOperation("Gets redevable paginated history by criteria")
    @PostMapping("history-paginated-by-criteria")
    public ResponseEntity<PaginatedList> findHistoryPaginatedByCriteria(@RequestBody RedevableHistoryCriteria criteria) throws Exception {
        return super.findHistoryPaginatedByCriteria(criteria);
    }

    @ApiOperation("Exports redevable history by criteria")
    @PostMapping("export-history")
    public ResponseEntity<InputStreamResource> exportHistory(@RequestBody RedevableHistoryCriteria criteria) throws Exception {
        return super.exportHistory(criteria);
    }

    @ApiOperation("Gets redevable history data size by criteria")
    @PostMapping("history-data-size")
    public ResponseEntity<Integer> getHistoryDataSize(@RequestBody RedevableHistoryCriteria criteria) throws Exception {
        return super.getHistoryDataSize(criteria);
    }
    public RedevableRestAdmin (RedevableAdminService service, RedevableConverter converter) {
        super(service, converter);
    }


}