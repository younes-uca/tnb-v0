package  ma.sir.tnb.ws.facade.admin;


import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import ma.sir.tnb.bean.core.TauxTaxTnb;
import ma.sir.tnb.bean.history.TauxTaxTnbHistory;
import ma.sir.tnb.dao.criteria.core.TauxTaxTnbCriteria;
import ma.sir.tnb.dao.criteria.history.TauxTaxTnbHistoryCriteria;
import ma.sir.tnb.service.facade.admin.TauxTaxTnbAdminService;
import ma.sir.tnb.ws.converter.TauxTaxTnbConverter;
import ma.sir.tnb.ws.dto.TauxTaxTnbDto;
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

@Api("Manages tauxTaxTnb services")
@RestController
@RequestMapping("/api/admin/tauxTaxTnb/")
public class TauxTaxTnbRestAdmin  extends AbstractController<TauxTaxTnb, TauxTaxTnbDto, TauxTaxTnbHistory, TauxTaxTnbCriteria, TauxTaxTnbHistoryCriteria, TauxTaxTnbAdminService, TauxTaxTnbConverter> {



    @ApiOperation("upload one tauxTaxTnb")
    @RequestMapping(value = "upload", method = RequestMethod.POST, consumes = "multipart/form-data")
    public ResponseEntity<FileTempDto> uploadFileAndGetChecksum(@RequestBody MultipartFile file) throws Exception {
        return super.uploadFileAndGetChecksum(file);
    }
    @ApiOperation("upload multiple tauxTaxTnbs")
    @RequestMapping(value = "upload-multiple", method = RequestMethod.POST, consumes = "multipart/form-data")
    public ResponseEntity<List<FileTempDto>> uploadMultipleFileAndGetChecksum(@RequestBody MultipartFile[] files) throws Exception {
        return super.uploadMultipleFileAndGetChecksum(files);
    }

    @ApiOperation("Finds a list of all tauxTaxTnbs")
    @GetMapping("")
    public ResponseEntity<List<TauxTaxTnbDto>> findAll() throws Exception {
        return super.findAll();
    }


    @ApiOperation("Finds a tauxTaxTnb by id")
    @GetMapping("id/{id}")
    public ResponseEntity<TauxTaxTnbDto> findById(@PathVariable Long id, String[] includes, String[] excludes) throws Exception {
        return super.findById(id, includes, excludes);
    }
    @ApiOperation("Saves the specified  tauxTaxTnb")
    @PostMapping("")
    public ResponseEntity<TauxTaxTnbDto> save(@RequestBody TauxTaxTnbDto dto) throws Exception {
        return super.save(dto);
    }

    @ApiOperation("Updates the specified  tauxTaxTnb")
    @PutMapping("")
    public ResponseEntity<TauxTaxTnbDto> update(@RequestBody TauxTaxTnbDto dto) throws Exception {
        return super.update(dto);
    }

    @ApiOperation("Delete list of tauxTaxTnb")
    @PostMapping("multiple")
    public ResponseEntity<List<TauxTaxTnbDto>> delete(@RequestBody List<TauxTaxTnbDto> listToDelete) throws Exception {
        return super.delete(listToDelete);
    }
    @ApiOperation("Delete the specified tauxTaxTnb")
    @DeleteMapping("")
    public ResponseEntity<TauxTaxTnbDto> delete(@RequestBody TauxTaxTnbDto dto) throws Exception {
            return super.delete(dto);
    }

    @ApiOperation("Delete the specified tauxTaxTnb")
    @DeleteMapping("id/{id}")
    public ResponseEntity<Long> deleteById(@PathVariable Long id) throws Exception {
        return super.deleteById(id);
    }
    @ApiOperation("Delete multiple tauxTaxTnbs by ids")
    @DeleteMapping("multiple/id")
    public ResponseEntity<List<Long>> deleteByIdIn(@RequestBody List<Long> ids) throws Exception {
            return super.deleteByIdIn(ids);
     }


    @ApiOperation("find by categorieTerrain id")
    @GetMapping("categorieTerrain/id/{id}")
    public List<TauxTaxTnb> findByCategorieTerrainId(@PathVariable Long id){
        return service.findByCategorieTerrainId(id);
    }
    @ApiOperation("delete by categorieTerrain id")
    @DeleteMapping("categorieTerrain/id/{id}")
    public int deleteByCategorieTerrainId(@PathVariable Long id){
        return service.deleteByCategorieTerrainId(id);
    }
    @ApiOperation("Finds tauxTaxTnbs by criteria")
    @PostMapping("find-by-criteria")
    public ResponseEntity<List<TauxTaxTnbDto>> findByCriteria(@RequestBody TauxTaxTnbCriteria criteria) throws Exception {
        return super.findByCriteria(criteria);
    }

    @ApiOperation("Finds paginated tauxTaxTnbs by criteria")
    @PostMapping("find-paginated-by-criteria")
    public ResponseEntity<PaginatedList> findPaginatedByCriteria(@RequestBody TauxTaxTnbCriteria criteria) throws Exception {
        return super.findPaginatedByCriteria(criteria);
    }

    @ApiOperation("Exports tauxTaxTnbs by criteria")
    @PostMapping("export")
    public ResponseEntity<InputStreamResource> export(@RequestBody TauxTaxTnbCriteria criteria) throws Exception {
        return super.export(criteria);
    }

    @ApiOperation("Gets tauxTaxTnb data size by criteria")
    @PostMapping("data-size-by-criteria")
    public ResponseEntity<Integer> getDataSize(@RequestBody TauxTaxTnbCriteria criteria) throws Exception {
        return super.getDataSize(criteria);
    }

    @ApiOperation("Gets tauxTaxTnb history by id")
    @GetMapping("history/id/{id}")
    public ResponseEntity<AuditEntityDto> findHistoryById(@PathVariable("id") Long id) throws Exception {
        return super.findHistoryById(id);
    }

    @ApiOperation("Gets tauxTaxTnb paginated history by criteria")
    @PostMapping("history-paginated-by-criteria")
    public ResponseEntity<PaginatedList> findHistoryPaginatedByCriteria(@RequestBody TauxTaxTnbHistoryCriteria criteria) throws Exception {
        return super.findHistoryPaginatedByCriteria(criteria);
    }

    @ApiOperation("Exports tauxTaxTnb history by criteria")
    @PostMapping("export-history")
    public ResponseEntity<InputStreamResource> exportHistory(@RequestBody TauxTaxTnbHistoryCriteria criteria) throws Exception {
        return super.exportHistory(criteria);
    }

    @ApiOperation("Gets tauxTaxTnb history data size by criteria")
    @PostMapping("history-data-size")
    public ResponseEntity<Integer> getHistoryDataSize(@RequestBody TauxTaxTnbHistoryCriteria criteria) throws Exception {
        return super.getHistoryDataSize(criteria);
    }
    public TauxTaxTnbRestAdmin (TauxTaxTnbAdminService service, TauxTaxTnbConverter converter) {
        super(service, converter);
    }


}