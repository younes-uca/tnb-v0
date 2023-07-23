package  ma.sir.tnb.ws.converter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;


import ma.sir.tnb.zynerator.util.StringUtil;
import ma.sir.tnb.zynerator.converter.AbstractConverter;
import ma.sir.tnb.zynerator.util.DateUtil;
import ma.sir.tnb.bean.history.TerrainHistory;
import ma.sir.tnb.bean.core.Terrain;
import ma.sir.tnb.ws.dto.TerrainDto;

@Component
public class TerrainConverter extends AbstractConverter<Terrain, TerrainDto, TerrainHistory> {

    @Autowired
    private CategorieTerrainConverter categorieTerrainConverter ;
    @Autowired
    private RedevableConverter redevableConverter ;
    private boolean categorieTerrain;
    private boolean redevable;

    public  TerrainConverter(){
        super(Terrain.class, TerrainDto.class, TerrainHistory.class);
    }

    @Override
    public Terrain toItem(TerrainDto dto) {
        if (dto == null) {
            return null;
        } else {
        Terrain item = new Terrain();
            if(StringUtil.isNotEmpty(dto.getId()))
                item.setId(dto.getId());
            if(StringUtil.isNotEmpty(dto.getRef()))
                item.setRef(dto.getRef());
            if(this.categorieTerrain && dto.getCategorieTerrain()!=null &&  dto.getCategorieTerrain().getId() != null)
                item.setCategorieTerrain(categorieTerrainConverter.toItem(dto.getCategorieTerrain())) ;

            if(this.redevable && dto.getRedevable()!=null &&  dto.getRedevable().getId() != null)
                item.setRedevable(redevableConverter.toItem(dto.getRedevable())) ;



        return item;
        }
    }

    @Override
    public TerrainDto toDto(Terrain item) {
        if (item == null) {
            return null;
        } else {
            TerrainDto dto = new TerrainDto();
            if(StringUtil.isNotEmpty(item.getId()))
                dto.setId(item.getId());
            if(StringUtil.isNotEmpty(item.getRef()))
                dto.setRef(item.getRef());
        if(this.categorieTerrain && item.getCategorieTerrain()!=null) {
            dto.setCategorieTerrain(categorieTerrainConverter.toDto(item.getCategorieTerrain())) ;
        }
        if(this.redevable && item.getRedevable()!=null) {
            dto.setRedevable(redevableConverter.toDto(item.getRedevable())) ;
        }


        return dto;
        }
    }


    public void initObject(boolean value) {
        this.categorieTerrain = value;
        this.redevable = value;
    }


    public CategorieTerrainConverter getCategorieTerrainConverter(){
        return this.categorieTerrainConverter;
    }
    public void setCategorieTerrainConverter(CategorieTerrainConverter categorieTerrainConverter ){
        this.categorieTerrainConverter = categorieTerrainConverter;
    }
    public RedevableConverter getRedevableConverter(){
        return this.redevableConverter;
    }
    public void setRedevableConverter(RedevableConverter redevableConverter ){
        this.redevableConverter = redevableConverter;
    }
    public boolean  isCategorieTerrain(){
        return this.categorieTerrain;
    }
    public void  setCategorieTerrain(boolean categorieTerrain){
        this.categorieTerrain = categorieTerrain;
    }
    public boolean  isRedevable(){
        return this.redevable;
    }
    public void  setRedevable(boolean redevable){
        this.redevable = redevable;
    }
}
