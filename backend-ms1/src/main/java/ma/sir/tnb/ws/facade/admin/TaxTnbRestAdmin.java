package  ma.sir.tnb.ws.facade.admin;


import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import ma.sir.tnb.bean.core.TaxTnb;
import ma.sir.tnb.bean.history.TaxTnbHistory;
import ma.sir.tnb.dao.criteria.core.TaxTnbCriteria;
import ma.sir.tnb.dao.criteria.history.TaxTnbHistoryCriteria;
import ma.sir.tnb.service.facade.admin.TaxTnbAdminService;
import ma.sir.tnb.ws.converter.TaxTnbConverter;
import ma.sir.tnb.ws.dto.TaxTnbDto;
import ma.sir.tnb.zynerator.controller.AbstractController;
import ma.sir.tnb.zynerator.dto.AuditEntityDto;
import ma.sir.tnb.zynerator.util.PaginatedList;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import ma.sir.tnb.zynerator.process.Result;


import org.springframework.web.multipart.MultipartFile;
import ma.sir.tnb.zynerator.dto.FileTempDto;

@Api("Manages taxTnb services")
@RestController
@RequestMapping("/api/admin/taxTnb/")
public class TaxTnbRestAdmin  extends AbstractController<TaxTnb, TaxTnbDto, TaxTnbHistory, TaxTnbCriteria, TaxTnbHistoryCriteria, TaxTnbAdminService, TaxTnbConverter> {



    @ApiOperation("upload one taxTnb")
    @RequestMapping(value = "upload", method = RequestMethod.POST, consumes = "multipart/form-data")
    public ResponseEntity<FileTempDto> uploadFileAndGetChecksum(@RequestBody MultipartFile file) throws Exception {
        return super.uploadFileAndGetChecksum(file);
    }
    @ApiOperation("upload multiple taxTnbs")
    @RequestMapping(value = "upload-multiple", method = RequestMethod.POST, consumes = "multipart/form-data")
    public ResponseEntity<List<FileTempDto>> uploadMultipleFileAndGetChecksum(@RequestBody MultipartFile[] files) throws Exception {
        return super.uploadMultipleFileAndGetChecksum(files);
    }

    @ApiOperation("Finds a list of all taxTnbs")
    @GetMapping("")
    public ResponseEntity<List<TaxTnbDto>> findAll() throws Exception {
        return super.findAll();
    }


    @ApiOperation("Finds a taxTnb by id")
    @GetMapping("id/{id}")
    public ResponseEntity<TaxTnbDto> findById(@PathVariable Long id, String[] includes, String[] excludes) throws Exception {
        return super.findById(id, includes, excludes);
    }
    @ApiOperation("Saves the specified  taxTnb")
    @PostMapping("")
    public ResponseEntity<TaxTnbDto> save(@RequestBody TaxTnbDto dto) throws Exception {
        return super.save(dto);
    }

    @ApiOperation("Updates the specified  taxTnb")
    @PutMapping("")
    public ResponseEntity<TaxTnbDto> update(@RequestBody TaxTnbDto dto) throws Exception {
        return super.update(dto);
    }

    @ApiOperation("Delete list of taxTnb")
    @PostMapping("multiple")
    public ResponseEntity<List<TaxTnbDto>> delete(@RequestBody List<TaxTnbDto> listToDelete) throws Exception {
        return super.delete(listToDelete);
    }
    @ApiOperation("Delete the specified taxTnb")
    @DeleteMapping("")
    public ResponseEntity<TaxTnbDto> delete(@RequestBody TaxTnbDto dto) throws Exception {
            return super.delete(dto);
    }

    @ApiOperation("Delete the specified taxTnb")
    @DeleteMapping("id/{id}")
    public ResponseEntity<Long> deleteById(@PathVariable Long id) throws Exception {
        return super.deleteById(id);
    }
    @ApiOperation("Delete multiple taxTnbs by ids")
    @DeleteMapping("multiple/id")
    public ResponseEntity<List<Long>> deleteByIdIn(@RequestBody List<Long> ids) throws Exception {
            return super.deleteByIdIn(ids);
     }


