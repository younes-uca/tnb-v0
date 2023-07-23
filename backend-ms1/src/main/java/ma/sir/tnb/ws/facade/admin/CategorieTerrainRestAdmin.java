package  ma.sir.tnb.ws.facade.admin;


import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import ma.sir.tnb.bean.core.CategorieTerrain;
import ma.sir.tnb.bean.history.CategorieTerrainHistory;
import ma.sir.tnb.dao.criteria.core.CategorieTerrainCriteria;
import ma.sir.tnb.dao.criteria.history.CategorieTerrainHistoryCriteria;
import ma.sir.tnb.service.facade.admin.CategorieTerrainAdminService;
import ma.sir.tnb.ws.converter.CategorieTerrainConverter;
import ma.sir.tnb.ws.dto.CategorieTerrainDto;
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

@Api("Manages categorieTerrain services")
@RestController
@RequestMapping("/api/admin/categorieTerrain/")
public class CategorieTerrainRestAdmin  extends AbstractController<CategorieTerrain, CategorieTerrainDto, CategorieTerrainHistory, CategorieTerrainCriteria, CategorieTerrainHistoryCriteria, CategorieTerrainAdminService, CategorieTerrainConverter> {



    @ApiOperation("upload one categorieTerrain")
    @RequestMapping(value = "upload", method = RequestMethod.POST, consumes = "multipart/form-data")
    public ResponseEntity<FileTempDto> uploadFileAndGetChecksum(@RequestBody MultipartFile file) throws Exception {
        return super.uploadFileAndGetChecksum(file);
    }
    @ApiOperation("upload multiple categorieTerrains")
    @RequestMapping(value = "upload-multiple", method = RequestMethod.POST, consumes = "multipart/form-data")
    public ResponseEntity<List<FileTempDto>> uploadMultipleFileAndGetChecksum(@RequestBody MultipartFile[] files) throws Exception {
        return super.uploadMultipleFileAndGetChecksum(files);
    }

    @ApiOperation("Finds a list of all categorieTerrains")
    @GetMapping("")
    public ResponseEntity<List<CategorieTerrainDto>> findAll() throws Exception {
        return super.findAll();
    }

    @ApiOperation("Finds an optimized list of all categorieTerrains")
    @GetMapping("optimized")
    public ResponseEntity<List<CategorieTerrainDto>> findAllOptimized() throws Exception {
        return super.findAllOptimized();
    }

    @ApiOperation("Finds a categorieTerrain by id")
    @GetMapping("id/{id}")
    public ResponseEntity<CategorieTerrainDto> findById(@PathVariable Long id, String[] includes, String[] excludes) throws Exception {
        return super.findById(id, includes, excludes);
    }
    @ApiOperation("Saves the specified  categorieTerrain")
    @PostMapping("")
    public ResponseEntity<CategorieTerrainDto> save(@RequestBody CategorieTerrainDto dto) throws Exception {
        return super.save(dto);
    }

    @ApiOperation("Updates the specified  categorieTerrain")
    @PutMapping("")
    public ResponseEntity<CategorieTerrainDto> update(@RequestBody CategorieTerrainDto dto) throws Exception {
        return super.update(dto);
    }

    @ApiOperation("Delete list of categorieTerrain")
    @PostMapping("multiple")
    public ResponseEntity<List<CategorieTerrainDto>> delete(@RequestBody List<CategorieTerrainDto> listToDelete) throws Exception {
        return super.delete(listToDelete);
    }
    @ApiOperation("Delete the specified categorieTerrain")
    @DeleteMapping("")
    public ResponseEntity<CategorieTerrainDto> delete(@RequestBody CategorieTerrainDto dto) throws Exception {
            return super.delete(dto);
    }

    @ApiOperation("Delete the specified categorieTerrain")
    @DeleteMapping("id/{id}")
    public ResponseEntity<Long> deleteById(@PathVariable Long id) throws Exception {
        return super.deleteById(id);
    }
    @ApiOperation("Delete multiple categorieTerrains by ids")
    @DeleteMapping("multiple/id")
    public ResponseEntity<List<Long>> deleteByIdIn(@RequestBody List<Long> ids) throws Exception {
            return super.deleteByIdIn(ids);
     }


    @ApiOperation("Finds categorieTerrains by criteria")
    @PostMapping("find-by-criteria")
    public ResponseEntity<List<CategorieTerrainDto>> findByCriteria(@RequestBody CategorieTerrainCriteria criteria) throws Exception {
        return super.findByCriteria(criteria);
    }

    @ApiOperation("Finds paginated categorieTerrains by criteria")
    @PostMapping("find-paginated-by-criteria")
    public ResponseEntity<PaginatedList> findPaginatedByCriteria(@RequestBody CategorieTerrainCriteria criteria) throws Exception {
        return super.findPaginatedByCriteria(criteria);
    }

    @ApiOperation("Exports categorieTerrains by criteria")
    @PostMapping("export")
    public ResponseEntity<InputStreamResource> export(@RequestBody CategorieTerrainCriteria criteria) throws Exception {
        return super.export(criteria);
    }

    @ApiOperation("Gets categorieTerrain data size by criteria")
    @PostMapping("data-size-by-criteria")
    public ResponseEntity<Integer> getDataSize(@RequestBody CategorieTerrainCriteria criteria) throws Exception {
        return super.getDataSize(criteria);
    }

    @ApiOperation("Gets categorieTerrain history by id")
    @GetMapping("history/id/{id}")
    public ResponseEntity<AuditEntityDto> findHistoryById(@PathVariable("id") Long id) throws Exception {
        return super.findHistoryById(id);
    }

    @ApiOperation("Gets categorieTerrain paginated history by criteria")
    @PostMapping("history-paginated-by-criteria")
    public ResponseEntity<PaginatedList> findHistoryPaginatedByCriteria(@RequestBody CategorieTerrainHistoryCriteria criteria) throws Exception {
        return super.findHistoryPaginatedByCriteria(criteria);
    }

    @ApiOperation("Exports categorieTerrain history by criteria")
    @PostMapping("export-history")
    public ResponseEntity<InputStreamResource> exportHistory(@RequestBody CategorieTerrainHistoryCriteria criteria) throws Exception {
        return super.exportHistory(criteria);
    }

    @ApiOperation("Gets categorieTerrain history data size by criteria")
    @PostMapping("history-data-size")
    public ResponseEntity<Integer> getHistoryDataSize(@RequestBody CategorieTerrainHistoryCriteria criteria) throws Exception {
        return super.getHistoryDataSize(criteria);
    }
    public CategorieTerrainRestAdmin (CategorieTerrainAdminService service, CategorieTerrainConverter converter) {
        super(service, converter);
    }


}