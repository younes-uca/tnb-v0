package  ma.sir.tnb.ws.facade.admin;


import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import ma.sir.tnb.bean.core.Terrain;
import ma.sir.tnb.bean.history.TerrainHistory;
import ma.sir.tnb.dao.criteria.core.TerrainCriteria;
import ma.sir.tnb.dao.criteria.history.TerrainHistoryCriteria;
import ma.sir.tnb.service.facade.admin.TerrainAdminService;
import ma.sir.tnb.ws.converter.TerrainConverter;
import ma.sir.tnb.ws.dto.TerrainDto;
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

@Api("Manages terrain services")
@RestController
@RequestMapping("/api/admin/terrain/")
public class TerrainRestAdmin  extends AbstractController<Terrain, TerrainDto, TerrainHistory, TerrainCriteria, TerrainHistoryCriteria, TerrainAdminService, TerrainConverter> {



    @ApiOperation("Exporte pdf")
    @PostMapping("exportPdf/")
    public HttpEntity<byte[]> createPdf(@RequestBody TerrainDto dto) throws Exception{
        return service.createPdf(dto);
    }
    @ApiOperation("upload one terrain")
    @RequestMapping(value = "upload", method = RequestMethod.POST, consumes = "multipart/form-data")
    public ResponseEntity<FileTempDto> uploadFileAndGetChecksum(@RequestBody MultipartFile file) throws Exception {
        return super.uploadFileAndGetChecksum(file);
    }
    @ApiOperation("upload multiple terrains")
    @RequestMapping(value = "upload-multiple", method = RequestMethod.POST, consumes = "multipart/form-data")
    public ResponseEntity<List<FileTempDto>> uploadMultipleFileAndGetChecksum(@RequestBody MultipartFile[] files) throws Exception {
        return super.uploadMultipleFileAndGetChecksum(files);
    }

    @ApiOperation("Finds a list of all terrains")
    @GetMapping("")
    public ResponseEntity<List<TerrainDto>> findAll() throws Exception {
        return super.findAll();
    }

    @ApiOperation("Finds an optimized list of all terrains")
    @GetMapping("optimized")
    public ResponseEntity<List<TerrainDto>> findAllOptimized() throws Exception {
        return super.findAllOptimized();
    }

    @ApiOperation("Finds a terrain by id")
    @GetMapping("id/{id}")
    public ResponseEntity<TerrainDto> findById(@PathVariable Long id, String[] includes, String[] excludes) throws Exception {
        return super.findById(id, includes, excludes);
    }
    @ApiOperation("Saves the specified  terrain")
    @PostMapping("")
    public ResponseEntity<TerrainDto> save(@RequestBody TerrainDto dto) throws Exception {
        return super.save(dto);
    }

    @ApiOperation("Updates the specified  terrain")
    @PutMapping("")
    public ResponseEntity<TerrainDto> update(@RequestBody TerrainDto dto) throws Exception {
        return super.update(dto);
    }

    @ApiOperation("Delete list of terrain")
    @PostMapping("multiple")
    public ResponseEntity<List<TerrainDto>> delete(@RequestBody List<TerrainDto> listToDelete) throws Exception {
        return super.delete(listToDelete);
    }
    @ApiOperation("Delete the specified terrain")
    @DeleteMapping("")
    public ResponseEntity<TerrainDto> delete(@RequestBody TerrainDto dto) throws Exception {
            return super.delete(dto);
    }

    @ApiOperation("Delete the specified terrain")
    @DeleteMapping("id/{id}")
    public ResponseEntity<Long> deleteById(@PathVariable Long id) throws Exception {
        return super.deleteById(id);
    }
    @ApiOperation("Delete multiple terrains by ids")
    @DeleteMapping("multiple/id")
    public ResponseEntity<List<Long>> deleteByIdIn(@RequestBody List<Long> ids) throws Exception {
            return super.deleteByIdIn(ids);
     }


    @ApiOperation("find by categorieTerrain id")
    @GetMapping("categorieTerrain/id/{id}")
    public List<Terrain> findByCategorieTerrainId(@PathVariable Long id){
        return service.findByCategorieTerrainId(id);
    }
    @ApiOperation("delete by categorieTerrain id")
    @DeleteMapping("categorieTerrain/id/{id}")
    public int deleteByCategorieTerrainId(@PathVariable Long id){
        return service.deleteByCategorieTerrainId(id);
    }
    @ApiOperation("find by redevable id")
    @GetMapping("redevable/id/{id}")
    public List<Terrain> findByRedevableId(@PathVariable Long id){
        return service.findByRedevableId(id);
    }
    @ApiOperation("delete by redevable id")
    @DeleteMapping("redevable/id/{id}")
    public int deleteByRedevableId(@PathVariable Long id){
        return service.deleteByRedevableId(id);
    }
    @ApiOperation("Finds terrains by criteria")
    @PostMapping("find-by-criteria")
    public ResponseEntity<List<TerrainDto>> findByCriteria(@RequestBody TerrainCriteria criteria) throws Exception {
        return super.findByCriteria(criteria);
    }

    @ApiOperation("Finds paginated terrains by criteria")
    @PostMapping("find-paginated-by-criteria")
    public ResponseEntity<PaginatedList> findPaginatedByCriteria(@RequestBody TerrainCriteria criteria) throws Exception {
        return super.findPaginatedByCriteria(criteria);
    }

    @ApiOperation("Exports terrains by criteria")
    @PostMapping("export")
    public ResponseEntity<InputStreamResource> export(@RequestBody TerrainCriteria criteria) throws Exception {
        return super.export(criteria);
    }

    @ApiOperation("Gets terrain data size by criteria")
    @PostMapping("data-size-by-criteria")
    public ResponseEntity<Integer> getDataSize(@RequestBody TerrainCriteria criteria) throws Exception {
        return super.getDataSize(criteria);
    }

    @ApiOperation("Gets terrain history by id")
    @GetMapping("history/id/{id}")
    public ResponseEntity<AuditEntityDto> findHistoryById(@PathVariable("id") Long id) throws Exception {
        return super.findHistoryById(id);
    }

    @ApiOperation("Gets terrain paginated history by criteria")
    @PostMapping("history-paginated-by-criteria")
    public ResponseEntity<PaginatedList> findHistoryPaginatedByCriteria(@RequestBody TerrainHistoryCriteria criteria) throws Exception {
        return super.findHistoryPaginatedByCriteria(criteria);
    }

    @ApiOperation("Exports terrain history by criteria")
    @PostMapping("export-history")
    public ResponseEntity<InputStreamResource> exportHistory(@RequestBody TerrainHistoryCriteria criteria) throws Exception {
        return super.exportHistory(criteria);
    }

    @ApiOperation("Gets terrain history data size by criteria")
    @PostMapping("history-data-size")
    public ResponseEntity<Integer> getHistoryDataSize(@RequestBody TerrainHistoryCriteria criteria) throws Exception {
        return super.getHistoryDataSize(criteria);
    }
    public TerrainRestAdmin (TerrainAdminService service, TerrainConverter converter) {
        super(service, converter);
    }


}