    @ApiOperation("find by redevable id")
    @GetMapping("redevable/id/{id}")
    public List<TaxTnb> findByRedevableId(@PathVariable Long id){
        return service.findByRedevableId(id);
    }
    @ApiOperation("delete by redevable id")
    @DeleteMapping("redevable/id/{id}")
    public int deleteByRedevableId(@PathVariable Long id){
        return service.deleteByRedevableId(id);
    }
    @ApiOperation("find by terrain id")
    @GetMapping("terrain/id/{id}")
    public List<TaxTnb> findByTerrainId(@PathVariable Long id){
        return service.findByTerrainId(id);
    }
    @ApiOperation("delete by terrain id")
    @DeleteMapping("terrain/id/{id}")
    public int deleteByTerrainId(@PathVariable Long id){
        return service.deleteByTerrainId(id);
    }
    @ApiOperation("find by tauxTaxTnb id")
    @GetMapping("tauxTaxTnb/id/{id}")
    public List<TaxTnb> findByTauxTaxTnbId(@PathVariable Long id){
        return service.findByTauxTaxTnbId(id);
    }
    @ApiOperation("delete by tauxTaxTnb id")
    @DeleteMapping("tauxTaxTnb/id/{id}")
    public int deleteByTauxTaxTnbId(@PathVariable Long id){
        return service.deleteByTauxTaxTnbId(id);
    }
    @ApiOperation("Finds taxTnbs by criteria")
    @PostMapping("find-by-criteria")
    public ResponseEntity<List<TaxTnbDto>> findByCriteria(@RequestBody TaxTnbCriteria criteria) throws Exception {
        return super.findByCriteria(criteria);
    }

    @ApiOperation("Finds paginated taxTnbs by criteria")
    @PostMapping("find-paginated-by-criteria")
    public ResponseEntity<PaginatedList> findPaginatedByCriteria(@RequestBody TaxTnbCriteria criteria) throws Exception {
        return super.findPaginatedByCriteria(criteria);
    }

    @ApiOperation("Exports taxTnbs by criteria")
    @PostMapping("export")
    public ResponseEntity<InputStreamResource> export(@RequestBody TaxTnbCriteria criteria) throws Exception {
        return super.export(criteria);
    }

    @ApiOperation("Gets taxTnb data size by criteria")
    @PostMapping("data-size-by-criteria")
    public ResponseEntity<Integer> getDataSize(@RequestBody TaxTnbCriteria criteria) throws Exception {
        return super.getDataSize(criteria);
    }

    @ApiOperation("Gets taxTnb history by id")
    @GetMapping("history/id/{id}")
    public ResponseEntity<AuditEntityDto> findHistoryById(@PathVariable("id") Long id) throws Exception {
        return super.findHistoryById(id);
    }

    @ApiOperation("Gets taxTnb paginated history by criteria")
    @PostMapping("history-paginated-by-criteria")
    public ResponseEntity<PaginatedList> findHistoryPaginatedByCriteria(@RequestBody TaxTnbHistoryCriteria criteria) throws Exception {
        return super.findHistoryPaginatedByCriteria(criteria);
    }

    @ApiOperation("Exports taxTnb history by criteria")
    @PostMapping("export-history")
    public ResponseEntity<InputStreamResource> exportHistory(@RequestBody TaxTnbHistoryCriteria criteria) throws Exception {
        return super.exportHistory(criteria);
    }

    @ApiOperation("Gets taxTnb history data size by criteria")
    @PostMapping("history-data-size")
    public ResponseEntity<Integer> getHistoryDataSize(@RequestBody TaxTnbHistoryCriteria criteria) throws Exception {
        return super.getHistoryDataSize(criteria);
    }
    public TaxTnbRestAdmin (TaxTnbAdminService service, TaxTnbConverter converter) {
        super(service, converter);
    }


}